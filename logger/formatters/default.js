export default function formatMessage(date, level, category, message) {
    return `Date: ${date}, category:${category}, level:${level}, message: ${formatSpreadMessage(message)}`;
};

function formatSpreadMessage(message) {
    if (typeof message === 'string') {
        return message;
    }

    return message.map(arg => {
        if (typeof arg === 'object') {
            return JSON.stringify(arg);
        } else {
            return String(arg);
        }
    }).join(', ');
}