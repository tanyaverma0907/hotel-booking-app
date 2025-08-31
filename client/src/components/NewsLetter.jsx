// import React from "react";
// import { assets } from "../assets/assets";
// import Title from "./Title";

// const NewsLetter = () => {
//   return (
//     <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
//       <Title
//         title="Stay Inspired"
//         subtitle="Join Our NewsLetter and be the first to discover new updates, exclusive offers, and inspirations."
//       />

//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
//         <input
//           type="text"
//           className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
//           placeholder="Enter your email"
//         />
//         <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
//           Subscribe
//           <img
//             src={assets.arrowIcon}
//             alt="arrow-icon"
//             className="w-3.5 invert group-hover:translate-x-1 transition-all"
//           />
//         </button>
//       </div>
//       <p className="text-gray-500 mt-6 text-xs text-center">
//         By subscribing, you agree to our Privacy Policy and consent to receive
//         updates.
//       </p>
//     </div>
//   );
// };

// export default NewsLetter;


import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl rounded-2xl px-6 py-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 shadow-2xl mb-20 mt-20">
      <Title
        title="Stay Inspired"
        subtitle="Subscribe to our newsletter and be the first to get updates, exclusive offers, and design inspirations."
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full px-2 md:px-0">
        <input
          type="email"
          className="bg-white shadow-md px-5 py-3 rounded-full border border-gray-300 outline-none w-full max-w-md focus:ring-2 focus:ring-gray-400 placeholder:text-gray-500"
          placeholder="Enter your email"
        />
        <button className="flex items-center justify-center gap-2 group bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300 active:scale-95">
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-4 invert group-hover:translate-x-1 transition-transform duration-300"
          />
        </button>
      </div>

      <p className="text-gray-500 mt-6 text-sm text-center max-w-xl">
        By subscribing, you agree to our Privacy Policy and consent to receive promotional emails from us.
      </p>
    </div>
  );
};

export default NewsLetter;






