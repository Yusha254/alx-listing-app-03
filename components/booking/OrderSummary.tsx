import React from "react";
import { FaStar } from "react-icons/fa";
import { OrderSummaryProps } from "@/interfaces/index";

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const {
    propertyName,
    image,
    rating,
    reviews,
    startDate,
    time,
    totalNights,
    bookingFee,
    price,
  } = bookingDetails;
  const grandTotal = bookingFee + price;

  return (
    <div className="p-6 rounded-lg shadow-sm border border-gray-200 h-fit my-2">
      {/* Section title */}
      <h2 className="text-lg font-semibold mb-4">Review Order Details</h2>

      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <img
          src={image}
          alt={propertyName}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Property Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {propertyName}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar className="text-yellow-500 mr-1" size={14} />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500 ml-1">( {reviews} reviews )</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md">
            {startDate}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md">
            {time}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md">
            {totalNights} Nights
          </span>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 text-sm">
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Booking fee</span>
          <span><strong className="text-gray-950">${bookingFee.toFixed(2)}</strong></span>
        </div>

        <div className="flex justify-between text-gray-600 mb-6">
          <span>Subtotal</span>
          <span><strong className="text-gray-950">${price.toFixed(2)}</strong></span>
        </div>

        <div className="flex justify-between text-base font-semibold">
          <span>Grand Total</span>
          <span><strong className="text-gray-950">${grandTotal.toFixed(2)}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
