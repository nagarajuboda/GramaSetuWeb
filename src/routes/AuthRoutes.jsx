import Login from "../components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import AllRoutes from "./AllRoutes";
export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
