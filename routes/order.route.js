import express from "express";
import { confirm, createOrder, getOrders, intent } from "../controllers/order.controller.js";
import verifyToken from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);
router.post("/:id", verifyToken, createOrder);

export default router;
