import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../constants/HttpStatus";


export const getAllProducts = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

  res.status(HttpStatus.OK).json({ message: "get all products" });
  // throw HttpError(HttpStatus.NOT_FOUND, "Productos no encontrados");

  } catch (error) {
    console.error("[Controller: getAllProducts]", error);
    next(error);
  }
};
