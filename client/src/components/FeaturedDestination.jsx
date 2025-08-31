// import React from "react";
// import { roomsDummyData } from "../assets/assets";
// import HotelCard from "./HotelCard";
// import { useNavigate } from "react-router-dom";
// import Title from "./Title";

// const FeaturedDestination = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center justify-center gap-6 mt-10 ">
//       <Title
//         title="Featured Destination"
//         subtitle="Whether youre dreaming of a sun-drenched coastal escape, a quiet
//         mountain retreat, or a vibrant city adventure, our featured destinations
//         bring together the most enchanting places with top-rated stays.
//         Carefully curated to inspire your next journey, these locations offer
//         the perfect balance of comfort, culture, and unforgettable experiences."
//       />

//       <div className="flex flex-wrap items-center justify-center gap-6 mt-3 pl-6 pr-6">
//         {roomsDummyData.slice(0, 13).map((room, index) => (
//           <HotelCard key={room._id} room={room} index={index} />
//         ))}
//       </div>

//       <button
//         onClick={() => {
//           navigate("/rooms");
//           scrollTo(0, 0);
//         }}
//         className="my-1 px-2 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
//       >
//         View All Destination
//       </button>
//     </div>
//   );
// };

// export default FeaturedDestination;



import React, { useState } from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleCardClick = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <section className="w-full py-16 bg-gray-200 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-10">
        <Title
          title="Featured Destinations"
          subtitle="Whether you're dreaming of a sun-drenched coastal escape, a quiet mountain retreat, or a vibrant city adventure, our featured destinations bring together the most enchanting places with top-rated stays. Carefully curated to inspire your next journey, these locations offer the perfect balance of comfort, culture, and unforgettable experiences."
        />

        {/* Hotel Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roomsDummyData.slice(0, 12).map((room, index) => (
            <div
              key={room._id}
              onClick={() => handleCardClick(room)}
              className="cursor-pointer"
            >
              <HotelCard room={room} index={index} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="mt-6 inline-flex items-center px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition font-medium text-sm shadow-md"
        >
          View All Destinations
        </button>
      </div>

      {/* Popup Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full mx-6 p-6 relative animate-popup">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-700 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>

            {/* Room Details */}
            <img
              src={selectedRoom.image}
              alt={selectedRoom.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{selectedRoom.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{selectedRoom.description}</p>
            <p className="text-gray-800 font-semibold">Price: ₹{selectedRoom.price}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedDestination;


