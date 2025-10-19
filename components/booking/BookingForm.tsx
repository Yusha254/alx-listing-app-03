import { useState } from "react";
import CancellationPolicy from "./CancellationPolicy";
import { FaRegCreditCard } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import Button from "../common/Button";

const BookingForm = () => {
  const [receiveText, setReceiveText] = useState(true);

  const handleBook = () => {

  };

  return (
    <div className="p-6 shadow-sm rounded-lg mx-auto">
      {/* Contact Details */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Detail</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Phone number</label>
            <input
              type="tel"
              className="mt-1 border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-start my-4 space-x-2">
          <input
            type="checkbox"
            checked={receiveText}
            onChange={() => setReceiveText(!receiveText)}
            className="accent-[#34967c] w-4 h-4 my-[2px]"
          />
          <span className="text-sm text-gray-600 leading-tight">
            Receive text message update about your booking. Message rates may apply.
          </span>
        </div>
      </div>

      <hr className="text-gray-300"/>

      {/* Payment Section */}
      <div>
        <h2 className="text-lg font-semibold my-4">Pay with</h2>

        {/* Dropdown */}
        <div className="flex items-center border border-gray-300 rounded-md p-3 justify-between cursor-pointer">
          <div className="flex items-center space-x-2">
            <FaRegCreditCard size={18} className="text-gray-700" />
            <span className="text-sm font-medium">Credit or debit card</span>
          </div>
          <IoChevronDownSharp size={16} className="text-gray-600" />
        </div>

        {/* Card Info */}
        <div className="mt-4 border border-gray-300 rounded-md">
          <div className="border-b border-gray-300">
            <input
              type="text"
              placeholder="Card number"
              className="w-full border-none focus:ring-1 text-sm p-2"
            />
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-300">
            <input
              type="text"
              placeholder="Expiration date"
              className="p-2 border-none focus:ring-0 text-sm"
            />
            <input
              type="text"
              placeholder="CVV"
              className="p-2 border-none focus:ring-0 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">Billing Address</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Street Address"
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Apt or suite number"
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="border border-gray-300 rounded-md p-2 w-full focus:ring-1 focus:ring-black focus:outline-none"
            />
            <div className="relative">
              <select className="border border-gray-300 rounded-md p-2 w-full appearance-none text-gray-700 focus:ring-1 focus:ring-black focus:outline-none">
                <option>Ghana</option>
                <option>Kenya</option>
                <option>Nigeria</option>
                <option>South Africa</option>
              </select>
              <IoChevronDownSharp
                size={16}
                className="absolute right-3 top-3 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <CancellationPolicy/>

      <Button variant="reserve" onClick={handleBook}>
        Confirm & Pay
      </Button>
    </div>
  );
};

export default BookingForm;
