import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
import {
  FaUserCircle,
  FaRegCreditCard,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  var navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear("");
    navigate("/Login");
  };

  return (
    <div className="header-container">
      <div className="user-info" onClick={toggleDropdown}>
        <span className="user-name">Dr. Nagaraju Boda ▾</span>
      </div>

      {dropdownOpen && (
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-item">
            <FaUserCircle className="icon" />
            <span>Profile</span>
          </div>
          <div className="dropdown-item">
            <FaRegCreditCard className="icon" />
            <span>Subscription</span>
          </div>
          <div className="dropdown-item">
            <FaKey className="icon" />
            <span>Change Password</span>
          </div>
          <div className="dropdown-item" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}
