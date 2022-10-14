"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const Movie_1 = __importDefault(require("./Movie"));
const User = new mongoose_1.Schema({
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
    date_created: {
        type: Date,
        default: Date.now,
    },
    favorites: {
        type: [Movie_1.default]
    },
});
exports.UserModel = mongoose_1.default.model('User', User);
exports.default = Movie_1.default;
//# sourceMappingURL=User.js.map