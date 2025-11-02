import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error & { status?: number },
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  res.status(status).json({success: false, payload: { message, code: status }});
}