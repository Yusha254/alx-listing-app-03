import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import {
  FaStar,
  FaMapMarkerAlt,
  FaBath,
  FaHeart,
  FaShareAlt,
  FaSwimmer,
  FaUtensils,
  FaMountain,
  FaWifi,
  FaTv,
  FaFire,
  FaDog,
  FaTree,
  FaCar,
  FaUmbrellaBeach,
  FaLeaf,
  FaSpa,
  FaWater,
  FaCity,
  FaHome,
  FaBinoculars,
  FaGlobeAmericas,
  FaDoorOpen,
  FaSolarPanel,
  FaHotTub,
  FaBus,
  FaCompass,
} from "react-icons/fa";
import { GiHiking, GiCampfire, GiTreehouse } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { IoBedSharp, IoPeopleSharp, IoKeyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import BookingSection from "@/components/property/BookingSection";
import Button from "../common/Button";
import ReviewSection from "./ReviewSection";

const mockReviews = [
  {
    name: "Joshua Kyalo",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "3 years on ALX",
    date: "March 2025",
    stay: "Family trip",
    rating: 5,
    comment:
      "An amazing stay overall — the property was comfortable, spotless, and perfect for a relaxing family getaway. Highly recommended!",
  },
  {
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: "1 year on ALX",
    date: "February 2025",
    stay: "Solo retreat",
    rating: 4,
    comment:
      "Loved the serene atmosphere and cozy setup. The view was breathtaking, though the Wi-Fi could’ve been a bit faster.",
  },
  {
    name: "Michael Green",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    experience: "2 years on ALX",
    date: "January 2025",
    stay: "Business trip",
    rating: 5,
    comment:
      "Perfect spot for remote work! Peaceful environment, great amenities, and a responsive host. Would definitely come back.",
  },
];

const amenitiesIcons: Record<string, React.ReactNode> = {
  Pool: <FaSwimmer className="text-gray-900" />,
  Chef: <FaUtensils className="text-gray-900" />,
  "Mountain View": <FaMountain className="text-gray-900" />,
  Wifi: <FaWifi className="text-gray-900" />,
  TV: <FaTv className="text-gray-900" />,
  "Luxury Villa": <FaHome className="text-gray-900" />,
  "Free Parking": <FaCar className="text-gray-900" />,
  Fireplace: <FaFire className="text-gray-900" />,
  "Self Checkin": <IoKeyOutline className="text-gray-900" />,
  "Pet Friendly": <FaDog className="text-gray-900" />,
  "City View": <FaCity className="text-gray-900" />,
  "Free WiFi": <FaWifi className="text-gray-900" />,
  "24h Checkin": <FaDoorOpen className="text-gray-900" />,
  Riverside: <FaWater className="text-gray-900" />,
  "Private Dock": <FaCompass className="text-gray-900" />,
  "Free Kayaks": <FaSwimmer className="text-gray-900" />,
  Beachfront: <FaUmbrellaBeach className="text-gray-900" />,
  "Private Pool": <FaSwimmer className="text-gray-900" />,
  "Chef Service": <FaUtensils className="text-gray-900" />,
  Lakeside: <FaWater className="text-gray-900" />,
  "Hiking Trails": <GiHiking className="text-gray-900" />,
  Garden: <FaTree className="text-gray-900" />,
  "City Center": <FaCity className="text-gray-900" />,
  Secluded: <GiCampfire className="text-gray-900" />,
  "Hot Tub": <FaHotTub className="text-gray-900" />,
  Cliffside: <FaMountain className="text-gray-900" />,
  "Infinity Pool": <FaSwimmer className="text-gray-900" />,
  "Sea View": <FaWater className="text-gray-900" />,
  Historical: <FaHome className="text-gray-900" />,
  "Free Breakfast": <MdFreeBreakfast className="text-gray-900" />,
  Safari: <FaBinoculars className="text-gray-900" />,
  "Guided Tours": <FaGlobeAmericas className="text-gray-900" />,
  Countryside: <FaLeaf className="text-gray-900" />,
  "Eco Stay": <FaLeaf className="text-gray-900" />,
  Jungle: <GiTreehouse className="text-gray-900" />,
  "Northern Lights": <IoIosFlash className="text-gray-900" />,
  "Off Grid": <FaSolarPanel className="text-gray-900" />,
  "Public Transport": <FaBus className="text-gray-900" />,
  "Private Deck": <FaTree className="text-gray-900" />,
  "Desert View": <FaSpa className="text-gray-900" />,
};

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<"description" | "offers" | "reviews" | "about">(
    "description"
  );
  const [expanded, setExpanded] = useState(false);

  const truncatedText =
    property.description.length > 250 && !expanded
      ? property.description.slice(0, 250) + "..."
      : property.description;

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div>
        {/* Title & Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-bold leading-tight break-words">
            {property.name}
          </h1>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button variant="secondary">
              <FaHeart className="inline-block mr-2 text-[#34967c]" />
              Save
            </Button>
            <Button variant="secondary">
              <FaShareAlt className="inline-block mr-2 text-[#34967c]" />
              Share
            </Button>
          </div>
        </div>

        {/* Rating / Location / Host */}
        <div className="flex flex-wrap items-center gap-3 mt-3 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{property.rating}</span>
            <span className="font-medium">(345 Reviews)</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>
              {property.address.state}, {property.address.city},{" "}
              {property.address.country}
            </span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <FiUser className="text-gray-500" />
            <span className="font-medium">Mainstream</span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full mb-4">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
            alt="Second"
            className="col-span-2 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg"
            alt="Third"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg"
            alt="Fourth"
            className="col-span-1 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-2">
          {[
            property.image,
            "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`image-${i}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
        {/* Amenities summary (under header) */}
        <div className="flex flex-wrap items-center gap-6 text-gray-900 text-sm mt-2">
          <div className="flex items-center gap-2">
            <IoBedSharp className="text-sm text-gray-900" />
            <span>{property.offers.bed} bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-sm text-gray-900" />
            <span>{property.offers.shower} bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <IoPeopleSharp className="text-sm text-gray-900" />
            <span>{property.offers.occupants} guests</span>
          </div>
        </div>
      </div>

      {/* Tabs + Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-t pt-2 border-gray-200">
            {[
              { id: "description", label: "Description" },
              { id: "offers", label: "What we offer" },
              { id: "reviews", label: "Reviews" },
              { id: "about", label: "About host" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-2 text-base font-medium ${
                  activeTab === tab.id
                    ? "text-[#34967c] border-b-2 border-[#34967c]"
                    : "text-gray-500 hover:text-[#34967c]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div>
              <p className="text-gray-700 leading-relaxed">
                {truncatedText}
              </p>
              {property.description.length > 250 && (
                <button
                  className="mt-2 text-[#34967c] font-medium hover:underline"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          )}

          {activeTab === "offers" && (
            <div>
              <p className="mb-4 text-gray-800 leading-relaxed pb-2">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {property.category.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 px-2 py-1 rounded-md text-gray-800"
                  >
                    {amenitiesIcons[amenity] || (
                      <span className="w-4 h-4 bg-[#34967c] rounded-full inline-block" />
                    )}
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-500 italic">
              <ReviewSection reviews={mockReviews} />
            </div>
          )}

          {activeTab === "about" && (
            <div className="text-gray-700">
              <p>
                Hosted by <strong>Mainstream</strong>, an experienced superhost
                known for warm hospitality and seamless experiences.
              </p>
            </div>
          )}
        </div>

        {/* Booking Section */}
        <div>
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
