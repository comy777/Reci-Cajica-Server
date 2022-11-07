import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { DataAppInterface } from "../interfaces/interfaces";

export const validateForm = (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({
      error: errors.array()[0].msg,
    });
  }
  next();
};

export const validateQuery = (value: string) => {
  const validateData  = ["app", "materials", "card"]
  if(!validateData.includes(value)) return
  return true
}