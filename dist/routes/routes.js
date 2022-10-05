"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const multer_1 = __importStar(require("multer"));
const app_1 = require("../controllers/app");
const validate_1 = require("../middlewares/validate");
const appRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)({ storage: (0, multer_1.memoryStorage)() });
appRoutes.post("", [
    (0, express_validator_1.check)("msg", "Mensaje requerido").notEmpty(),
    (0, express_validator_1.check)("email", "Correo electronico requerido").notEmpty(),
    (0, express_validator_1.check)("email", "Correo electronico no valido").isEmail(),
    validate_1.validateForm,
], app_1.appGetRequestUser);
appRoutes.put("/:id", [
    (0, express_validator_1.check)("id", "Id no valido").isMongoId(),
    validate_1.validateForm,
    upload.single("file"),
], app_1.uploadFiles);
exports.default = appRoutes;
