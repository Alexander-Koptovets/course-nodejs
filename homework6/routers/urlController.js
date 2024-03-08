import express from 'express';
import { generateHash } from "../../homework1/index.js";
import { urlDatabase } from "../database.js";

const router = express.Router();

router.post('/add', (req, res) => {
    const { name, url } = req.body;
    const code = generateHash(5);
    const newUrl = { code, name, url, visits: 0, created_time: new Date(), user: req.user };
    urlDatabase.push(newUrl);

    res.json({ success: true, message: 'URL added successfully', data: newUrl });
});

router.get('/info/:code', (req, res) => {
    const { code } = req.params;
    const urlInfo = urlDatabase.find(url => url.code === code);

    if (urlInfo) {
        res.json({ success: true, data: urlInfo });
    } else {
        res.status(404).json({ success: false, message: 'URL not found' });
    }
});

export default router;
