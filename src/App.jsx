import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Table from "./components/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Apllication from "./components/applications/ViewModal";
import Company from "./components/companies/ViewModal";
import Employee from "./components/employees/ViewModal";
import Applications from "./pages/Applications";
import Companies from "./pages/Companies";
import Employees from "./pages/Employees";
import Questions from "./pages/Questions";
import Question from "./components/questions/ViewModal";
import { useEffect } from "react";

export default function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && window.location.pathname !== "/register") {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/:id" element={<Apllication />} />

        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:id" element={<Company />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<Employee />} />

        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/table" element={<Table />} />
        <Route
          path="*"
          element={
            <div className="h-screen w-full flex flex-col justify-center items-center ">
              <p className="text-7xl font-bold"> 404</p>
              <div className="text-gray-500 flex items-center gap-5">
                Sorry, the page was not found! redirecting to home page...
              </div>
            </div>
          }
        />
      </Routes>
      <ToastContainer position="bottom-center" limit={1} autoClose={2000} />
    </>
  );
}
