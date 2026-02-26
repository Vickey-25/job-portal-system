import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RecruiterDashboard() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Java Developer",
      location: "Chennai",
      salary: "6 LPA"
    },
    {
      id: 2,
      title: "Spring Boot Developer",
      location: "Bangalore",
      salary: "10 LPA"
    }
  ]);

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6">

        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          Recruiter Panel
        </h2>

        <nav className="space-y-4">

          <Link className="block hover:text-blue-400">
            Dashboard
          </Link>

          <Link className="block hover:text-blue-400">
            Post Job
          </Link>

          <Link className="block hover:text-blue-400">
            Applicants
          </Link>

          <Link to="/" className="block text-red-400 hover:text-red-500">
            Logout
          </Link>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Posted Jobs
        </h1>

        {jobs.length === 0 ? (
          <p>No jobs posted.</p>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {jobs.map(job => (

              <motion.div
                key={job.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg"
              >

                <h2 className="text-xl font-semibold">
                  {job.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  Location: {job.location}
                </p>

                <p className="text-green-400 mt-1">
                  Salary: {job.salary}
                </p>

                <div className="flex gap-2 mt-4">

                  <button className="flex-1 py-2 rounded-lg bg-blue-500 hover:bg-blue-600">
                    View Applicants
                  </button>

                  <button
                    onClick={() => deleteJob(job.id)}
                    className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
}