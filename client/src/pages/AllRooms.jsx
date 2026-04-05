

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
//     <div className="pt-28 md:pt-36 px-4 md:px-16 lg:px-24 bg-gradient-to-br from-blue-100 via-white to-pink-200 min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔹 Header */}
//         <div className="mb-10 text-center">
//           <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-3">
//             Explore Our Rooms
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover the perfect blend of comfort and luxury for your stay.
//           </p>
//         </div>

//         {/* 🔹 Filters */}
//         <div className="flex flex-wrap items-center gap-4 mb-10 justify-center md:justify-between">
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

//         {/* 🔹 Room Cards */}
//         <div className="grid gap-8 pb-16">
//           {roomsDummyData
//             .filter((room) =>
//               selectedAmenity ? room.amenities.includes(selectedAmenity) : true
//             )
//             .map((room) => (
//               <div
//                 key={room._id}
//                 className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-5"
//               >
//                 {/* Left Image */}
//                 <div className="md:w-1/3 w-full">
//                   <img
//                     src={room.images[0]}
//                     alt={`Room at ${room.hotel.name}`}
//                     onClick={() => {
//                       navigate(`/rooms/${room._id}`);
//                       scrollTo(0, 0);
//                     }}
//                     className="rounded-lg object-cover h-48 md:h-52 w-full cursor-pointer hover:scale-[1.03] transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Right Info */}
//                 <div className="flex-1 flex flex-col justify-between">
//                   <div>
//                     <p className="text-blue-500 text-xs uppercase font-semibold">
//                       {room.hotel.city}
//                     </p>
//                     <h2
//                       onClick={() => {
//                         navigate(`/rooms/${room._id}`);
//                         scrollTo(0, 0);
//                       }}
//                       className="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mt-1 cursor-pointer hover:text-indigo-600 transition-colors"
//                     >
//                       {room.hotel.name}
//                     </h2>

//                     <div className="flex items-center mt-1">
//                       <StarRating />
//                       <span className="ml-2 text-xs text-gray-500">200+ reviews</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
//                       <img
//                         src={assets.locationIcon}
//                         alt="Location"
//                         className="w-4 h-4"
//                       />
//                       <span>{room.hotel.address}</span>
//                     </div>
//                   </div>

//                   {/* Amenities */}
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {room.amenities.slice(0, 6).map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 border border-gray-200 rounded-md shadow-sm text-xs text-gray-700 capitalize"
//                       >
//                         <img
//                           src={facilityIcons[item]}
//                           alt={item}
//                           className="w-4 h-4 object-contain"
//                         />
//                         {item}
//                       </div>
//                     ))}
//                     {room.amenities.length > 6 && (
//                       <span className="text-xs text-gray-500">+ more</span>
//                     )}
//                   </div>

//                   <div className="mt-4">
//                     <button
//                       onClick={() => {
//                         navigate(`/rooms/${room._id}`);
//                         scrollTo(0, 0);
//                       }}
//                       className="bg-indigo-400 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition text-sm"
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



import React, { useEffect, useState } from "react";
import { assets, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import axios from "axios";

const AllRooms = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  const amenityList = Object.keys(facilityIcons);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("/api/hotels");
        if (Array.isArray(res.data)) setRooms(res.data);
        else if (Array.isArray(res.data.data)) setRooms(res.data.data);
        else if (Array.isArray(res.data.hotels)) setRooms(res.data.hotels);
        else setRooms([]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  let filteredRooms = rooms.filter((room) =>
    selectedAmenity ? room?.amenities?.includes(selectedAmenity) : true
  );

  if (sortOption === "priceLow") {
    filteredRooms = [...filteredRooms].sort(
      (a, b) => (a.pricePerNight || 0) - (b.pricePerNight || 0)
    );
  } else if (sortOption === "priceHigh") {
    filteredRooms = [...filteredRooms].sort(
      (a, b) => (b.pricePerNight || 0) - (a.pricePerNight || 0)
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4] pt-28 md:pt-36 pb-20 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        {/* <div className="mb-14 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-600 mb-3">
            Curated Stays
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Our Collection
          </h1>
          <div className="w-16 h-px bg-amber-500 mx-auto mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Handpicked properties offering exceptional comfort, design, and
            unforgettable experiences.
          </p>
        </div> */}

        {/* Header */}
<div className="mb-12 flex flex-col items-start">
  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-amber-600 mb-2">
    Curated Stays
  </span>
  <div className="flex items-end gap-4">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      Our Collection
    </h1>
    <div className="w-10 h-px bg-amber-400 mb-2" />
  </div>
  <p className="text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">
    Handpicked properties offering premium comfort and unforgettable experiences.
  </p>
</div>

        {/* Filter Bar */}
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-12 flex flex-wrap items-center gap-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Refine
          </p>

          <div className="flex items-center gap-3 flex-1 min-w-[180px]">
            <label className="text-xs font-medium text-gray-500 whitespace-nowrap">
              Amenity
            </label>
            <select
              value={selectedAmenity}
              onChange={(e) => setSelectedAmenity(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            >
              <option value="">All Amenities</option>
              {amenityList.map((amenity) => (
                <option key={amenity} value={amenity}>
                  {amenity}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[160px]">
            <label className="text-xs font-medium text-gray-500 whitespace-nowrap">
              Sort By
            </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            >
              <option value="">Default</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
            </select>
          </div>

          <p className="ml-auto text-xs text-gray-400">
            {filteredRooms.length}{" "}
            {filteredRooms.length === 1 ? "property" : "properties"} found
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
              >
                <div className="h-56 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <div className="h-5 w-20 bg-gray-200 rounded" />
                    <div className="h-8 w-24 bg-gray-200 rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Room Grid — Vertical Cards */}
        {!loading && filteredRooms.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRooms.map((room, index) => {
              const imageUrl =
                room?.images?.[0] ||
                room?.image ||
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80";

              return (
                <div
                  key={room._id || index}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={imageUrl}
                      alt={room?.hotel?.name || "Room"}
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                      ₹{(room?.pricePerNight || room?.price || 0).toLocaleString()}
                      <span className="text-gray-400 font-normal"> /night</span>
                    </div>
                    {/* City Tag */}
                    <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm tracking-wide">
                      {room?.hotel?.city || "Unknown City"}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">

                    {/* Hotel Name */}
                    <h2
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-base font-semibold text-gray-900 cursor-pointer hover:text-amber-600 transition-colors duration-200 line-clamp-1 mb-1"
                    >
                      {room?.hotel?.name || "Hotel Name"}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <StarRating />
                      <span className="text-xs text-gray-400">200+ reviews</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-4">
                      <img
                        src={assets.locationIcon}
                        className="w-3.5 h-3.5 mt-0.5 opacity-60 shrink-0"
                        alt="location"
                      />
                      <span className="line-clamp-1">{room?.hotel?.address || "Address not available"}</span>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {room?.amenities?.slice(0, 3)?.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-100 rounded-full text-xs text-amber-700 font-medium"
                        >
                          {facilityIcons[item] && (
                            <img
                              src={facilityIcons[item]}
                              className="w-3 h-3"
                              alt={item}
                            />
                          )}
                          {item}
                        </div>
                      ))}
                      {room?.amenities?.length > 3 && (
                        <div className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-500">
                          +{room.amenities.length - 3} more
                        </div>
                      )}
                    </div>

                    {/* Divider + CTA */}
                    <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          ₹{(room?.pricePerNight || room?.price || 0).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400">per night</p>
                      </div>

                      <button
                        onClick={() => {
                          navigate(`/rooms/${room._id}`);
                          window.scrollTo(0, 0);
                        }}
                        className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition-colors duration-200 tracking-wide"
                      >
                        View Details
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredRooms.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No rooms found</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Try adjusting your filters or check back later for new listings.
            </p>
            <button
              onClick={() => { setSelectedAmenity(""); setSortOption(""); }}
              className="mt-6 px-6 py-2.5 bg-gray-900 text-white text-sm rounded-xl hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllRooms;