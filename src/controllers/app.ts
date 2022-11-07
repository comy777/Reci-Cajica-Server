import { Request, Response } from "express";
import { RequestGet } from "../interfaces/request";
import FormUser from "../models/FormUser";
import { sendEmailUser } from "../emails/config";
import { uploadFileFirebase } from "../utils/upload";
import { validateDataApp, validateFormUser } from "../utils/validateModel";
import { DataAppInterface } from "../interfaces/interfaces";
import { getAllFilesCludinary } from "../utils/files";
import { getIconFaticon } from "../utils/faticon";

export const appGetRequestUser = async (req: Request, res: Response) => {
  try {
    const data: RequestGet = req.body;
    const { email } = data;
    const formUser = new FormUser(data);
    await formUser.save();
    const resp = await sendEmailUser(email);
    if (!resp) return res.status(503).send({ error: "Error del servidor" });
    return res.status(200).send({
      id: formUser._id,
      msg: "Su peticion ha sido recibida con exito",
    });
  } catch (error) {
    res.send({ error: "Error del servidor" });
  }
};

export const uploadFiles = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const file = req.file;
    const validateForm = await validateFormUser(id);
    if (!validateForm) return res.send({ error: "Error del servidor" });
    if (!file) return res.send({ error: "No hay archivos para subir" });
    const resp = await uploadFileFirebase(file);
    if (!resp) return res.send({ error: "Error al subir archivo" });
    const icon = await getIconFaticon(resp.extension)
    const updateFile = await validateFormUser(id, resp.id, resp.url, resp.originalname, resp.extension, icon);
    if (!updateFile) return res.send({ error: "Error del servidor" });
    return res.send({ msg: "Archivo guardado con exito" });
  } catch (error) {
    res.send({ error: "Error del servidor" });
  }
};

export const getDataApp = async (req: Request, res: Response) => {
  const { q } = req.params
  const search: DataAppInterface = q
  const resp = await validateDataApp(search)
  return res.send({ data: resp })
}

export const getAllForms = async (req: Request, res: Response) => {
  const forms = await FormUser.find({})
  console.log("here")
  return res.status(200).send({ forms })
}

export const getFilesGalery = async (req: Request, res: Response) => {
  const resp = await getAllFilesCludinary()
  return res.status(200).send({ files: resp })
}

export const getIcon = async (req: Request, res: Response) => {
  const { q } = req.params
  const resp = await getIconFaticon(q)
  return res.status(200).send({ icon: resp })
}