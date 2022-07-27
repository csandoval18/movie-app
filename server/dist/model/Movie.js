"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    title: String,
    type: String,
    cast: [String],
    rated: String,
    directors: [String],
    fullplot: String,
    released: Date,
});
module.exports = {
    movieSchema,
};
//# sourceMappingURL=Movie.js.map