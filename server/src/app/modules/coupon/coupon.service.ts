import httpStatus from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { prisma } from "../../shared/prisma";

const createCoupon = async (payload: any) => {
  const result = await prisma.coupon.create({
    data: payload,
  });
  return result;
};

const getAllCoupons = async () => {
  const result = await prisma.coupon.findMany();
  return result;
};

const validateCoupon = async (code: string, amount: number) => {
  const coupon = await prisma.coupon.findUnique({
    where: { code },
  });

  if (!coupon) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid coupon code");
  }

  if (!coupon.isActive) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon is inactive");
  }

  const now = new Date();
  if (now < coupon.validFrom || now > coupon.validUntil) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon is expired or not yet valid");
  }

  if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
    throw new AppError(httpStatus.BAD_REQUEST, "Coupon usage limit exceeded");
  }

  let discountAmount = 0;

  if (coupon.discountType === "PERCENTAGE") {
    discountAmount = (amount * coupon.discountValue) / 100;
  } else {
    discountAmount = coupon.discountValue;
  }

  // Ensure discount doesn't exceed total amount
  if (discountAmount > amount) {
    discountAmount = amount;
  }

  return {
    coupon,
    discountAmount,
    finalAmount: amount - discountAmount
  };
};

export const CouponService = {
  createCoupon,
  getAllCoupons,
  validateCoupon,
};
