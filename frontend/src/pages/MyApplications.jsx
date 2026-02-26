import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyApplications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications = async () => {

    const res = await API.get("/applications");

    setApplications(res.data);

  };

  return (

    <div className="p-6">

      <h1 className="text-2xl mb-4">
        My Applications
      </h1>

      {applications.map(app => (

        <div key={app.id} className="border p-3 mb-2">

          <p>Name: {app.studentName}</p>

          <p>Status: {app.status}</p>

        </div>

      ))}

    </div>

  );
}