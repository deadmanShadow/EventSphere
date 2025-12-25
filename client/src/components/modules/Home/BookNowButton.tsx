"use client";

import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Loader2, Ticket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const BookNowButton = ({
  eventId,
  disabled = false,
}: {
  eventId: string;
  disabled?: boolean;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBookNow = async () => {
    if (disabled || loading) return;

    try {
      setLoading(true);

      const userInfo = await getUserInfo();

      if (userInfo) {
        router.push(`/book-event/${eventId}`);
      } else {
        router.push(`/login?redirect=/book-event/${eventId}`);
      }
    } finally {
      // In case navigation is slow or fails
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleBookNow}
      disabled={disabled || loading}
      size="lg"
      className={`w-full shadow-md hover:shadow-lg transition-all px-5 ${
        disabled || loading
          ? "bg-primary/90 cursor-not-allowed"
          : "bg-primary hover:to-purple-700"
      } text-white`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Processing...
        </span>
      ) : (
        <>
          <Ticket className="w-4 h-4 mr-2" />
          {disabled ? "Event Passed" : "Book Now"}
        </>
      )}
    </Button>
  );
};
