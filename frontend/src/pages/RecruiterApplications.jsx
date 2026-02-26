import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

export default function RecruiterApplications() {

  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    fetchApplications();
    fetchJobs();

  }, []);

  const fetchApplications = async () => {

    try {

      const res = await API.get("/applications");

      console.log("Applications:", res.data);

      setApplications(res.data);

    }
    catch (err) {

      console.error(err);

    }

  };

  const fetchJobs = async () => {

    try {

      const res = await API.get("/jobs");

      setJobs(res.data);

    }
    catch (err) {

      console.error(err);

    }

  };

  const getJobTitle = (jobId) => {

    const job = jobs.find(j => j.id === jobId);

    return job ? job.title : "Unknown Job";

  };

  return (

    <div className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Job Applications
      </h1>

      {applications.length === 0 && (

        <p>No applications found</p>

      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {applications.map(app => (

          <motion.div
            key={app.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl border border-white/20"
          >

            <h2 className="text-xl font-bold text-blue-400">
              {getJobTitle(app.jobId)}
            </h2>

            <p>Name: {app.studentName}</p>

            <p>Email: {app.studentEmail}</p>

            <p>Status: {app.status}</p>

          </motion.div>

        ))}

      </div>

    </div>

  );
}
