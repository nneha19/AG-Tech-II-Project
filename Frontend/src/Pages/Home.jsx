import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import RecentUploads from "../components/RecentUploads";
import Features from "../components/Features";
import Button from "../components/Button";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <ClimbingBoxLoader color="#2563EB" loading={true} size={15} />
      </div>
    );
  }

  return (
    <>
      <div>
        <div
          className="relative flex flex-col items-center justify-center h-screen px-4 pt-20 bg-cover"
          style={{ backgroundImage: "url('/Images/hero.jpg')", backgroundPosition: "70% center",
            backgroundRepeat: "no-repeat", }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-100/20"></div>

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-10 leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/2)]">
              Get Free University Past Papers & Tech Guidance
            </h1>

            {/* Search Bar */}
            <div className="flex items-center justify-center mt-10">
              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Search Past Papers & Tech Guidance..."
                  className="w-full p-4 pr-12 text-black placeholder-gray-500 bg-white rounded-full focus:outline-none focus:ring-0"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#2563EB] p-3 rounded-full hover:bg-blue-700">
                  <img
                    src="/Images/search.png"
                    alt="Search"
                    className="w-5 h-5 cursor-pointer"
                  />
                </button>
              </div>
            </div>

            {/* Upload Button */}
            <Button
              to="/signup"
              className="mt-10 bg-[#2563EB] hover:bg-blue-700 hover:font-bold text-white px-6 py-3 
    rounded-full text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-100"
            >
              Wish to Upload
            </Button>
          </div>

        </div>
      </div>
      <RecentUploads />
      <Features />
    </>
  );
};

export default Home;
