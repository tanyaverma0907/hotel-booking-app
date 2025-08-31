import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dummyRooms } from "../../assets/assets";

// const dummyRooms = [
//   {
//     id: 1,
//     name: "Deluxe Suite",
//     price: 3500,
//     guests: 2,
//     city: "Mumbai",
//     image: "https://source.unsplash.com/featured/?hotel,room",
//   },
//   {
//     id: 2,
//     name: "Standard Room",
//     price: 2200,
//     guests: 2,
//     city: "Delhi",
//     image: "https://source.unsplash.com/featured/?hotel,beds",
//   },
//   {
//     id: 3,
//     name: "Family Room",
//     price: 4500,
//     guests: 4,
//     city: "Jaipur",
//     image: "https://source.unsplash.com/featured/?hotel,family",
//   },
// ];

const ListRoom = () => {
  const [rooms, setRooms] = useState(dummyRooms);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this room?"
    );
    if (confirmed) {
      setRooms((prev) => prev.filter((room) => room.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Title
        title="Listed Rooms"
        subtitle="Manage your property listings, update details, or remove outdated entries."
        align="left"
        font="outfit"
      />

      {rooms.length === 0 ? (
        <div className="mt-12 flex flex-col items-center text-gray-500">
          <img
            src={assets.noData}
            alt="No rooms"
            className="h-40 mb-4 opacity-60"
          />
          <p className="text-center text-sm">
            No rooms available. Add some to get started.
          </p>
        </div>
      ) : (
        <div className="mt-10 overflow-x-auto rounded-xl shadow-sm">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-indigo-50 text-indigo-600 text-sm">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Room</th>
                <th className="p-4 text-left">City</th>
                <th className="p-4 text-left">Guests</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-all text-sm text-gray-700"
                >
                  <td className="p-4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-16 w-24 object-cover rounded-md shadow"
                    />
                  </td>
                  <td className="p-4 font-medium text-gray-800">{room.name}</td>
                  <td className="p-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
                      {room.city}
                    </span>
                  </td>
                  <td className="p-4">{room.guests} Guests</td>
                  <td className="p-4 font-semibold text-indigo-600">
                    ₹{room.price}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center items-center gap-2">
                      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 text-xs rounded-full shadow-sm font-medium transition-all">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="bg-red-400 hover:bg-red-500 text-white px-4 py-1.5 text-xs rounded-full shadow-sm font-medium transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListRoom;
