// import React from 'react'
// import { Link } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const HotelCard = ({room, index}) => {
//   return (
//     <Link to={'/rooms/' + room._id} onClick={()=> scrollTo(0,0)} key = {room._id}>
//         <img src={room.images[0]} alt="" className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'  />

//         {/* { 
//         index % 2 == 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p> 
//         } */}

//         <div className='p-4 pt-5'>
//             <div className='flex items-center justify-between'>
//                 <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
//                 <div className='flex items-center gap-1'>
//                     <img src={assets.starIconFilled} alt="star-icon" />
//                 </div>
//             </div>

//             <div className='flex items-center gap-1 text-sm'>
//                 <img src={assets.locationIcon} alt="location-icon" />
//                 <span>{room.hotel.address}</span>
//             </div>

//             <div className='flex items-center justify-between mt-4'>
//                 <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
//                 <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-gray-400 hover:bg-gray-50 transition-all cursor-pointer '>Book Now</button>
//             </div>
//         </div>

//     </Link>
//   )
// }

// export default HotelCard;


import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  // ✅ Safe image handling
  const imageUrl =
    room?.images?.[0] || room?.image || "https://via.placeholder.com/300";

  return (
    <Link
      to={"/rooms/" + room?._id}
      onClick={() => window.scrollTo(0, 0)}
      className="block group"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <img
          src={imageUrl}
          alt={room?.hotel?.name || "hotel"}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Optional Tag */}
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
            Best Seller
          </p>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-white rounded-b-xl shadow-md">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-lg font-semibold text-gray-800">
            {room?.hotel?.name || "Hotel Name"}
          </p>

          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <img src={assets.locationIcon} alt="loc" className="w-4 h-4" />
          <span>{room?.hotel?.address || "Location not available"}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-800 font-semibold">
            ₹{room?.pricePerNight || room?.price || 0}
            <span className="text-sm text-gray-500"> / night</span>
          </p>

          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;