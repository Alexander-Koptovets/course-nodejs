import express from 'express';
import bodyParser from 'body-parser';

import { authMiddleware } from './middlewares/authMiddleware.js';
import urlRouter from './routers/urlController.js';
import codeRouter from './routers/codeController.js';
import userRouter from './routers/userController.js';
import { rateLimitByUserId, rateLimitByCode } from "./middlewares/rateLimit.js";

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

// app.use(authMiddleware);

app.use('/urls', urlRouter);
app.use('/code', rateLimitByUserId, rateLimitByCode, codeRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
