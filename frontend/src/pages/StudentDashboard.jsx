import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

export default function StudentDashboard() {

  const [jobs, setJobs] = useState([]);

  // fetch jobs from backend
  const fetchJobs = async () => {

    try {

      const response = await API.get("/jobs");

      setJobs(response.data);

    }
    catch (error) {

      console.error("Error fetching jobs:", error);

    }

  };

  // APPLY JOB FUNCTION
  const applyJob = async (jobId) => {

    try {

      // temporary user info (later we will use JWT user info)
      const studentEmail = "vignesh@gmail.com";
      const studentName = "Vignesh";

      await API.post("/applications", {

        jobId: jobId,
        studentEmail: studentEmail,
        studentName: studentName

      });

      alert("Application submitted successfully!");

    }
    catch (error) {

      console.error("Error applying job:", error);

      alert("Application failed");

    }

  };

  useEffect(() => {

    fetchJobs();

  }, []);

  return (

    <div className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Available Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {jobs.map((job) => (

          <motion.div
            key={job.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl border border-white/20"
          >

            <h2 className="text-xl font-bold text-blue-400">
              {job.title}
            </h2>

            <p className="text-gray-300">
              Company: {job.company}
            </p>

            <p className="text-gray-300">
              Location: {job.location}
            </p>

            <p className="text-gray-300">
              Salary: {job.salary}
            </p>

            <p className="text-gray-400 mt-2">
              {job.description}
            </p>

            {/* APPLY BUTTON CONNECTED */}
            <button
              onClick={() => applyJob(job.id)}
              className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Apply Now
            </button>

          </motion.div>

        ))}

      </div>

    </div>

  );
}