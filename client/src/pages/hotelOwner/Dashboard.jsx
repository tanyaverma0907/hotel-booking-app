import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData, recentBookings } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  const cards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings,
      icon: assets.totalBookingIcon,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Total Revenue",
      value: `₹${dashboardData.totalRevenue}`,
      icon: assets.revenueIcon,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Active Rooms",
      value: dashboardData.activeRooms,
      icon: assets.activeRoomIcon,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      title: "Pending Requests",
      value: dashboardData.pendingRequests,
      icon: assets.pendingIcon,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Title */}
      <Title
        title="Dashboard"
        subtitle="Monitor your room listings, track bookings, and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations."
        font="outfit"
        align="left"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center p-6 rounded-2xl border-gray-600 bg-white hover:shadow-xl transition duration-300 shadow-sm"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full ${card.bg} mr-4 shadow-sm`}
            >
              <img src={card.icon} alt={card.title} className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm font-semibold ${card.color}`}>
                {card.title}
              </p>
              <p className="text-xl font-bold text-gray-800 mt-1">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-gray-600">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Recent Bookings</h3>
          <button className="text-sm text-indigo-600 font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm font-semibold">
                <th className="text-left p-3">Guest</th>
                <th className="text-left p-3">Hotel</th>
                <th className="text-left p-3">Check-in</th>
                <th className="text-left p-3">Check-out</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-sm text-gray-700 hover:bg-blue-50 transition`}
                >
                  <td className="p-3">{booking.guest}</td>
                  <td className="p-3">{booking.hotel}</td>
                  <td className="p-3">{booking.checkIn}</td>
                  <td className="p-3">{booking.checkOut}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

