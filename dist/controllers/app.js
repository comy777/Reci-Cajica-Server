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
exports.appGetRequestUser = void 0;
const FormUser_1 = __importDefault(require("../models/FormUser"));
const config_1 = require("../emails/config");
const appGetRequestUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { email } = data;
    const formUser = new FormUser_1.default(data);
    yield formUser.save();
    const resp = yield (0, config_1.sendEmailUser)(email);
    if (!resp)
        return res.status(503).send({ error: "Error del servidor" });
    return res
        .status(200)
        .send({ msg: "Su peticion ha sido recibida con exito" });
});
exports.appGetRequestUser = appGetRequestUser;