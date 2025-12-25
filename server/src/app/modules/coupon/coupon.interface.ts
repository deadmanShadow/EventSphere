import { DiscountType } from "@prisma/client";

export type ICoupon = {
  code: string;
  discountType: DiscountType;
  discountValue: number;
  validFrom: Date;
  validUntil: Date;
  usageLimit?: number;
};
