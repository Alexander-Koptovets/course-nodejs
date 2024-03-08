import express from 'express';
import bodyParser from 'body-parser';

import { authMiddleware } from './middlewares/authMiddleware.js';
import urlRouter from './routers/urlController.js';
import codeRouter from './routers/codeController.js';
import userRouter from './routers/userController.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(authMiddleware);

app.use('/urls', urlRouter);
app.use('/code', codeRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
