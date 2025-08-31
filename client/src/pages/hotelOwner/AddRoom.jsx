import React, { useState } from "react";
import Title from "../../components/Title";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: "",
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  const handleAmenityChange = (amenity) => {
    setInput((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity],
      },
    }));
  };

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    setImages((prev) => ({ ...prev, [key]: file }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Data:", input);
    console.log("Uploaded Images:", images);
    // Handle form submission (e.g. API call)
  };

  return (
    <div className="max-w-4xl mx-auto pb-24"> {/* Added padding to avoid footer overlap */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 space-y-8"
      >
        <Title
          title="Add Room"
          subtitle="Fill in the details carefully and accurately to enhance the user booking experience."
          align="left"
          font="outfit"
        />

        {/* Room Type */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Room Type
          </label>
          <input
            type="text"
            name="roomType"
            value={input.roomType}
            onChange={handleInputChange}
            placeholder="e.g., Deluxe Suite"
            className="w-full px-4 py-2 border rounded-lg focus:outline-indigo-500"
            required
          />
        </div>

        {/* Price Per Night */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Price per Night (₹)
          </label>
          <input
            type="number"
            name="pricePerNight"
            value={input.pricePerNight}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-indigo-500"
            required
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-3 text-sm font-semibold text-gray-800">
            Select Amenities:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(input.amenities).map(([amenity, isChecked], idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleAmenityChange(amenity)}
                  className="accent-indigo-500"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Upload Images */}
        <div>
          <label className="block mb-3 text-sm font-semibold text-gray-800">
            Upload Room Images (4)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((key) => (
              <div key={key}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, key)}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-3 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  required
                />
                {images[key] && (
                  <img
                    src={URL.createObjectURL(images[key])}
                    alt={`Room ${key}`}
                    className="mt-2 rounded-lg h-32 w-full object-cover shadow-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;

