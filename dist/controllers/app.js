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
exports.uploadFiles = exports.appGetRequestUser = void 0;
const FormUser_1 = __importDefault(require("../models/FormUser"));
const config_1 = require("../emails/config");
const upload_1 = require("../utils/upload");
const validateModel_1 = require("../utils/validateModel");
const appGetRequestUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { email } = data;
        const formUser = new FormUser_1.default(data);
        yield formUser.save();
        const resp = yield (0, config_1.sendEmailUser)(email);
        if (!resp)
            return res.status(503).send({ error: "Error del servidor" });
        return res.status(200).send({
            id: formUser._id,
            msg: "Su peticion ha sido recibida con exito",
        });
    }
    catch (error) {
        res.send({ error: "Error del servidor" });
    }
});
exports.appGetRequestUser = appGetRequestUser;
const uploadFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const file = req.file;
        const validateForm = yield (0, validateModel_1.validateFormUser)(id);
        if (!validateForm)
            return res.send({ error: "Error del servidor" });
        if (!file)
            return res.send({ error: "No hay archivos para subir" });
        const resp = yield (0, upload_1.uploadFileFirebase)(file);
        if (!resp)
            return res.send({ error: "Error al subir archivo" });
        const updateFile = yield (0, validateModel_1.validateFormUser)(id, resp);
        if (!updateFile)
            return res.send({ error: "Error del servidor" });
        return res.send({ msg: "Archivo guardado con exito" });
    }
    catch (error) {
        res.send({ error: "Error del servidor" });
    }
});
exports.uploadFiles = uploadFiles;
