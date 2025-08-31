import React from "react";
import Title from "../components/Title";
import { bookings } from "../assets/assets";

const MyBookings = () => {
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-300">
      <Title
        title="My Bookings"
        subtitle="Welcome to your personalized booking dashboard. Here, you can effortlessly access and manage all your current, upcoming, and past hotel reservations. Whether you're preparing for your next luxurious getaway or reviewing details of previous stays, this page gives you full control over your travel experiences. Make changes, view itineraries, or simply relive your favorite trips — all in one convenient place."
      />

      <div className="mt-10 overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md rounded-md overflow-hidden text-sm text-left text-gray-700  bg-gray-400 shadow-gray-500">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs  shadow-gray-500">
            <tr>
              <th className="px-6 py-4">Hotel</th>
              <th className="px-6 py-4">Check-In</th>
              <th className="px-6 py-4">Check-Out</th>
              <th className="px-6 py-4">Guests</th>
              <th className="px-6 py-4">Payment Mode</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-6 py-4 font-medium">{booking.hotelName}</td>
                <td className="px-6 py-4">{booking.checkIn}</td>
                <td className="px-6 py-4">{booking.checkOut}</td>
                <td className="px-6 py-4">{booking.guests}</td>
                <td className="px-6 py-4">{booking.paymentMode}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      booking.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
