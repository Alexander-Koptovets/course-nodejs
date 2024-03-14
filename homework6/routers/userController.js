import express from 'express';
import { users } from "../database.js";

const router = express.Router();

router.post('/create', (req, res) => {
    const { name, password } = req.body;
    const created_time = new Date();
    const newUser = { name, password, created_time };
    users.push(newUser);

    res.json({ success: true, message: 'User created successfully', data: newUser });
});

router.get('/', (req, res) => {
    res.render('users', { users });
});

export default router;
