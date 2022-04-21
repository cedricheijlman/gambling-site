import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Login } from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import { Dashboard } from "./pages/dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mines" element={<Dashboard />} />
        <Route path="/dices" element={<Dashboard />} />
        <Route path="/crash" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
