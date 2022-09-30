import { Request, Response } from "express";
import { RequestGet } from "../interfaces/request";
import FormUser from "../models/FormUser";
import { sendEmailUser } from "../emails/config";

export const appGetRequestUser = async (req: Request, res: Response) => {
  const data: RequestGet = req.body;
  const { email } = data;
  const formUser = new FormUser(data);
  await formUser.save();
  const resp = await sendEmailUser(email);
  if (!resp) return res.status(503).send({ error: "Error del servidor" });
  return res
    .status(200)
    .send({ msg: "Su peticion ha sido recibida con exito" });
};
