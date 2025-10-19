import React from "react";
import Button from "../common/Button";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const nights = 7;
  const subtotal = price * nights;
  const discount = 88;
  const serviceFee = 33;
  const total = subtotal - discount + serviceFee;

  const handleReserve = () => {
    alert("Reservation successful!");
  }

  return (
    <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-2xl w-full max-w-sm">
      {/* Price Header */}
      <div className="flex items-end gap-1 mb-6">
        <h3 className="text-3xl font-semibold text-gray-900">${price.toLocaleString()}</h3>
        <span className="text-gray-400 mb-1 text-sm">/night</span>
      </div>

      {/* Date Inputs */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Check in</label>
          <input
            type="date"
            placeholder="DD/MM/YY"
            className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Check out</label>
          <input
            type="date"
            placeholder="DD/MM/YY"
            className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-2 text-gray-700 text-sm mb-4">
        <div className="flex justify-between">
          <span>${price} × {nights} nights</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Weekly discounts</span>
          <span className="text-red-500">-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>${serviceFee}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center text-base font-semibold border-t border-gray-200 pt-3 pb-6">
        <span>Total payment</span>
        <span className="text-[#34967c]">${total}</span>
      </div>

      {/* Reserve Button */}
      <Button variant="reserve" onClick={handleReserve}>
        Reserve now
      </Button>
    </div>
  );
};

export default BookingSection;
