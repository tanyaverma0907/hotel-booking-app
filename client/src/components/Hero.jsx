// import React from "react";
// import { assets, cities } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleSearchClick = (e) => {
//     e.preventDefault();
//     navigate('/rooms');
//   };

//   return (
//     <div className='flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 xl:px-32 bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
//       <div className="bg-[rgba(255,255,255,0.3)] text-black p-6 md:p-10 rounded-lg shadow-md max-w-4xl">
//         <p className="bg-gray-400/50 px-3.5 py-1 rounded-full inline-block mb-4 text-1.9xl">
//           Escape the Ordinary
//         </p>

//         <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold mt-2">
//           Discover a World Where Luxury, Comfort, and Adventure Converge
//         </h1>

//         <p className="mt-4 text-sm md:text-base pb-7">
//           Step into a realm of refined indulgence, where every detail is crafted
//           to perfection and every moment is tailored to your desires. Whether
//           you're seeking tranquil beaches, vibrant city escapes, or secluded
//           mountain retreats, our hand-selected destinations promise
//           unforgettable experiences wrapped in elegance and comfort.
//         </p>

//         <form
//           onSubmit={handleSearchClick}
//           className="bg-white text-grey-600 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
//         >
//           {/* Destination */}
//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="destinationInput">Destination</label>
//             </div>
//             <input
//               list="destinations"
//               id="destinationInput"
//               type="text"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//               placeholder="Type here"
//               required
//             />
//             <datalist id="destinations">
//               {cities.map((city, index) => (
//                 <option value={city} key={index} />
//               ))}
//             </datalist>
//           </div>

//           {/* Check-in */}
//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="checkIn">Check in</label>
//             </div>
//             <input
//               id="checkIn"
//               type="date"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//             />
//           </div>

//           {/* Check-out */}
//           <div>
//             <div className="flex items-center gap-2">
//               <img src={assets.calenderIcon} alt="" className="h-4" />
//               <label htmlFor="checkOut">Check out</label>
//             </div>
//             <input
//               id="checkOut"
//               type="date"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
//             />
//           </div>

//           {/* Guests */}
//           <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
//             <label htmlFor="guests">Guests</label>
//             <input
//               min={1}
//               max={4}
//               id="guests"
//               type="number"
//               className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
//               placeholder="0"
//             />
//           </div>

//           {/* Search Button */}
//           <button
//             type="submit"
//             className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
//           >
//             <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
//             <span>Search</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { assets, cities } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate("/rooms");
  };

  return (
    <>
      <style>
        {`
    /* Make calendar icon, number arrows, and dropdown arrows white */

    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button,
    input[list]::-webkit-calendar-picker-indicator {
      filter: brightness(0) invert(1);
    }

    /* Optional: hide number arrows completely */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox support */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}
      </style>

      <div
        className="relative h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.heroImage})` }}
      >
        {/* Dark Overlay for extra contrast */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="bg-gray-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Escape the Ordinary
          </p>

          <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight max-w-4xl text-white">
            Discover Where Luxury Meets Adventure
          </h1>

          <p className="mt-4 max-w-xl text-gray-300 text-sm md:text-base">
            From tropical beaches to scenic mountain hideaways, your dream
            escape awaits. Start exploring today.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearchClick}
            className="mt-10 w-full max-w-5xl bg-white/10 border border-white/30 backdrop-blur-md rounded-xl px-6 py-6 flex flex-col md:flex-row gap-4 text-white shadow-lg"
          >
            {/* Destination */}
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">
                Destination
              </label>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                required
                placeholder="Search city"
                className="w-full bg-black/40 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            {/* Check-in */}
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">Check-in</label>
              <input
                id="checkIn"
                type="date"
                className="w-full bg-black/40 text-white px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Check-out */}
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">Check-out</label>
              <input
                id="checkOut"
                type="date"
                className="w-full bg-black/40 text-white px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Guests */}
            <div className="flex-1">
              <label className="block text-sm mb-1 text-white">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                placeholder="1"
                className="w-full bg-black/40 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-black px-5 py-2.5 rounded-md font-semibold transition"
              >
                <img src={assets.searchIcon} alt="search" className="h-5" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
