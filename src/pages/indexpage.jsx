import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const IndexPage = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFwYm94aGJuYiIsImEiOiJjbTAwZmNsd3gxMHpiMmxvcmlhN3FsamIyIn0.rGEekbo8oWjQEQeqkVD1Pg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [151.762134053333, -31.0540415], // [lng, lat]
      zoom: 12,
    });

    new mapboxgl.Marker()
      .setLngLat([151.762134053333, -31.0540415])
      .addTo(map);
  }, []);

  return (
    <div className="bg-gray-100 font-roboto">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-4">
            <span className="material-icons text-green-500 text-3xl">terrain</span>
            <h1 className="text-xl font-bold text-gray-800">Camping Bliss</h1>
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Campsites</a>
            <a href="#" className="text-gray-700 hover:text-green-500">About</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Contact</a>
          </nav>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Book Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-6 space-y-12">
        {/* Heading */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800">Apsley Falls</h1>
          <h2 className="text-xl text-gray-600 mt-2">Apsley Falls Campground</h2>
        </section>

        {/* Image Gallery */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Image Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1661916911093-b2e5f005938f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Featured Camping"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <button className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded shadow-md hover:bg-gray-100">
                View All Photos
              </button>
            </div>

            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_auto:eco/v1645653740/campground-photos/ovsrjvakyvdvm2zgxhk8.jpg"
              alt="Nature"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto:eco/v1645653069/campground-photos/eqcizg5ftig11h7zzylg.jpg"
              alt="Tent"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto:eco/v1645652736/campground-photos/xpeaavzduimuwnxyaw5p.jpg"
              alt="Campfire"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800">Description</h3>
          <p className="mt-4 text-gray-700">
            This informal bushland setting, separated from the picnic area, gives easy access to Apsley Gorge Rim Walk and Oxley Walk.
          </p>
        </section>

        {/* Vehicle Details */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800">Vehicle Details</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500">wc</span>
              <span><strong>Toilets:</strong> Flush</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500">table_bar</span>
              <span><strong>Picnic Tables:</strong> Yes</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500">outdoor_grill</span>
              <span><strong>Barbecues:</strong> Wood</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-green-500">shower</span>
              <span><strong>Showers:</strong> None</span>
            </li>
          </ul>
        </section>

        {/* Location (Map) */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800">Location</h3>
          <div id="map" className="w-full h-64 mt-4 rounded-lg shadow-md"></div>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
