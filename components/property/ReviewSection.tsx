import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8 space-y-8">
      {/* Overall Rating */}
      <div className="flex items-center gap-2 text-lg">
        <FaStar className="text-yellow-500 text-xl" />
        <span className="font-semibold text-gray-900 text-xl">4.76</span>
        <span className="text-gray-500 font-medium">(345 reviews)</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4">
            {/* Avatar */}
            <img
              src={review.avatar}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* Review Content */}
            <div className="flex flex-col">
              {/* Name + Experience */}
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.experience}</p>
              </div>

              {/* Date + Stay Type */}
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span>{review.date}</span>
                <span>•</span>
                <span className="text-gray-500">{review.stay}</span>
              </div>

              {/* Comment */}
              <p className="mt-2 text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-8 border-gray-200" />
    </div>
  );
};

export default ReviewSection;
