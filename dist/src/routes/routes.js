"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const app_1 = require("../controllers/app");
const validate_1 = require("../middlewares/validate");
const appRoutes = (0, express_1.Router)();
appRoutes.post("", [
    (0, express_validator_1.check)("msg", "Mensaje requerido").notEmpty(),
    (0, express_validator_1.check)("email", "Correo electronico requerido").notEmpty(),
    (0, express_validator_1.check)("email", "Correo electronico no valido").isEmail(),
    validate_1.validateForm,
], app_1.appGetRequestUser);
exports.default = appRoutes;
