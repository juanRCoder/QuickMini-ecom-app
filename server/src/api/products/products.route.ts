import { Router } from "express";
import { param } from "express-validator";
import {
  getAllProducts,
  getProductsByCategoryId,
} from "@server/api/products/products.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get(
  "/category/:id",
  param("id").isUUID().withMessage(`Invalid category ID`),
  getProductsByCategoryId
);

export default productRouter;
