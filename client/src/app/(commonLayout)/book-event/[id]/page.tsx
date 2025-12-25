import { BookingPaymentSummary } from "@/components/modules/event/BookingPaymentSummary";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventsById } from "@/services/admin/eventManagement";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BookEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await getEventsById(id);
  
  if (!result?.success || !result?.data) {
    notFound();
  }

  const event = result.data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Event Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Image src={event.image} alt={event.name} width={120} height={120} className="rounded-lg object-cover" />
                  <div>
                    <Badge className="mb-2 bg-[#a11f65]">{event.type.name}</Badge>
                    <h3 className="font-bold text-xl mb-2">{event.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.dateTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <BookingPaymentSummary eventId={event.id} originalFee={event.joiningFee} currency={event.currency} />
          </div>
        </div>
      </div>
    </div>
  );
}
