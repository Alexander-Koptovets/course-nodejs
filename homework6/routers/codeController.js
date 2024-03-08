import express from 'express';
import { urlDatabase } from "../database.js";

const router = express.Router();

router.get('/:code', (req, res) => {
    const { code } = req.params;
    const urlInfo = urlDatabase.find(url => url.code === code);

    if (urlInfo) {
        res.redirect(302, urlInfo.url);
        urlInfo.visits += 1;
    } else {
        res.status(404).json({ success: false, message: 'URL not found' });
    }
});

export default router;
