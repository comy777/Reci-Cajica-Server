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
exports.uploadFileFirebase = void 0;
const storage_1 = require("firebase/storage");
const uuid_1 = require("uuid");
const config_1 = require("../firebase/config");
const uploadFileFirebase = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refData, id } = createRef();
        const { buffer } = file;
        yield (0, storage_1.uploadBytes)(refData, buffer);
        return id;
    }
    catch (error) {
        console.log(error);
    }
});
exports.uploadFileFirebase = uploadFileFirebase;
const createRef = () => {
    const id = (0, uuid_1.v4)();
    const refData = (0, storage_1.ref)(config_1.storageFirebase, `uploads/${id}`);
    return { refData, id };
};
