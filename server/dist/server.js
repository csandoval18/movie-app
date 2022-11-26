"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoConn_1 = __importDefault(require("./mongoConn"));
const users_1 = __importDefault(require("./routes/users"));
require('dotenv').config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    (0, mongoConn_1.default)();
    app.use((0, cors_1.default)({
        origin: ['http://localhost:3000'],
        credentials: true,
    }));
    app.use(express_1.default.json());
    app.use('/api/users', users_1.default);
    const port = process.env.PORT;
    app.listen(port, () => console.log('Server started in port:', port));
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=server.js.map