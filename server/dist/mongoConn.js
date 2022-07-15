"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const mongoConn = () => {
    const url = 'mongodb+srv://<username>:<password>@mflix.cjrmd.mongodb.net/test';
    mongoose_1.default.connect(url, {
        auth: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
    });
    const db = mongoose_1.default.connection;
    db.once('open', () => {
        console.log('Database conneced:', url);
    });
    db.on('error', (err) => {
        console.error('connection error', err);
    });
};
exports.default = mongoConn;
//# sourceMappingURL=mongoConn.js.map