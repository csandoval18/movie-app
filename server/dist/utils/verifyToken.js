"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res) => {
    const token = req.headers['authorization'];
    console.log('verify token request header:', req.headers['authorization']);
    if (!token)
        return res.status(401).send('Server Access Denied');
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = payload;
        return res.status(200).send(req.user);
    }
    catch (err) {
        res.send('You are not authorized');
    }
};
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map