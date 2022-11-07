"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataListMaterials = new mongoose_1.Schema({
    title: {
        type: String,
        default: "",
        trim: true
    },
    items: {
        type: [
            {
                title: String,
                image: String,
                href: String
            }
        ],
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("dataListMaterials", DataListMaterials);
