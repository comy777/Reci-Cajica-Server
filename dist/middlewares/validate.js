"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const express_validator_1 = require("express-validator");
const validateForm = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(404).send({
            error: errors.array()[0].msg,
        });
    }
    next();
};
exports.validateForm = validateForm;
