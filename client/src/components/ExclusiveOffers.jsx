import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-gray-100">
      {/* Title and View All */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group flex items-center gap-2 font-medium text-primary cursor-pointer max-md:mt-8">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative h-80 p-6 flex flex-col justify-end text-white rounded-xl bg-no-repeat bg-cover bg-center shadow-lg transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount Badge */}
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-semibold rounded-full shadow-md">
              {item.priceOff}% OFF
            </p>

            {/* Offer Content */}
            <div className="bg-black/40 p-4 rounded-lg w-full">
              <p className="text-xl font-playfair font-semibold">
                {item.title}
              </p>
              <p className="text-sm mt-1">{item.description}</p>
              <p className="text-xs text-white/70 mt-2">
                Expires {item.expiryDate}
              </p>
              <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 text-white">
                View Offers
                <img
                  src={assets.arrowIcon}
                  alt="arrow-icon"
                  className="invert w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
