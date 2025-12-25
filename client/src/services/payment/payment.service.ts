"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";

export async function initiatePayment(eventId: string, couponCode?: string) {
    try {
        const response = await serverFetch.post(`/events/${eventId}/initiate-payment`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ couponCode }),
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error initiating payment:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to initiate payment",
        };
    }
}

export async function validateCoupon(code: string, amount: number) {
    try {
        const response = await serverFetch.post(`/coupons/validate`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, amount }),
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error validating coupon:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to validate coupon",
        };
    }
}

export async function getPaymentStatus(eventid: string) {
    try {
        const response = await serverFetch.get(`/payment/status/${eventid}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error fetching payment status:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to fetch payment status",
        };
    }
}

export async function verifyPayment(sessionId: string) {
    try {
        const response = await serverFetch.get(`/payments/verify?sessionId=${sessionId}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error verifying payment:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to verify payment",
        };
    }
}