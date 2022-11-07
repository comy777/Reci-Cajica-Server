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
exports.getIconFaticon = exports.getTokenFaticon = void 0;
const config_1 = require("../api/config");
const TokenFaticon_1 = __importDefault(require("../models/TokenFaticon"));
const getTokenFaticon = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = { apikey: process.env.API_FATICON };
        const resp = yield config_1.apiFaticon.post('authentication', body);
        const { token } = resp.data.data;
        yield saveToken(token);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTokenFaticon = getTokenFaticon;
const saveToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const validateTokenExists = yield TokenFaticon_1.default.find({});
    if (validateTokenExists.length > 0) {
        const { _id } = validateTokenExists[0];
        yield TokenFaticon_1.default.findByIdAndUpdate(_id, { token });
        return;
    }
    const newToken = new TokenFaticon_1.default({ token });
    yield newToken.save();
});
const getIconFaticon = (icon) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respToken = yield TokenFaticon_1.default.find({});
        if (respToken.length === 0)
            return;
        const { token } = respToken[0];
        console.log(token);
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const resp = yield config_1.apiFaticon.get(`search/icons/added?q=${icon}`, {
            headers
        });
        console.log(resp.data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getIconFaticon = getIconFaticon;
