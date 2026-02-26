import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          JobPortal
        </motion.h1>

        <div className="space-x-4">

          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              Login
            </motion.button>
          </Link>

          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
            >
              Register
            </motion.button>
          </Link>

        </div>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center h-[80vh] px-6">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Find Your Dream Job
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-xl mb-8 max-w-2xl"
        >
          Connect with top companies, explore opportunities, and build your future career with our premium job portal platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4"
        >

          <Link to="/jobs">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-lg font-semibold shadow-lg shadow-blue-500/20"
            >
              Explore Jobs
            </motion.button>
          </Link>

          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-lg"
            >
              Get Started
            </motion.button>
          </Link>

        </motion.div>

      </div>

    </div>
  );
}