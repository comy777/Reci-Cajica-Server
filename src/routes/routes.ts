import { Router } from "express";
import { check } from "express-validator";
import multer, { memoryStorage } from "multer";
import { appGetRequestUser, uploadFiles } from "../controllers/app";
import { validateForm } from "../middlewares/validate";

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

export default appRoutes;
