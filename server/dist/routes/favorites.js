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
const Movie_1 = require("../model/Movie");
const router = require('express').Router();
router.post('/favorite', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = new Movie_1.MovieModel({
        title: req.body.title,
        type: req.body.type,
        cast: req.body.cast,
        rated: req.body.rated,
        directors: req.body.directors,
        plot: req.body.plot,
        release: req.body.realease,
    });
}));
exports.default = router;
//# sourceMappingURL=favorites.js.map