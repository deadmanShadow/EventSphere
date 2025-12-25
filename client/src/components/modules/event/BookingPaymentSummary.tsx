"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { formatCurrency } from "@/lib/currency";
import { initiatePayment, validateCoupon } from "@/services/payment/payment.service";
import { CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";

interface BookingPaymentSummaryProps {
  eventId: string;
  originalFee: number;
  currency?: string;
}

export const BookingPaymentSummary = ({ eventId, originalFee, currency = "USD" }: BookingPaymentSummaryProps) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const finalFee = Math.max(0, originalFee - discount);

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    setIsValidating(true);
    try {
      const result = await validateCoupon(couponCode, originalFee);
      if (result.success && result.data) {
        setDiscount(result.data.discountAmount);
        setAppliedCoupon(couponCode);
        toast.success("Coupon applied successfully!");
      } else {
        toast.error(result.message || "Invalid coupon code");
        setDiscount(0);
        setAppliedCoupon(null);
      }
    } catch (error) {
        console.error(error);
      toast.error("Failed to apply coupon");
    } finally {
      setIsValidating(false);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const result = await initiatePayment(eventId, appliedCoupon || undefined);
      if (result.success && result.data?.url) {
        const url = result.data.url.startsWith('http') 
          ? result.data.url 
          : `https://${result.data.url}`;
        window.location.href = url;
      } else {
        toast.error("Payment failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An error occurred while processing payment");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Amount Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Joining Fee</span>
            <span className="font-semibold">{formatCurrency(originalFee, currency)}</span>
          </div>

          {discount > 0 && (
             <div className="flex justify-between text-green-600">
               <span>Discount</span>
               <span>-{formatCurrency(discount, currency)}</span>
             </div>
          )}

          <div className="border-t pt-3 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-[#a11f65]">{formatCurrency(finalFee, currency)}</span>
          </div>

          <div className="pt-4 space-y-2">

  {/* Coupon hint */}
  <p className="text-xs text-muted-foreground">
    Use <span className="font-semibold">WELCOME10</span> to get some expensive off 🎁
  </p>
              
               <Input 
                 placeholder="Coupon Code" 
                 value={couponCode}
                 onChange={(e) => setCouponCode(e.target.value)}
                 disabled={!!appliedCoupon || isValidating || isProcessing}
               />
               {appliedCoupon ? (
                 <Button variant="outline" onClick={() => {
                   setAppliedCoupon(null);
                   setDiscount(0);
                   setCouponCode("");
                 }} disabled={isProcessing}>
                   Remove
                 </Button>
               ) : (
                 <Button onClick={handleApplyCoupon} disabled={!couponCode || isValidating || isProcessing}>
                   {isValidating ? <Loader2 className="h-4 w-4 animate-spin" /> : "Apply"}
                 </Button>
               )}

          </div>

          <Button
            onClick={handlePayment}
            className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              <>
                <CreditCard className="w-4 h-4 mr-2" />
                Proceed to Payment
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
