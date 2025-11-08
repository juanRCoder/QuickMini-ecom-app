import { NextFunction, Request, Response } from "express";
import { HttpStatus } from "@server/constants/HttpStatus";
import { apiResponse } from "@server/utils/apiResponse.utils";
import { ProductServices } from "@server/api/products/products.service";
import { productListDto } from "@server/api/products/products.dto";

export const getAllProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productList: productListDto[] =
      await ProductServices.findAllProducts();

    if (!productList.length) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json(apiResponse(false, { message: "There are no products" }));
    }
    return res.status(HttpStatus.OK).json(apiResponse(true, productList));
  } catch (error) {
    console.error("[Controller: getAllProducts]", error);
    next(error);
  }
};
