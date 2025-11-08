import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../constants/HttpStatus";
import { apiResponse } from "../../utils/apiResponse.utils";

export const getAllProducts = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = { message: "get all products" };
    res.status(HttpStatus.OK).json(apiResponse(true, result));
  } catch (error) {
    console.error("[Controller: getAllProducts]", error);
    next(error);
  }
};
