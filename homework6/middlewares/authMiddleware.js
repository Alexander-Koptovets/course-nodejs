import { users } from "../database.js";

export const authMiddleware = (req, res, next) => {
    const auth = req.header("Authorization");

    if (auth?.startsWith("Basic ")) {
        const authData = auth.substring(6, auth.length).split(":");
        const isUser = users.find(({ name, password }) =>
            password === authData[1] && name === authData[0]);

        if (isUser) {
            next();
            return;
        }
    }

    res.status(401).end("Auth header not provided");
};
