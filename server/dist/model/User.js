const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Users', usersSchema);
//# sourceMappingURL=User.js.map