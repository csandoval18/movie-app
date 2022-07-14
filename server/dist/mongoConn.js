"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConn = () => {
    const url = 'mongodb+srv://csandoval:<password>@mflix.cjrmd.mongodb.net/test';
    mongoose_1.default.connect(url, {
        auth: { username: 'csandoval', password: 'chiclayo1018' },
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