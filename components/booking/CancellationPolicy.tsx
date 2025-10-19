import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
      {/* Cancellation Policy */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900">
          Cancellation policy
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">
            Free cancellation before Aug 23.
          </span>{" "}
          Cancel before check-in on Aug 24 for a partial refund.
        </p>
      </section>

      <hr className="my-6 border-gray-200" />

      {/* Ground Rules */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900">Ground rule</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          We ask every guest to remember a few simple things about what makes a
          great guest.
        </p>
        <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
          <li>Follow the house rules</li>
          <li>Treat your Host’s home like your own</li>
        </ul>
      </section>
    </div>
  );
};

export default CancellationPolicy;
