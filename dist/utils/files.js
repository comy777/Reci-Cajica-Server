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
exports.getAllFilesCludinary = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    api_key: process.env.API_KEY,
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.API_SECRET
});
const getAllFilesCludinary = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield cloudinary_1.v2.api.resources();
        const files = resp.resources;
        const newData = getDataFiles(files);
        return newData;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllFilesCludinary = getAllFilesCludinary;
const getDataFiles = (data) => {
    const newData = data.map((item, i) => {
        const { width, height, folder, secure_url } = item;
        const data = { width, height, folder, secure_url };
        return data;
    });
    return newData;
};
