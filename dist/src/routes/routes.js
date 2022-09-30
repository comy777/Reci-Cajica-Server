"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = require("../controllers/app");
const appRoutes = (0, express_1.Router)();
appRoutes.post("", [], app_1.appGetRequestUser);
exports.default = appRoutes;
