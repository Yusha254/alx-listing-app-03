import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName : "Villa Arrecife Beach House",
    image : "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    rating : 4.76,
    reviews : 345,
    startDate : "24 August 2024",
    time : "1 PM",
    totalNights : 3,
    bookingFee : 65,
    price : 7500,
  };

  return (
    <div className="container mx-auto p-6 pr-12">
      <div className="grid grid-cols-[7fr_5fr] gap-0">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}
