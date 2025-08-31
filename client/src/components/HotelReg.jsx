import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/60 px-2">
      <form className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full">
        
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt="Register Hotel"
          className="w-full md:w-1/2 object-cover hidden md:block"
        />

        {/* Form Content */}
        <div className="relative flex flex-col justify-center p-8 md:p-10 w-full md:w-1/2 bg-white">
          
          {/* Close Button */}
          <img
            src={assets.closeIcon}
            alt="Close"
            className="absolute top-4 right-4 h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />

          <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-left">Register Your Hotel</h2>

          {/* Hotel Name */}
          <div className="mb-4">
            <label htmlFor="name" className="text-sm font-semibold text-gray-600">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g., The Royal Palace"
              className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder-gray-400"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="contact" className="text-sm font-semibold text-gray-600">
              Phone Number
            </label>
            <input
              id="contact"
              type="tel"
              placeholder="+91-9876543210"
              className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder-gray-400"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="text-sm font-semibold text-gray-600">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Street, Locality, Pincode"
              className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder-gray-400"
              required
            />
          </div>

          {/* City Dropdown */}
          <div className="mb-6">
            <label htmlFor="city" className="text-sm font-semibold text-gray-600">
              City
            </label>
            <select
              id="city"
              className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium bg-white"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 transition duration-300 w-full"
          >
            Register Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
