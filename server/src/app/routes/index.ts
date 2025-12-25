import express from "express";
import { adminRoutes } from "../modules/admin/admin.route";
import { authRoutes } from "../modules/auth/auth.route";
import { CouponRoutes } from "../modules/coupon/coupon.route";
import { eventRoutes } from "../modules/event/event.route";
import { eventTypeRoutes } from "../modules/eventType/eventType.route";
import { friendRoutes } from "../modules/friend/friend.route";
import { paymentRoutes } from "../modules/payment/payment.route";
import { reviewRoutes } from "../modules/review/review.route";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/coupons",
    route: CouponRoutes,
  },

  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
    {
    path: "/event-types",
    route: eventTypeRoutes,
  },
  {
    path: "/events",
    route: eventRoutes,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
  {
    path: "/payments",
    route: paymentRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
  {
    path: "/friends",
    route: friendRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
