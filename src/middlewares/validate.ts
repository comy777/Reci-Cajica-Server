import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateForm = (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).send({
      error: errors.array()[0].msg,
    });
  }
  next();
};
