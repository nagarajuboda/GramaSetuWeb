import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
import { useTranslation } from "react-i18next";
import {
  FaUserCircle,
  FaRegCreditCard,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";
import { User } from "lucide-react";
import { set } from "nprogress";

export default function Header() {
  const { t } = useTranslation();
  const [userDetails, setUserDetails] = useState({});
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
    FetchData();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const FetchData = () => {
    const sessionData = localStorage.getItem("userData");
    const userDetails = sessionData ? JSON.parse(sessionData) : null;

    var users = userDetails?.result?.user; // normalize
    setUserDetails(users);
  };

  console.log(userDetails, "=========> user");
  const handleLogout = () => {
    localStorage.clear("");
    navigate("/Login");
  };

  return (
    <div className="header-container">
      <div className="user-info" onClick={toggleDropdown}>
        <span className="user-name">{userDetails.fullName} ▾</span>
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
          {/* <div className="dropdown-item" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>{t("Logout")}</span>
          </div> */}
          <div className="dropdown-item" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>{t("Logout")}</span>
          </div>
        </div>
      )}
    </div>
  );
}
