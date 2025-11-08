import { Router } from "express";
import { getAllProducts } from "@/api/products/products.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);

export default productRouter;
