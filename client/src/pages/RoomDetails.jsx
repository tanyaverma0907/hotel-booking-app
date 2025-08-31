import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { roomsDummyData, facilityIcons } from "../assets/assets";

const RoomDetails = () => {
  const { roomid } = useParams();
  const navigate = useNavigate();

  const room = roomsDummyData.find((r) => r._id === roomid);

  // States for booking inputs
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [bookingMessage, setBookingMessage] = useState("");

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-2xl font-semibold">
        Room not found
      </div>
    );
  }

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      setBookingMessage("Please select check-in and check-out dates.");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setBookingMessage("Check-out date must be after check-in date.");
      return;
    }
    setBookingMessage(
      `🎉 Booking confirmed for ${guests} guest(s) from ${checkIn} to ${checkOut}!`
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12 bg-white rounded-3xl shadow-2xl mt-16 mb-20 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-900 font-semibold transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to rooms
      </button>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-wide">
        {room.hotel.name}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        <span className="font-semibold">Location:</span> {room.hotel.address},{" "}
        {room.hotel.city}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {room.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Room image ${idx + 1}`}
            className="rounded-2xl object-cover w-full h-72 shadow-lg hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <p className="text-4xl font-extrabold text-indigo-700">
          ${room.pricePerNight}{" "}
          <span className="text-base font-normal text-gray-600">/ night</span>
        </p>
        <p className="text-xl text-gray-800 font-semibold capitalize border-l-4 border-indigo-500 pl-4">
          {room.roomType}
        </p>
      </div>

      {/* Amenities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Amenities</h2>
        <div className="flex flex-wrap gap-5">
          {room.amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 bg-indigo-100 rounded-xl shadow-sm hover:bg-indigo-200 cursor-default select-none transition-colors"
            >
              <img
                src={facilityIcons[amenity]}
                alt={amenity}
                className="w-7 h-7 object-contain"
              />
              <span className="text-indigo-800 font-semibold text-lg">{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      {room.features?.length > 0 && (
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg max-w-xl">
            {room.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Booking Section */}
      <section className="mb-14 p-8 bg-indigo-50 rounded-3xl shadow-inner max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900 text-center">
          Book this room
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleBooking();
          }}
          className="space-y-6"
        >
          <label className="block">
            <span className="block mb-1 font-semibold text-gray-700">Check-in Date</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              required
            />
          </label>

          <label className="block">
            <span className="block mb-1 font-semibold text-gray-700">Check-out Date</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              required
            />
          </label>

          <label className="block">
            <span className="block mb-1 font-semibold text-gray-700">Guests</span>
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            >
              {[...Array(room.maxGuests || 5).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} {num === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 rounded-2xl shadow-lg transition-all"
          >
            Confirm Booking
          </button>
        </form>

        {bookingMessage && (
          <p className="mt-6 text-center text-green-600 font-semibold">{bookingMessage}</p>
        )}
      </section>

      {/* Reviews Section */}
      <section className="mb-14 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Reviews</h2>
        {room.reviews?.length > 0 ? (
          <div className="space-y-8">
            {room.reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-indigo-700 text-lg">{review.user}</p>
                  <p className="text-yellow-400 font-bold text-xl">
                    {"⭐".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg italic">No reviews yet.</p>
        )}
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-center">About this room</h2>
        <p className="text-lg leading-relaxed max-w-prose mx-auto">
          Enjoy your stay at <span className="font-semibold">{room.hotel.name}</span> with
          all the comfort and luxury you deserve. This{" "}
          <span className="capitalize font-semibold">{room.roomType}</span> offers excellent
          amenities and is located in the heart of{" "}
          <span className="font-semibold">{room.hotel.city}</span>.
        </p>
      </section>
    </div>
  );
};

export default RoomDetails;




