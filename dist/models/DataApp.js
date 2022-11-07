"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataAppSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: "",
        trim: true,
    },
    body: {
        type: String,
        default: "",
        trim: true,
    },
    image: {
        type: String,
        default: "",
        trim: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("appData", DataAppSchema);
