import { Router } from "express";
import {
  getAllOrders,
  createOrder,
} from "@server/api/orders/orders.controller";

const orderRouter = Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createOrder);

export default orderRouter;
