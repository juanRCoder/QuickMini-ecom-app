import { Router } from "express";
import { getAllProducts } from "./products.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);

export default productRouter;
