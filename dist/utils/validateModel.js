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
exports.validateFormUser = void 0;
const FormUser_1 = __importDefault(require("../models/FormUser"));
const validateFormUser = (id, file) => __awaiter(void 0, void 0, void 0, function* () {
    const formUser = yield FormUser_1.default.findById(id);
    if (!formUser)
        return;
    if (file) {
        yield FormUser_1.default.findByIdAndUpdate(id, { file });
    }
    return true;
});
exports.validateFormUser = validateFormUser;
