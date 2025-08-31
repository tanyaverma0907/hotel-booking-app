// import React, { useState } from "react";
// import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import StarRating from "../components/StarRating";

// const AllRooms = () => {
//   const navigate = useNavigate();

//   const [selectedAmenity, setSelectedAmenity] = useState("");
//   const [sortOption, setSortOption] = useState("");

//   const amenityList = Object.keys(facilityIcons);

//   return (
//     <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔹 Page Header */}
//         <div className="mb-10 text-center">
//           <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-4">
//             Explore Our Rooms
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//             Enjoy comfort and luxury with our hand-picked rooms. Find your
//             perfect space for business or relaxation.
//           </p>
//         </div>

//         {/* 🔹 Bottom Filter Section */}
//         <div className="flex flex-wrap items-center gap-4 mb-12 justify-center md:justify-between">
//           <div className="flex gap-2 items-center">
//             <label className="text-sm font-medium text-gray-700">Amenity:</label>
//             <select
//               value={selectedAmenity}
//               onChange={(e) => setSelectedAmenity(e.target.value)}
//               className="text-sm px-3 py-2 rounded-md border border-gray-300 bg-white shadow-sm"
//             >
//               <option value="">All Amenities</option>
//               {amenityList.map((amenity, index) => (
//                 <option key={index} value={amenity}>
//                   {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-2 items-center">
//             <label className="text-sm font-medium text-gray-700">Sort by:</label>
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="text-sm px-3 py-2 rounded-md border border-gray-300 bg-white shadow-sm"
//             >
//               <option value="">Default</option>
//               <option value="priceLow">Price: Low to High</option>
//               <option value="priceHigh">Price: High to Low</option>
//               <option value="rating">Rating</option>
//             </select>
//           </div>
//         </div>

//         {/* Room Cards */}
//         <div className="flex flex-col gap-12 pb-16">
//           {roomsDummyData
//             .filter((room) =>
//               selectedAmenity ? room.amenities.includes(selectedAmenity) : true
//             )
//             .map((room) => (
//               <div
//                 key={room._id}
//                 className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl transition duration-300 hover:shadow-2xl flex flex-col md:flex-row gap-6"
//               >
//                 <div className="w-full md:w-1/2">
//                   <img
//                     src={room.images[0]}
//                     alt={`Room at ${room.hotel.name}`}
//                     onClick={() => {
//                       navigate(`/rooms/${room._id}`);
//                       scrollTo(0, 0);
//                     }}
//                     className="rounded-xl object-cover h-64 w-full cursor-pointer transform hover:scale-105 transition duration-300 shadow-md"
//                   />
//                 </div>

//                 <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
//                   <div>
//                     <p className="text-blue-500 text-sm uppercase tracking-wide">
//                       {room.hotel.city}
//                     </p>
//                     <h2
//                       onClick={() => {
//                         navigate(`/rooms/${room._id}`);
//                         scrollTo(0, 0);
//                       }}
//                       className="text-3xl md:text-4xl font-playfair font-semibold text-gray-900 mt-1 cursor-pointer hover:text-indigo-600 transition-colors"
//                     >
//                       {room.hotel.name}
//                     </h2>

//                     <div className="flex items-center mt-2">
//                       <StarRating />
//                       <span className="ml-2 text-sm text-gray-500">200+ reviews</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-gray-600 text-sm mt-3">
//                       <img
//                         src={assets.locationIcon}
//                         alt="Location"
//                         className="w-4 h-4"
//                       />
//                       <span>{room.hotel.address}</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-3 mt-5">
//                     {room.amenities.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
//                       >
//                         <img
//                           src={facilityIcons[item]}
//                           alt={item}
//                           className="w-5 h-5 object-contain"
//                         />
//                         <p className="text-sm text-gray-700 capitalize">{item}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div>
//                     <button
//                       onClick={() => {
//                         navigate(`/rooms/${room._id}`);
//                         scrollTo(0, 0);
//                       }}
//                       className="mt-4 inline-block bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-200 text-sm font-medium"
//                     >
//                       View Room Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllRooms;



import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();

  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [sortOption, setSortOption] = useState("");

  const amenityList = Object.keys(facilityIcons);

  return (
    <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-blue-100 via-white to-pink-200 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* 🔹 Header */}
        <div className="mb-10 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Explore Our Rooms
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect blend of comfort and luxury for your stay.
          </p>
        </div>

        {/* 🔹 Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-10 justify-center md:justify-between">
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Amenity:</label>
            <select
              value={selectedAmenity}
              onChange={(e) => setSelectedAmenity(e.target.value)}
              className="text-sm px-3 py-2 rounded-md border border-gray-300 bg-white shadow-sm"
            >
              <option value="">All Amenities</option>
              {amenityList.map((amenity, index) => (
                <option key={index} value={amenity}>
                  {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-sm px-3 py-2 rounded-md border border-gray-300 bg-white shadow-sm"
            >
              <option value="">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* 🔹 Room Cards */}
        <div className="grid gap-8 pb-16">
          {roomsDummyData
            .filter((room) =>
              selectedAmenity ? room.amenities.includes(selectedAmenity) : true
            )
            .map((room) => (
              <div
                key={room._id}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-5"
              >
                {/* Left Image */}
                <div className="md:w-1/3 w-full">
                  <img
                    src={room.images[0]}
                    alt={`Room at ${room.hotel.name}`}
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      scrollTo(0, 0);
                    }}
                    className="rounded-lg object-cover h-48 md:h-52 w-full cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                {/* Right Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-blue-500 text-xs uppercase font-semibold">
                      {room.hotel.city}
                    </p>
                    <h2
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0, 0);
                      }}
                      className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mt-1 cursor-pointer hover:text-indigo-600 transition-colors"
                    >
                      {room.hotel.name}
                    </h2>

                    <div className="flex items-center mt-1">
                      <StarRating />
                      <span className="ml-2 text-xs text-gray-500">200+ reviews</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <img
                        src={assets.locationIcon}
                        alt="Location"
                        className="w-4 h-4"
                      />
                      <span>{room.hotel.address}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {room.amenities.slice(0, 6).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 border border-gray-200 rounded-md shadow-sm text-xs text-gray-700 capitalize"
                      >
                        <img
                          src={facilityIcons[item]}
                          alt={item}
                          className="w-4 h-4 object-contain"
                        />
                        {item}
                      </div>
                    ))}
                    {room.amenities.length > 6 && (
                      <span className="text-xs text-gray-500">+ more</span>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0, 0);
                      }}
                      className="bg-indigo-400 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition text-sm"
                    >
                      View Room Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllRooms;


