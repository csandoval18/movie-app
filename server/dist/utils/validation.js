"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
const Joi = require('@hapi/joi');
const registerValidation = (body) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(body);
};
exports.registerValidation = registerValidation;
const loginValidation = (body) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });
    return schema.validate(body);
};
exports.loginValidation = loginValidation;
//# sourceMappingURL=validation.js.map