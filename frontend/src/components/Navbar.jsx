import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");

  };

  return (

    <div className="bg-slate-800 text-white p-4 flex justify-between">

      <h1 className="font-bold text-xl">
        Job Portal
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>

  );
}