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
