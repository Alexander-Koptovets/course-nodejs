import redis from 'redis';

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

client.on('error', (err) => {
    console.error('Error connecting to Redis server:', err);
});

export const checkRateLimit = async (key, limit, ttl) => {
    const count = await client.hGet('rateLimits', key) || 0;
    if (parseInt(count) >= limit) {
        throw new Error('429 Rate Limit');
    } else {
        await client.hSet('rateLimits', key, parseInt(count) + 1, 'EX', ttl);
    }
}

export function rateLimitByUserId(req, res, next) {
    const { userId } = req.body;
    const key = `userId:${userId}`;
    checkRateLimit(key, 1000, 24 * 60 * 60)
        .then(() => next())
        .catch(err => res.status(429).send(err.message));
}

export function rateLimitByCode(req, res, next) {
    const { code } = req.query;
    const key = `code:${code}`;
    checkRateLimit(key, 100, 60 * 60)
        .then(() => next())
        .catch(err => res.status(429).send(err.message));
}
