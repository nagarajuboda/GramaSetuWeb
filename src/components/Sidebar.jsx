import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import GramaSetuLogo from "../assets/images/GramaSetuLogo.png";
import { useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdMap,
  MdLocationCity,
  MdGroups,
  MdBusiness,
} from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";

import Header from "./Header";

import "../assets/styles/Sidebar.css";
import profileImage from "../assets/images/ProfileImage.png";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [sessionData, setSessionData] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setSessionData(JSON.parse(data));
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setOpenDropdowns([]);
  };
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const timeout = setTimeout(() => setPageLoading(false), 200); // short blink

    return () => clearTimeout(timeout);
  }, [location.pathname]); // runs on route change
  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const menuByRole = {
    Super_Admin: [
      {
        name: "Dashboard",
        path: "/dashboard/SuperAdminDashboard",
        icon: <MdDashboard />,
      },
      { name: "States", path: "/dashboard/States", icon: <MdMap /> },
      {
        name: "Districts",
        path: "/dashboard/Districts",
        icon: <MdLocationCity />,
      },
      {
        name: "Panchayat ",
        path: "/dashboard/Panchayat",
        icon: <MdBusiness />,
      },
      { name: "Users ", path: "/dashboard/Users", icon: <MdGroups /> },
    ],
    "Project-Manager": [
      {
        name: "Project Management",
        path: "/dashboard/AdminDashboard",
      },
    ],
    "US-finance": [
      {
        name: "Finance Dashboard",
        path: "/dashboard/FinanceDashboard",
      },
    ],
    "Indian-finance": [
      {
        name: "Employee List",
        path: "/dashboard/EmployeeList",
      },
    ],
  };

  const userRole = sessionData?.result.role.roleName;
  const menuItems = menuByRole[userRole] || [];
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: isOpen ? 220 : 60,
          background: "#1F2937",
          minHeight: "100vh",
          transition: "width 0.3s ease-in-out",
          overflow: "hidden",
          paddingTop: 20,
          borderRight: "1px solid #ddd",
        }}
      >
        <div className="site_logo">
          <button
            onClick={toggleSidebar}
            className=""
            style={{
              fontSize: "24px",
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            <i className="bi bi-list"></i>
          </button>
          {isOpen && (
            <div
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span
                style={{ color: "white", fontSize: "18px", fontWeight: "600" }}
              >
                SUPER ADMIN HUB
              </span>
            </div>
          )}
        </div>
        <div className="border"></div>

        {isOpen && (
          <div
            className="profile_div mt-2"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={profileImage} height="110px" width="110px" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Super Admin
                </p>
                <p
                  style={{
                    color: "rgb(120 158 212)",
                    fontSize: "16px",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  Nagaraju Boda
                </p>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              //   className={({ isActive }) =>
              //     isActive ? "sidebar-link active-link" : "sidebar-link"
              //   }
              className={({ isActive }) =>
                isActive ? "sidebar-link active-link" : "sidebar-link"
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                textDecoration: "none",
                justifyContent: isOpen ? "flex-start" : "center",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "#CBD5E1", fontSize: "20px" }}>
                {item.icon}
              </span>
              {isOpen && (
                <span style={{ color: "white", fontWeight: "500" }}>
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        style={{ flex: 1, backgroundColor: "#F1F5F9" }}
        className="renderdiv"
      >
        <div>
          <Header isOpen={isOpen} />
        </div>
        <main
          className={`childercomponents ${pageLoading ? "page-fade" : ""}`}
          //   className="childercomponents"
          style={{ width: isOpen ? "100%" : "100%" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
