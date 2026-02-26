import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT"
  });

  // handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // handle role change
  const handleRoleChange = (selectedRole) => {

    setFormData({
      ...formData,
      role: selectedRole
    });

  };

  // handle submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/auth/register", formData);

      alert("Registration Successful");

      console.log(response.data);

    } catch (error) {

      alert("Registration Failed");

      console.error(error);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
      >

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Create Account
        </h2>

        {/* IMPORTANT: connect form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>

            <label className="block mb-1 text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20"
              required
            />

          </div>

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

          {/* Role */}
          <div>

            <label className="block mb-2 text-gray-300">
              Register As
            </label>

            <div className="flex gap-4">

              <button
                type="button"
                onClick={() => handleRoleChange("STUDENT")}
                className={`flex-1 py-2 rounded-lg border ${
                  formData.role === "STUDENT"
                    ? "bg-blue-500 border-blue-500"
                    : "bg-white/10 border-white/20"
                }`}
              >
                Student
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange("RECRUITER")}
                className={`flex-1 py-2 rounded-lg border ${
                  formData.role === "RECRUITER"
                    ? "bg-blue-500 border-blue-500"
                    : "bg-white/10 border-white/20"
                }`}
              >
                Recruiter
              </button>

            </div>

          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
          >
            Register
          </motion.button>

        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-400 ml-1">
            Login
          </Link>
        </p>

        <Link to="/" className="block text-center text-gray-400 mt-2">
          ← Back to Home
        </Link>

      </motion.div>

    </div>

  );

}