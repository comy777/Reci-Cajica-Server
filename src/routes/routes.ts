import { Router } from "express";
import { check, param } from "express-validator";
import multer, { memoryStorage } from "multer";
import { appGetRequestUser, getAllForms, getDataApp, uploadFiles } from "../controllers/app";
import { validateForm, validateQuery } from "../middlewares/validate";

const appRoutes = Router();
const upload = multer({ storage: memoryStorage() });

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

appRoutes.put(
  "/:id",
  [
    check("id", "Id no valido").isMongoId(),
    validateForm,
    upload.single("file"),
  ],
  uploadFiles
);

appRoutes.get(
  "/:q",
  [
    param("q", "Peticion no valida").custom(validateQuery),
    validateForm
  ],
  getDataApp
);

appRoutes.get("/forms/data", getAllForms);

export default appRoutes;
