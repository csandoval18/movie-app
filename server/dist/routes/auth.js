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
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const User = require('../model/User');
const validation_1 = require("../utils/validation");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, validation_1.registerValidation)(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    const usernameExists = yield User.findOne({ username: req.body.username });
    console.log('username:', usernameExists);
    if (usernameExists)
        return res.status(400).send('Username already taken');
    const emailExists = yield User.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send('Email is already linked to an account');
    const hashpw = yield argon2.hash(req.body.password);
    const user = new User({
        name: req.body.name,
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
    const user = yield User.findOne({ username: req.body.username });
    if (!user)
        return res.status(400).send('Username or password is incorrect');
    const valid = yield argon2.verify(user.password, req.body.password);
    if (!valid)
        return res.status(400).send('Wrong password');
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    return res.header('auth-token', token).send(token);
}));
exports.default = router;
//# sourceMappingURL=auth.js.map