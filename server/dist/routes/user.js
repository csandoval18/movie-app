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
const User_1 = require("../model/User");
const validation_1 = require("../utils/validation");
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuth_1 = require("../utils/isAuth");
require('dotenv').config();
const router = require('express').Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, validation_1.registerValidation)(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const usernameExists = yield User_1.UserModel.findOne({
        username: req.body.username,
    });
    if (usernameExists)
        return res
            .status(400)
            .send({ field: 'username', msg: 'Username already taken' });
    const emailExists = yield User_1.UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res
            .status(400)
            .send({ field: 'email', msg: 'Email is already linked to an account' });
    const hashpw = yield argon2_1.default.hash(req.body.password);
    const user = new User_1.UserModel({
        username: req.body.username,
        email: req.body.email,
        password: hashpw,
    });
    try {
        const savedUser = yield user.save();
        return res.send(savedUser);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, validation_1.loginValidation)(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const user = yield User_1.UserModel.findOne({ username: req.body.username });
    if (!user)
        return res
            .status(400)
            .send({ field: 'username', msg: 'Username or password is incorrect' });
    const valid = yield argon2_1.default.verify(user.password, req.body.password);
    if (!valid)
        return res.status(400).send({ field: 'password', msg: 'Wrong password' });
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    return res.header('Authorization', token).send(token);
}));
router.post('/me', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, isAuth_1.isAuth)(req, res, next);
    res.send();
}));
exports.default = router;
//# sourceMappingURL=user.js.map