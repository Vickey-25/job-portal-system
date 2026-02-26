import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";
import RecruiterApplications from "./pages/RecruiterApplications";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/recruiter-applications" element={<RecruiterApplications />} />
        <Route path="/student-dashboard"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

<Route path="/recruiter-applications"
  element={
    <ProtectedRoute>
      <RecruiterApplications />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;