import { UserRole } from "@prisma/client";
import express from "express";
import auth from "../../middlewares/checkAuth";
import { CouponController } from "./coupon.controller";

const router = express.Router();

router.post("/", auth(UserRole.ADMIN), CouponController.createCoupon);
router.get("/", auth(UserRole.ADMIN), CouponController.getAllCoupons);
router.post("/validate", CouponController.validateCoupon);

export const CouponRoutes = router;
