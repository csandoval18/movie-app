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
const Movie_1 = require("../model/Movie");
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const router = require('express').Router();
router.post('/favorite', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movieData = req.body.movieData;
    console.log('data:', movieData);
    const movie = new Movie_1.MovieModel(movieData);
    console.log('movie:', movie);
    try {
        let payload = (0, isAuth_1.default)(req, res);
        console.log('result:', payload);
        if (payload !== false) {
            const user = yield User_1.UserModel.findOne({ username: payload.username });
            yield User_1.UserModel.findOneAndUpdate({ username: payload.username }, { $push: { favorites: movieData } });
            console.log('user:', user);
        }
        return res.status(200);
    }
    catch (err) {
        return res.status(400).send('error lol');
    }
}));
exports.default = router;
//# sourceMappingURL=favorite.js.map