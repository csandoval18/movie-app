"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require('dotenv').config();
const isAuth = (req, res) => {
    const authorization = req.headers['authorization'];
    console.log('request header:', req.headers['authorization']);
    try {
        const payload = (0, jsonwebtoken_1.verify)(authorization, process.env.TOKEN_SECRET);
        console.log('payload:', payload);
        return payload;
    }
    catch (err) {
        console.log('err:', err);
    }
};
exports.isAuth = isAuth;
//# sourceMappingURL=isAuth.js.map