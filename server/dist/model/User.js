"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.usersSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 45,
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 25,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 45,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 45,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model('Users', exports.usersSchema);
//# sourceMappingURL=User.js.map