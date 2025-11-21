import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import bgimg from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const validEmail = "dommeti.devisri@gmail.com";
    const validPassword = "devi@123";

    if (formData.email === validEmail && formData.password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-black/75 px-8 pt-16 pb-10 rounded-sm">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Sign In</h1>

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-4 bg-[#393939] rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 text-base"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-4 bg-[#393939] rounded text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600 text-base"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-5 text-lg rounded mt-4"
              >
                Sign In
              </Button>
            </form>

            <div className="flex items-center justify-between mt-6 text-sm">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#b3b3b3]"
                  defaultChecked
                />
                <span className="text-[#b3b3b3]">Remember me</span>
              </label>
              <a href="#" className="text-[#b3b3b3] hover:underline">
                Need help?
              </a>
            </div>

            <div className="mt-20 text-[#b3b3b3]">
              <span className="text-[#b3b3b3]">New to Netflix? </span>
              <a
                href="/signup"
                className="text-white font-medium hover:underline"
              >
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
