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
exports.sendEmailUser = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
    },
});
const sendEmailUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail({
            from: '"Cajica Recicla"',
            to: email,
            subject: "Peticion recibida",
            text: "Nos pondremos en contacto con usted para darle mas informacion al respecto de cajica recicla",
            html: "<b>Hello world?</b>", // html body
        });
        return true;
    }
    catch (error) {
        console.log(error);
        return;
    }
});
exports.sendEmailUser = sendEmailUser;
