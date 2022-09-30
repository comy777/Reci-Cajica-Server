import { Router } from "express";
import { check } from "express-validator";
import { appGetRequestUser } from "../controllers/app";
import { validateForm } from "../middlewares/validate";

const appRoutes = Router();

appRoutes.post(
  "",
  [
    check("msg", "Mensaje requerido").notEmpty(),
    check("email", "Correo electronico requerido").notEmpty(),
    check("email", "Correo electronico no valido").isEmail(),
    validateForm,
  ],
  appGetRequestUser
);

export default appRoutes;
