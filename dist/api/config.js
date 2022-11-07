"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFaticon = void 0;
const axios_1 = __importDefault(require("axios"));
exports.apiFaticon = axios_1.default.create({
    baseURL: process.env.API_FATICON_URL
});
