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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDataApp = exports.validateFormUser = void 0;
const DataApp_1 = __importDefault(require("../models/DataApp"));
const DataCardImages_1 = __importDefault(require("../models/DataCardImages"));
const DataListMaterials_1 = __importDefault(require("../models/DataListMaterials"));
const FormUser_1 = __importDefault(require("../models/FormUser"));
const validateFormUser = (id, file, url, originalname, extensionFile) => __awaiter(void 0, void 0, void 0, function* () {
    const formUser = yield FormUser_1.default.findById(id);
    if (!formUser)
        return;
    if (file) {
        yield FormUser_1.default.findByIdAndUpdate(id, { file, url, originalname, extensionFile });
    }
    return true;
});
exports.validateFormUser = validateFormUser;
const validateDataApp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data === "app") {
        return yield DataApp_1.default.find({});
    }
    if (data === "card") {
        return yield DataCardImages_1.default.find({});
    }
    if (data === "materials") {
        return yield DataListMaterials_1.default.find({});
    }
    return [];
});
exports.validateDataApp = validateDataApp;
