import logo from "./logo.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.jpg";
import roomImg2 from "./roomImg2.jpg";
import roomImg3 from "./roomImg3.jpg";
import roomImg4 from "./roomImg4.jpg";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import heroImage from "./heroImage.png";



export const assets = {
  
  heroImage,
  logo,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
  exclusiveOfferCardImg1,
  exclusiveOfferCardImg2,
  exclusiveOfferCardImg3,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

export const dummyRooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: 3500,
    guests: 2,
    city: "Mumbai",
    image: roomImg1,
  },
  {
    id: 2,
    name: "Standard Room",
    price: 2200,
    guests: 2,
    city: "Delhi",
    image: roomImg2,
  },
  {
    id: 3,
    name: "Family Room",
    price: 4500,
    guests: 4,
    city: "Jaipur",
    image: roomImg3,
  },
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: assets.exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: assets.exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: assets.exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// // User Dummy Data
// export const userDummyData = {
//   _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
//   username: "Great Stack",
//   email: "user.greatstack@gmail.com",
//   image:
//     "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
//   role: "hotelOwner",
//   createdAt: "2025-03-25T09:29:16.367Z",
//   updatedAt: "2025-04-10T06:34:48.719Z",
//   __v: 1,
//   recentSearchedCities: ["New York"],
// };

// // Hotel Dummy Data
// export const hotelDummyData = {
//   _id: "67f76393197ac559e4089b72",
//   name: "Urbanza Suites",
//   address: "Main Road  123 Street , 23 Colony",
//   contact: "+0123456789",
//   owner: userDummyData,
//   city: "New York",
//   createdAt: "2025-04-10T06:22:11.663Z",
//   updatedAt: "2025-04-10T06:22:11.663Z",
//   __v: 0,
// };

// export const roomsDummyData = [
//   {
//     _id: "67f76499997ac559e4089b90",
//     hotel: {
//       _id: "hotel_5",
//       name: "Lakeside Retreat",
//       address: "45 Lakeview Dr",
//       contact: "+0112345678",
//       owner: userDummyData,
//       city: "Geneva",
//       about: "Nestled by the serene lakeside, Lakeside Retreat offers a tranquil escape from the city bustle. Enjoy stunning water views, cozy rooms, and modern amenities for a perfect vacation or weekend getaway. Our friendly staff is dedicated to making your stay unforgettable."
//     },
//     roomType: "Suite",
//     pricePerNight: 499,
//     amenities: ["Free WiFi", "Room Service", "Pool Access"],
//     images: [roomImg1, roomImg2, roomImg3, roomImg4],
//     isAvailable: true,
//     createdAt: "2025-05-01T10:00:00.000Z",
//     updatedAt: "2025-05-01T10:00:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Emma", rating: 5, comment: "Felt like home away from home." },
//       { user: "Liam", rating: 4, comment: "Beautiful view and cozy room." },
//     ],
//   },
//   {
//     _id: "67f7650a197ac559e4089b91",
//     hotel: {
//       _id: "hotel_6",
//       name: "Mountain Escape",
//       address: "12 Alpine Way",
//       contact: "+01987654321",
//       owner: userDummyData,
//       city: "Aspen",
//       about: "Mountain Escape is your gateway to adventure and relaxation in the heart of the Alps. Our lodge-style hotel features rustic charm with modern comforts, perfect for skiers, hikers, and nature lovers alike."
//     },
//     roomType: "Deluxe Room",
//     pricePerNight: 399,
//     amenities: ["Free WiFi", "Spa Access", "Mountain View"],
//     images: [roomImg2, roomImg3, roomImg4, roomImg1],
//     isAvailable: true,
//     createdAt: "2025-05-02T09:30:00.000Z",
//     updatedAt: "2025-05-02T09:30:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Noah", rating: 5, comment: "Breathtaking views and great service." },
//       { user: "Mia", rating: 4, comment: "Loved the cozy fireplace." },
//     ],
//   },
//   {
//     _id: "67f76551197ac559e4089b92",
//     hotel: {
//       _id: "hotel_7",
//       name: "Heritage Palace",
//       address: "77 Old Town Road",
//       contact: "+01827364556",
//       owner: userDummyData,
//       city: "Rome",
//       about: "Heritage Palace blends historic charm with luxury. Located in the heart of Rome, guests enjoy classic architecture, elegant interiors, and close proximity to famous landmarks."
//     },
//     roomType: "King Suite",
//     pricePerNight: 550,
//     amenities: ["Room Service", "Free Breakfast", "Historic View"],
//     images: [roomImg3, roomImg4, roomImg1, roomImg2],
//     isAvailable: true,
//     createdAt: "2025-05-03T14:20:00.000Z",
//     updatedAt: "2025-05-03T14:20:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Sophia", rating: 5, comment: "A perfect blend of history and comfort." },
//       { user: "Ethan", rating: 4, comment: "Great location and friendly staff." },
//     ],
//   },
//   {
//     _id: "67f765a2197ac559e4089b93",
//     hotel: {
//       _id: "hotel_8",
//       name: "City Lights Hotel",
//       address: "101 Downtown Ave",
//       contact: "+01726384920",
//       owner: userDummyData,
//       city: "New York",
//       about: "City Lights Hotel is at the heart of downtown NYC, offering modern rooms with spectacular skyline views. Perfect for business travelers and tourists who want to experience the city's vibrant energy."
//     },
//     roomType: "Single Room",
//     pricePerNight: 299,
//     amenities: ["Free WiFi", "Gym Access", "City View"],
//     images: [roomImg4, roomImg1, roomImg2, roomImg3],
//     isAvailable: true,
//     createdAt: "2025-05-04T11:45:00.000Z",
//     updatedAt: "2025-05-04T11:45:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Jack", rating: 4, comment: "Excellent location but rooms were small." },
//       { user: "Olivia", rating: 5, comment: "Loved the rooftop bar and views!" },
//     ],
//   },
//   {
//     _id: "67f765f3197ac559e4089b94",
//     hotel: {
//       _id: "hotel_9",
//       name: "Cozy Corner Inn",
//       address: "56 Maple St",
//       contact: "+01637482910",
//       owner: userDummyData,
//       city: "Boston",
//       about: "Cozy Corner Inn offers a warm and welcoming atmosphere with comfortable rooms and homestyle breakfast. Ideal for travelers seeking a quiet retreat close to city attractions."
//     },
//     roomType: "Double Bed",
//     pricePerNight: 259,
//     amenities: ["Free Breakfast", "Free Parking", "Pet Friendly"],
//     images: [roomImg1, roomImg2, roomImg3, roomImg4],
//     isAvailable: true,
//     createdAt: "2025-05-05T08:00:00.000Z",
//     updatedAt: "2025-05-05T08:00:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Isabella", rating: 5, comment: "Felt just like home!" },
//       { user: "William", rating: 4, comment: "Great value for money." },
//     ],
//   },
//   {
//     _id: "67f76648197ac559e4089b95",
//     hotel: {
//       _id: "hotel_10",
//       name: "Grand Royal",
//       address: "88 King St",
//       contact: "+01529384756",
//       owner: userDummyData,
//       city: "London",
//       about: "Grand Royal offers luxurious accommodations in the heart of London. Enjoy grand interiors, fine dining, and top-notch service in a historic building with modern amenities."
//     },
//     roomType: "Presidential Suite",
//     pricePerNight: 899,
//     amenities: ["Room Service", "Spa", "Valet Parking"],
//     images: [roomImg2, roomImg3, roomImg4, roomImg1],
//     isAvailable: true,
//     createdAt: "2025-05-06T13:00:00.000Z",
//     updatedAt: "2025-05-06T13:00:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Charlotte", rating: 5, comment: "Absolutely stunning stay!" },
//       { user: "James", rating: 5, comment: "Five-star service all the way." },
//     ],
//   },
//   {
//     _id: "67f76699197ac559e4089b96",
//     hotel: {
//       _id: "hotel_11",
//       name: "Budget Stay",
//       address: "12 Economy Rd",
//       contact: "+01478523691",
//       owner: userDummyData,
//       city: "Chicago",
//       about: "Budget Stay provides clean and comfortable rooms at affordable prices. Perfect for travelers who want a no-frills but pleasant experience near city transport and shopping."
//     },
//     roomType: "Standard Room",
//     pricePerNight: 119,
//     amenities: ["Free WiFi", "Parking", "24/7 Reception"],
//     images: [roomImg3, roomImg4, roomImg1, roomImg2],
//     isAvailable: true,
//     createdAt: "2025-05-07T09:15:00.000Z",
//     updatedAt: "2025-05-07T09:15:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Michael", rating: 3, comment: "Basic but clean." },
//       { user: "Anna", rating: 4, comment: "Good for short stays." },
//     ],
//   },
//   {
//     _id: "67f766e0197ac559e4089b97",
//     hotel: {
//       _id: "hotel_12",
//       name: "Executive Plaza",
//       address: "200 Business Blvd",
//       contact: "+01398475612",
//       owner: userDummyData,
//       city: "San Francisco",
//       about: "Executive Plaza caters to business travelers with modern conference rooms, fast WiFi, and comfortable rooms. Conveniently located near the financial district and airports."
//     },
//     roomType: "Business Suite",
//     pricePerNight: 399,
//     amenities: ["Free WiFi", "Conference Rooms", "Gym"],
//     images: [roomImg4, roomImg1, roomImg2, roomImg3],
//     isAvailable: true,
//     createdAt: "2025-05-08T11:45:00.000Z",
//     updatedAt: "2025-05-08T11:45:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "David", rating: 4, comment: "Ideal for business trips." },
//       { user: "Laura", rating: 4, comment: "Comfortable and convenient." },
//     ],
//   },
//   {
//     _id: "67f76730197ac559e4089b98",
//     hotel: {
//       _id: "hotel_13",
//       name: "The Vintage Inn",
//       address: "9 Heritage Ln",
//       contact: "+01234509876",
//       owner: userDummyData,
//       city: "Edinburgh",
//       about: "The Vintage Inn offers a charming historic experience with antique furnishings and modern comforts. Located in the heart of Edinburgh's old town, perfect for culture lovers."
//     },
//     roomType: "Queen Room",
//     pricePerNight: 299,
//     amenities: ["Free Breakfast", "Historic Decor", "Free WiFi"],
//     images: [roomImg1, roomImg2, roomImg3, roomImg4],
//     isAvailable: true,
//     createdAt: "2025-05-09T14:30:00.000Z",
//     updatedAt: "2025-05-09T14:30:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Peter", rating: 5, comment: "A cozy stay with history." },
//       { user: "Linda", rating: 4, comment: "Lovely atmosphere and great breakfast." },
//     ],
//   },
//   {
//     _id: "67f76778197ac559e4089b99",
//     hotel: {
//       _id: "hotel_14",
//       name: "Seaside Villas",
//       address: "22 Ocean Drive",
//       contact: "+01928374650",
//       owner: userDummyData,
//       city: "Miami",
//       about: "Seaside Villas offers luxury beachfront villas with private pools, breathtaking views, and premium amenities. Ideal for those looking to relax by the ocean in style."
//     },
//     roomType: "Villa",
//     pricePerNight: 899,
//     amenities: ["Private Pool", "Beach Access", "Room Service"],
//     images: [roomImg2, roomImg3, roomImg4, roomImg1],
//     isAvailable: true,
//     createdAt: "2025-05-10T16:00:00.000Z",
//     updatedAt: "2025-05-10T16:00:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Julia", rating: 5, comment: "Pure luxury by the beach." },
//       { user: "Mark", rating: 4, comment: "Amazing amenities and location." },
//     ],
//   },
//   {
//     _id: "67f77077197ac559e4089b08",
//     hotel: {
//       _id: "hotel_15",
//       name: "Urban Nest",
//       address: "33 Central Park West",
//       contact: "+0123456789",
//       owner: userDummyData,
//       city: "New York",
//       about: "Urban Nest is a modern studio apartment hotel offering stylish, compact rooms in the heart of New York City. Perfect for travelers who want convenience and vibrant city life."
//     },
//     roomType: "Studio Apartment",
//     pricePerNight: 350,
//     amenities: ["Free WiFi", "Kitchenette", "City View"],
//     images: [roomImg2, roomImg3, roomImg1, roomImg4],
//     isAvailable: true,
//     createdAt: "2025-06-08T12:00:00.000Z",
//     updatedAt: "2025-06-08T12:00:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Nina", rating: 4, comment: "Cozy and well-located." },
//       { user: "Oscar", rating: 3, comment: "Small but comfortable." },
//     ],
//   },
//   {
//     _id: "67f77088197ac559e4089b09",
//     hotel: {
//       _id: "hotel_16",
//       name: "Sunny Meadows",
//       address: "55 Greenfield Road",
//       contact: "+0192837465",
//       owner: userDummyData,
//       city: "San Francisco",
//       about: "Sunny Meadows is a charming family-friendly hotel surrounded by lush gardens. Enjoy spacious rooms, home-cooked breakfasts, and a relaxing environment perfect for all ages."
//     },
//     roomType: "Family Room",
//     pricePerNight: 480,
//     amenities: ["Garden View", "Room Service", "Breakfast Included"],
//     images: [roomImg4, roomImg1, roomImg2, roomImg3],
//     isAvailable: true,
//     createdAt: "2025-06-09T14:15:00.000Z",
//     updatedAt: "2025-06-09T14:15:00.000Z",
//     __v: 0,
//     reviews: [
//       { user: "Sara", rating: 5, comment: "Perfect for family trips!" },
//       { user: "Tim", rating: 4, comment: "Loved the garden view." },
//     ],
//   }
// ]

// User Dummy Data
export const userDummyData = {
  _id: "user_91jhAs76Dla902sdPqwe321",
  username: "Tanya Explorer",
  email: "tanya.explorer@hotelbook.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nX3Rlc3QifQ",
  role: "hotelOwner",
  createdAt: "2025-06-01T10:15:00.000Z",
  updatedAt: "2025-08-01T09:30:00.000Z",
  __v: 1,
  recentSearchedCities: ["Tokyo", "Barcelona", "Vancouver"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "68e98763193ac559e4089c55",
  name: "Serenity Stays",
  address: "789 Peace Lane, Blossom District",
  contact: "+0987654321",
  owner: userDummyData,
  city: "Tokyo",
  createdAt: "2025-08-01T08:00:00.000Z",
  updatedAt: "2025-08-01T08:00:00.000Z",
  __v: 0,
};

// Room Dummy Data
export const roomsDummyData = [
  {
    _id: "room_01",
    hotel: {
      _id: "hotel_tokyo1",
      name: "Serenity Stays",
      address: "789 Peace Lane, Blossom District",
      contact: "+0987654321",
      owner: userDummyData,
      city: "Tokyo",
      about:
        "Located in the heart of Tokyo, Serenity Stays offers peaceful lodging with minimalist design, perfect for both business and leisure travelers. Enjoy beautiful rooftop gardens and tea lounges.",
    },
    roomType: "Zen Suite",
    pricePerNight: 520,
    amenities: ["Smart TV", "Free WiFi", "Tea Lounge"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-08-01T08:30:00.000Z",
    updatedAt: "2025-08-01T08:30:00.000Z",
    __v: 0,
    reviews: [
      { user: "Yuki", rating: 5, comment: "So peaceful and beautiful." },
      { user: "Aaron", rating: 4, comment: "Perfect for remote work!" },
    ],
  },
  {
    _id: "room_02",
    hotel: {
      _id: "hotel_barcelona1",
      name: "Casa Azul",
      address: "24 Rambla Street, Gothic Quarter",
      contact: "+03412837456",
      owner: userDummyData,
      city: "Barcelona",
      about:
        "Casa Azul is a vibrant boutique hotel in Barcelona featuring artistic interiors, rooftop tapas bar, and vibrant Mediterranean energy. Great for young travelers and creatives.",
    },
    roomType: "Artist Loft",
    pricePerNight: 430,
    amenities: ["Rooftop Bar", "Free Breakfast", "Art Gallery"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-08-02T11:00:00.000Z",
    updatedAt: "2025-08-02T11:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Elena", rating: 5, comment: "Loved the vibe and rooftop." },
      { user: "Marco", rating: 4, comment: "Very artsy and colorful." },
    ],
  },
  {
    _id: "room_03",
    hotel: {
      _id: "hotel_vancouver1",
      name: "Maple Hill Lodge",
      address: "88 Forest Trail, North Shore",
      contact: "+16041234567",
      owner: userDummyData,
      city: "Vancouver",
      about:
        "Tucked away in nature, Maple Hill Lodge provides cozy rooms with breathtaking mountain and forest views. Ideal for skiers, hikers, and eco-tourists.",
    },
    roomType: "Nature Cabin",
    pricePerNight: 350,
    amenities: ["Mountain View", "Hot Tub", "Fireplace"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-08-03T12:00:00.000Z",
    updatedAt: "2025-08-03T12:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Lucas", rating: 5, comment: "Woke up to birds and snow." },
      { user: "Ava", rating: 4, comment: "Charming and peaceful!" },
    ],
  },
  {
    _id: "room_04",
    hotel: {
      _id: "hotel_dubai1",
      name: "The Golden Mirage",
      address: "1 Sheikh View Blvd",
      contact: "+971501234567",
      owner: userDummyData,
      city: "Dubai",
      about:
        "Luxury redefined at The Golden Mirage. Enjoy rooftop infinity pools, gold-accented interiors, and world-class service in the heart of Dubai's skyline.",
    },
    roomType: "Royal Suite",
    pricePerNight: 950,
    amenities: ["Infinity Pool", "Spa", "Private Butler"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-08-04T10:30:00.000Z",
    updatedAt: "2025-08-04T10:30:00.000Z",
    __v: 0,
    reviews: [
      { user: "Fatima", rating: 5, comment: "Felt like royalty!" },
      { user: "Zaid", rating: 5, comment: "Service was top-notch." },
    ],
  },
  {
    _id: "room_05",
    hotel: {
      _id: "hotel_bali1",
      name: "Bamboo Grove Retreat",
      address: "Ubud Forest Circle",
      contact: "+628123456789",
      owner: userDummyData,
      city: "Bali",
      about:
        "A serene jungle escape with eco-friendly bamboo villas, yoga decks, and traditional Balinese breakfasts. The perfect retreat for soul searchers and nature lovers.",
    },
    roomType: "Eco Villa",
    pricePerNight: 420,
    amenities: ["Outdoor Shower", "Yoga Deck", "Organic Meals"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-08-05T09:00:00.000Z",
    updatedAt: "2025-08-05T09:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Maya", rating: 5, comment: "Heaven in the jungle." },
      { user: "Leo", rating: 4, comment: "Loved the calm and food!" },
    ],
  },
  {
    _id: "room_06",
    hotel: {
      _id: "hotel_paris1",
      name: "Château Lumière",
      address: "17 Rue de Luxe, Paris",
      contact: "+33123456789",
      owner: userDummyData,
      city: "Paris",
      about:
        "A historic French mansion turned luxury hotel with opulent rooms, classic décor, and candlelit courtyard dining under the stars.",
    },
    roomType: "Versailles Suite",
    pricePerNight: 880,
    amenities: ["Canopy Bed", "Private Balcony", "In-room Champagne"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-08-05T13:30:00.000Z",
    updatedAt: "2025-08-05T13:30:00.000Z",
    __v: 0,
    reviews: [
      {
        user: "Sophie",
        rating: 5,
        comment: "Felt like a queen in this suite.",
      },
      { user: "Louis", rating: 4, comment: "Lavish and romantic." },
    ],
  },
  {
    _id: "room_07",
    hotel: {
      _id: "hotel_newyork1",
      name: "Skyline Suites",
      address: "99 Manhattan Heights, NYC",
      contact: "+12125551234",
      owner: userDummyData,
      city: "New York",
      about:
        "A sleek and modern high-rise hotel with panoramic views of NYC, featuring smart rooms and rooftop jazz bar.",
    },
    roomType: "Penthouse Loft",
    pricePerNight: 1020,
    amenities: ["Sky View", "Mini Bar", "Smart Controls"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-08-05T14:00:00.000Z",
    updatedAt: "2025-08-05T14:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Jason", rating: 5, comment: "Woke up above the clouds." },
      { user: "Mira", rating: 5, comment: "Incredible views and tech!" },
    ],
  },
  {
    _id: "room_08",
    hotel: {
      _id: "hotel_rome1",
      name: "Colosseum Charm",
      address: "Via Antica 4, Rome",
      contact: "+390612345678",
      owner: userDummyData,
      city: "Rome",
      about:
        "A charming boutique hotel near historic landmarks, with classical interiors and modern comforts.",
    },
    roomType: "Roman Elegance Room",
    pricePerNight: 390,
    amenities: ["Antique Decor", "Walkable Location", "Breakfast Included"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-08-05T15:00:00.000Z",
    updatedAt: "2025-08-05T15:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Giulia", rating: 5, comment: "History meets comfort." },
      { user: "Tom", rating: 4, comment: "So close to everything!" },
    ],
  },
  {
    _id: "room_09",
    hotel: {
      _id: "hotel_cape1",
      name: "Ocean Breeze Hotel",
      address: "12 Seaview Avenue, Cape Town",
      contact: "+27211234567",
      owner: userDummyData,
      city: "Cape Town",
      about:
        "Modern beachfront hotel with eco-conscious design, perfect for surfers and sunset chasers.",
    },
    roomType: "Sunset Bay Room",
    pricePerNight: 480,
    amenities: ["Ocean View", "Surf Rentals", "Outdoor Lounge"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-08-05T15:30:00.000Z",
    updatedAt: "2025-08-05T15:30:00.000Z",
    __v: 0,
    reviews: [
      { user: "Layla", rating: 5, comment: "Sunsets were breathtaking." },
      { user: "Zane", rating: 4, comment: "Loved the fresh sea air." },
    ],
  },
  {
    _id: "room_10",
    hotel: {
      _id: "hotel_kyoto1",
      name: "Karesansui Inn",
      address: "5 Zen Garden Road, Kyoto",
      contact: "+81755678901",
      owner: userDummyData,
      city: "Kyoto",
      about:
        "Traditional ryokan-style hotel with tatami rooms, hot springs, and tranquil rock gardens.",
    },
    roomType: "Ryokan Room",
    pricePerNight: 310,
    amenities: ["Tatami Mats", "Onsen Bath", "Zen Garden View"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-08-05T16:00:00.000Z",
    updatedAt: "2025-08-05T16:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Haruto", rating: 5, comment: "True Japanese experience." },
      { user: "Emma", rating: 4, comment: "So peaceful and authentic." },
    ],
  },
  {
    _id: "room_11",
    hotel: {
      _id: "hotel_sydney1",
      name: "Harbour Haven",
      address: "23 Opera Lane, Sydney",
      contact: "+61234567890",
      owner: userDummyData,
      city: "Sydney",
      about:
        "A chic waterfront hotel near the Sydney Opera House, with open-air dining and harbor views.",
    },
    roomType: "Opera View Suite",
    pricePerNight: 610,
    amenities: ["Harbor View", "Open Terrace", "Seafood Dining"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
    createdAt: "2025-08-05T17:00:00.000Z",
    updatedAt: "2025-08-05T17:00:00.000Z",
    __v: 0,
    reviews: [
      { user: "Olivia", rating: 5, comment: "Loved the ocean breeze!" },
      { user: "Noah", rating: 4, comment: "Prime location and food." },
    ],
  },
  {
    _id: "room_12",
    hotel: {
      _id: "hotel_jaipur1",
      name: "Maharaja Palace",
      address: "1 Pink City Road, Jaipur",
      contact: "+911412345678",
      owner: userDummyData,
      city: "Jaipur",
      about:
        "An opulent heritage hotel offering royal-style stays, traditional Rajasthani food, and camel rides.",
    },
    roomType: "Royal Heritage Suite",
    pricePerNight: 560,
    amenities: ["Royal Decor", "Folk Music", "Cultural Shows"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-08-05T17:30:00.000Z",
    updatedAt: "2025-08-05T17:30:00.000Z",
    __v: 0,
    reviews: [
      { user: "Ananya", rating: 5, comment: "Felt like a queen!" },
      { user: "Ravi", rating: 4, comment: "Grand and colorful." },
    ],
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

export const recentBookings = [
  {
    guest: "Anjali Verma",
    hotel: "The Royal Orchid",
    checkIn: "2025-08-01",
    checkOut: "2025-08-05",
    status: "Confirmed",
  },
  {
    guest: "Rohit Sharma",
    hotel: "Sea Breeze Hotel",
    checkIn: "2025-08-03",
    checkOut: "2025-08-06",
    status: "Pending",
  },
  {
    guest: "Sanya Mehra",
    hotel: "Mountain Inn",
    checkIn: "2025-08-02",
    checkOut: "2025-08-04",
    status: "Cancelled",
  },
];

export const bookings = [
  {
    id: 1,
    hotelName: "The Royal Orchid",
    checkIn: "2025-08-10",
    checkOut: "2025-08-14",
    paymentMode: "Credit Card",
    paymentStatus: "Paid",
    guests: 2,
  },
  {
    id: 2,
    hotelName: "Sea Breeze Resort",
    checkIn: "2025-09-01",
    checkOut: "2025-09-05",
    paymentMode: "UPI",
    paymentStatus: "Pending",
    guests: 3,
  },
  {
    id: 3,
    hotelName: "Mountain View Inn",
    checkIn: "2025-10-12",
    checkOut: "2025-10-16",
    paymentMode: "Net Banking",
    paymentStatus: "Paid",
    guests: 1,
  },
  {
    id: 4,
    hotelName: "Palm Grove Villas",
    checkIn: "2025-11-20",
    checkOut: "2025-11-25",
    paymentMode: "Debit Card",
    paymentStatus: "Pending",
    guests: 4,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
