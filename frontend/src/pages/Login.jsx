import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // handle login submit with JWT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // call backend login API
      const response = await API.post("/auth/login", formData);

      // backend returns JWT token
      const token = response.data;

      // store token in localStorage
      localStorage.setItem("token", token);

      console.log("JWT Token stored:", token);

      alert("Login successful");

      // redirect to dashboard
      navigate("/student-dashboard");

    }
    catch (error) {

      alert("Login failed");

      console.error("Login error:", error);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
      >

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>

            <label className="block mb-1 text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
              required
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-1 text-gray-300">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-blue-400 mt-1"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>

          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
          >
            Login
          </motion.button>

        </form>

        {/* Register link */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-400 ml-1">
            Register
          </Link>
        </p>

      </motion.div>

    </div>

  );
}
