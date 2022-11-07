"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TokenFaticonSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: [true, 'El token es requerido']
    },
    expires: {
        type: Number,
        required: [true, "Fecha de expiracion requerida"]
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("token", TokenFaticonSchema);
