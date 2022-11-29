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
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const User_1 = require("../model/User");
const validation_1 = require("../utils/validation");
const verifyToken_1 = __importDefault(require("../utils/verifyToken"));
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
    const token = jsonwebtoken_1.default.sign({ _id: user._id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    return res.header('Authorization', token).send(token);
}));
router.post('/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, verifyToken_1.default)(req, res);
}));
router.post('/favorites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieData = req.body.movieData;
    console.log('favorites route');
    try {
        let payload = (0, isAuth_1.default)(req, res);
        if (payload) {
            const user = yield User_1.UserModel.findOne({ username: payload.username });
            console.log('user.fav:', user === null || user === void 0 ? void 0 : user.favorites);
            yield User_1.UserModel.findOneAndUpdate({ username: user === null || user === void 0 ? void 0 : user.username }, { $addToSet: { favorites: movieData } });
            console.log('user:', user);
        }
        return res.status(200).send('Added movie to favorites');
    }
    catch (err) {
        return res.status(400).send(err);
    }
}));
router.delete('/favorites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieID = req.body.movieId;
    try {
        let payload = (0, isAuth_1.default)(req, res);
        if (payload) {
            const user = yield User_1.UserModel.findOne({ username: payload.username });
            console.log('user favorites:', user === null || user === void 0 ? void 0 : user.favorites);
            yield User_1.UserModel.findOneAndUpdate({ username: user === null || user === void 0 ? void 0 : user.username }, { $addToSet: { favorites: movieID } });
        }
        return res.send(payload);
    }
    catch (err) {
        return res.send(err);
    }
}));
router.get('/favorites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = (0, isAuth_1.default)(req, res);
        if (payload) {
            const user = yield User_1.UserModel.findOne({ username: payload.username });
            console.log('user favorites:', user === null || user === void 0 ? void 0 : user.favorites);
            return res.status(200).send(user === null || user === void 0 ? void 0 : user.favorites);
        }
        return res.send(payload);
    }
    catch (err) {
        return res.send(err);
    }
}));
exports.default = router;
//# sourceMappingURL=users.js.map