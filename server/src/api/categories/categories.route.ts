import { Router } from "express";
import { getAllCategories } from "@server/api/categories/categories.controller";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);

export default categoryRouter;
