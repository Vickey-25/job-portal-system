import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function PostJob() {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {

    setJob({
      ...job,
      [e.target.name]: e.target.value
    });

  };

  // Handle form submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await API.post("/jobs", job);

      console.log("Job posted:", response.data);

      alert("Job Posted Successfully!");

      // Reset form
      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: ""
      });

      // Redirect to recruiter dashboard
      navigate("/recruiter-dashboard");

    }
    catch (error) {

      console.error("Error posting job:", error);

      alert("Failed to post job");

    }
    finally {

      setLoading(false);

    }

  };

  // Logout function
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6">

        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          Recruiter Panel
        </h2>

        <nav className="space-y-4">

          <Link
            to="/recruiter-dashboard"
            className="block hover:text-blue-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/post-job"
            className="block text-blue-400 font-semibold"
          >
            Post Job
          </Link>

          <Link
            to="/recruiter-applications"
            className="block hover:text-blue-400 transition"
          >
            Applicants
          </Link>

          <button
            onClick={handleLogout}
            className="block text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex justify-center items-center">

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 w-full max-w-lg space-y-4 shadow-xl"
        >

          <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">
            Post New Job
          </h1>

          {/* Job Title */}
          <input
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
            required
          />

          {/* Company */}
          <input
            name="company"
            placeholder="Company Name"
            value={job.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
            required
          />

          {/* Location */}
          <input
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
            required
          />

          {/* Salary */}
          <input
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
            required
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post Job"}
          </motion.button>

        </motion.form>

      </div>

    </div>

  );
}