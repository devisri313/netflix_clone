import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import bgimg from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

    if (
      formData.email === validEmail &&
      formData.password === validPassword &&
      formData.name.trim() !== ""
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Please use the correct email and password.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-black/75 px-8 pt-16 pb-10 rounded-sm">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Sign Up</h1>

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-4 bg-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:bg-[#454545]"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-4 bg-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:bg-[#454545]"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-4 bg-[#333] rounded text-white placeholder-gray-500 focus:outline-none focus:bg-[#454545]"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-5 text-lg font-medium rounded"
              >
                Sign Up
              </Button>
            </form>

            <div className="flex items-center justify-between mt-6 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-gray-400 hover:underline">
                Need help?
              </a>
            </div>

            <div className="mt-16 text-gray-400">
              <span>Already have account? </span>
              <a
                href="/signin"
                className="text-white font-medium hover:underline"
              >
                Sign In Now
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
