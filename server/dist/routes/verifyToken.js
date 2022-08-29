"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const verifyToken = (req, res) => {
    const token = req.headers['auth-token'];
    if (!token)
        return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    }
    catch (err) {
        res.status(400).send('Invalid Token');
    }
};
//# sourceMappingURL=verifyToken.js.map