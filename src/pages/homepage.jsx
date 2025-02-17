import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import campingData from "../data/campingSpots.json"; // Example camping data

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Simulated Predictive Search Function
  const handleSearchChange = (event) => {
    const input = event.target.value.toLowerCase();
    setQuery(input);

    if (input.length > 1) {
      const filtered = campingData.filter((spot) =>
        spot.name.toLowerCase().includes(input) ||
        spot.state.toLowerCase().includes(input) ||
        spot.inspiration.toLowerCase().includes(input)
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  // When the search button is clicked, navigate to /search (IndexPage.jsx)
  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Camping Bliss</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Explore</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">About</li>
            <li className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Find the perfect camping escape</h2>
        <p className="text-gray-600">Search and explore the best camping destinations, with or without dates.</p>
      </section>

      {/* SEARCH BAR */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-6">
        <div className="flex items-center space-x-4">
          {/* Location Search Input */}
          <div className="relative w-full">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={query}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            {/* Predictive Search Dropdown */}
            {filteredResults.length > 0 && (
              <div className="absolute bg-white shadow-md rounded-lg w-full mt-2 z-10">
                {filteredResults.map((spot) => (
                  <div key={spot.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {spot.name} - {spot.state}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date Selector (Optional) */}
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Add dates (optional)"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Guests Selector (Optional) */}
          <div className="relative">
            <FaUserFriends className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Add guests (optional)"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center"
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </div>
      </div>

      {/* FEATURED CAMPING SPOTS */}
      <section className="px-6 mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore Campgrounds</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campingData.slice(0, 6).map((spot) => (
            <div key={spot.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={spot.image} alt={spot.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{spot.name}</h4>
                <p className="text-gray-500">{spot.state}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p>© 2025 Camping Bliss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
