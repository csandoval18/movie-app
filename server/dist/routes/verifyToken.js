"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
};
//# sourceMappingURL=verifyToken.js.map