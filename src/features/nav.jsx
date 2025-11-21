import React from "react";
import { Button } from "@/components/ui/button";
import bgimg from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  
  return (
    <>
      <div className="relative bg-black text-white px-4 sm:px-10 py-5 sm:py-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bgimg})` }}
        ></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-3xl sm:text-4xl font-bold text-red-600 tracking-widest">
              NETFLIX
            </div>

            <div className="flex items-center gap-3">
              <select className="border p-1.5 pr-15 rounded-sm text-sm sm:text-base">
                <option className="text-black">English</option>
                <option className="text-black">Hindi</option>
              </select>

              {!isAuthenticated ? (
                <Button
                  className="bg-red-600 px-4 py-1 hover:bg-red-700 text-sm sm:text-base"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="bg-red-600 px-4 py-1 hover:bg-red-700  hover:text-white border-red-600 text-sm sm:text-base"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>

          {!isAuthenticated && (
            <div className="mt-12 sm:mt-20 flex flex-col items-center text-center px-4">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
                Unlimited films, series and more
              </div>
              <div className="py-4 text-lg sm:text-xl font-semibold">
                Starts at NOK 99. Cancel at any time.
              </div>
              <p className="text-sm sm:text-base px-4">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 py-5 w-full sm:w-auto">
                <input
                  className="border border-gray-500  p-3 rounded-sm text-white w-full sm:w-80"
                  type="text"
                  placeholder="Email Address"
                />
                <Button className="bg-red-600 px-5 py-6 hover:bg-red-700 w-full sm:w-auto text-xl">
                  Get Started
                </Button>
              </div>
            </div>
          )}

          {isAuthenticated && (
            <div className="flex flex-col justify-center items-center text-center h-[70vh]">
              <h1 className="text-5xl mb-4 font-bold">Welcome back!</h1>
              <p className="text-xl mb-14">Browse your favorite shows below</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
