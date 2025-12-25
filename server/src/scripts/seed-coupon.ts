import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const coupon = await prisma.coupon.upsert({
      where: { code: "WELCOME10" },
      update: {},
      create: {
        code: "WELCOME10",
        discountType: "PERCENTAGE",
        discountValue: 10,
        validFrom: new Date(),
        validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        usageLimit: 100,
      },
    });
    console.log("Coupon seeded:", coupon);
  } catch (error) {
    console.error("Error seeding coupon:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
