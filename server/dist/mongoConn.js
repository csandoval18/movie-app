"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const mongoConn = () => {
    const uri = process.env.ATLAS_URI;
    mongoose_1.default.connect(uri);
    const db = mongoose_1.default.connection;
    db.once('open', () => {
        console.log('Database conneced ✅ ');
    });
    db.on('error', (err) => {
        console.error('connection error', err);
    });
};
exports.default = mongoConn;
//# sourceMappingURL=mongoConn.js.map