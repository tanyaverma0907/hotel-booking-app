
// import React from "react";
// import { assets, cities } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleSearchClick = (e) => {
//     e.preventDefault();
//     navigate("/rooms");
//   };

//   return (
//     <>
//       <style>
//         {`
//     /* Make calendar icon, number arrows, and dropdown arrows white */

//     input[type="date"]::-webkit-calendar-picker-indicator,
//     input[type="number"]::-webkit-inner-spin-button,
//     input[type="number"]::-webkit-outer-spin-button,
//     input[list]::-webkit-calendar-picker-indicator {
//       filter: brightness(0) invert(1);
//     }

//     /* Optional: hide number arrows completely */
//     input[type="number"]::-webkit-inner-spin-button,
//     input[type="number"]::-webkit-outer-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }

//     /* Firefox support */
//     input[type="number"] {
//       -moz-appearance: textfield;
//     }
//   `}
//       </style>

//       <div
//         className="relative h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
//         style={{ backgroundImage: `url(${assets.heroImage})` }}
//       >
//         {/* Dark Overlay for extra contrast */}
//         <div className="absolute inset-0 bg-black/70 z-0" />

//         {/* Main Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
//           <p className="bg-gray-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
//             Escape the Ordinary
//           </p>

//           <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight max-w-4xl text-white">
//             Discover Where Luxury Meets Adventure
//           </h1>

//           <p className="mt-4 max-w-xl text-gray-300 text-sm md:text-base">
//             From tropical beaches to scenic mountain hideaways, your dream
//             escape awaits. Start exploring today.
//           </p>

//           {/* Search Form */}
//           <form
//             onSubmit={handleSearchClick}
//             className="mt-10 w-full max-w-5xl bg-white/10 border border-white/30 backdrop-blur-md rounded-xl px-6 py-6 flex flex-col md:flex-row gap-4 text-white shadow-lg"
//           >
//             {/* Destination */}
//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-white">
//                 Destination
//               </label>
//               <input
//                 list="destinations"
//                 id="destinationInput"
//                 type="text"
//                 required
//                 placeholder="Search city"
//                 className="w-full bg-black/40 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <datalist id="destinations">
//                 {cities.map((city, index) => (
//                   <option value={city} key={index} />
//                 ))}
//               </datalist>
//             </div>

//             {/* Check-in */}
//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-white">Check-in</label>
//               <input
//                 id="checkIn"
//                 type="date"
//                 className="w-full bg-black/40 text-white px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             {/* Check-out */}
//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-white">Check-out</label>
//               <input
//                 id="checkOut"
//                 type="date"
//                 className="w-full bg-black/40 text-white px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-gray-400"
//               />
//             </div>

//             {/* Guests */}
//             <div className="flex-1">
//               <label className="block text-sm mb-1 text-white">Guests</label>
//               <input
//                 min={1}
//                 max={4}
//                 id="guests"
//                 type="number"
//                 placeholder="1"
//                 className="w-full bg-black/40 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/30 outline-none focus:ring-2 focus:ring-gray-400"
//               />
//             </div>

//             {/* Search Button */}
//             <div className="flex items-end">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-black px-5 py-2.5 rounded-md font-semibold transition"
//               >
//                 <img src={assets.searchIcon} alt="search" className="h-5" />
//                 <span>Search</span>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import { assets, cities } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: assets.heroImage,
    tag: "Escape the Ordinary",
    title: "Discover Where Luxury\nMeets Adventure",
    subtitle: "From tropical beaches to scenic mountain hideaways — your dream escape starts here.",
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
    tag: "Handpicked for You",
    title: "Stays That Feel\nLike a Dream",
    subtitle: "Curated boutique escapes and world-class resorts tailored for every kind of traveler.",
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80",
    tag: "Pure Tranquility",
    title: "Find Peace in\nEvery Corner",
    subtitle: "Serene retreats, private villas, and hideaways designed to help you truly unwind.",
  },
];

const trustBadges = [
  { icon: "★", label: "4.9 Rated" },
  { icon: "✓", label: "Verified Properties" },
  { icon: "⚡", label: "Instant Booking" },
  { icon: "🛡", label: "Secure Payments" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 400);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/rooms");
  };

  const slide = slides[current];

  return (
    <>
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: brightness(0) invert(1); opacity: 0.6; }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type="number"] { -moz-appearance: textfield; }
        input::placeholder { color: rgba(255,255,255,0.45); }
        input[type="date"] { color-scheme: dark; }
        .hero-slide { transition: opacity 0.4s ease; }
        .hero-slide.fade { opacity: 0; }
      `}</style>

      <div className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <div className={`absolute inset-0 hero-slide ${animating ? "fade" : ""}`}>
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-cover object-center scale-105"
            style={{ transition: "transform 6s ease" }}
          />
        </div>

        {/* Layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />

        {/* Slide Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-7 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Slide Arrows */}
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">

          {/* Tag Pill */}
          <div className={`hero-slide ${animating ? "fade" : ""}`}>
            <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-amber-400 border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className={`hero-slide ${animating ? "fade" : ""} font-bold leading-tight mb-5 max-w-4xl`}
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", whiteSpace: "pre-line" }}>
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className={`hero-slide ${animating ? "fade" : ""} text-white/65 text-sm md:text-base max-w-xl leading-relaxed mb-10`}>
            {slide.subtitle}
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-5xl"
          >
            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-2 flex flex-col md:flex-row gap-1 shadow-xl">

              {/* Destination */}
              <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
                <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
                  Destination
                </label>
                <input
                  list="destinations"
                  type="text"
                  required
                  placeholder="Where to?"
                  className="bg-transparent text-white text-sm outline-none w-full"
                />
                <datalist id="destinations">
                  {cities.map((city, i) => <option value={city} key={i} />)}
                </datalist>
              </div>

              <div className="hidden md:block w-px bg-white/15 my-2" />

              {/* Check-in */}
              <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
                <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
                  Check-in
                </label>
                <input
                  type="date"
                  className="bg-transparent text-white text-sm outline-none w-full"
                />
              </div>

              <div className="hidden md:block w-px bg-white/15 my-2" />

              {/* Check-out */}
              <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
                <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
                  Check-out
                </label>
                <input
                  type="date"
                  className="bg-transparent text-white text-sm outline-none w-full"
                />
              </div>

              <div className="hidden md:block w-px bg-white/15 my-2" />

              {/* Guests */}
              <div className="flex-1 flex flex-col px-4 py-2.5 rounded-xl hover:bg-white/10 transition group">
                <label className="text-xs font-semibold text-white/50 mb-1 uppercase tracking-wider group-focus-within:text-amber-400 transition">
                  Guests
                </label>
                <input
                  min={1}
                  max={10}
                  type="number"
                  placeholder="2 guests"
                  className="bg-transparent text-white text-sm outline-none w-full"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-center px-1">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap w-full md:w-auto justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 text-white/55 text-xs">
                <span className="text-amber-400 text-sm">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-30 flex flex-col items-center gap-1.5 text-white/30">
          <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-amber-400/60 animate-bounce" style={{ height: "40%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
