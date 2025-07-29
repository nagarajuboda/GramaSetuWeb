import { FaUsers, FaProjectDiagram, FaBell, FaTools } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiMessageDetail } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import "../../assets/styles/SuperAdmin.css";

export default function SuperAdminDashboard() {
  return (
    <div className="superadmin-container">
      <div className="dashboard-grid">
        <div className="card">
          <MdHome size={30} />
          <h3>124</h3>
          <p>Registered Villages</p>
        </div>
        <div className="card">
          <FaUsers size={30} />
          <h3>5.2K</h3>
          <p>Total Users</p>
        </div>
        <div className="card">
          <HiOutlineClipboardList size={30} />
          <h3>342</h3>
          <p>Projects</p>
        </div>
        <div className="card">
          <AiFillThunderbolt size={30} />
          <h3>86</h3>
          <p>Issues</p>
        </div>

        <div className="card">
          <IoLocationSharp size={30} />
          <h4>Village Insights</h4>
          <p>View and filter data for individual villages</p>
        </div>
        <div className="card">
          <RiUserSettingsLine size={30} />
          <h4>User Management</h4>
          <p>Manage users, roles, and permissions</p>
        </div>
        <div className="card">
          <HiOutlineClipboardList size={30} />
          <h4>Project Management</h4>
          <p>Track progress and status of projects</p>
        </div>
        <div className="card">
          <BiMessageDetail size={30} />
          <h4>Complaints & Feedback</h4>
          <p>Monitor and address user complaints</p>
        </div>
        <div className="card">
          <FaBell size={30} />
          <h4>Notifications & Alerts</h4>
          <p>Manage notifications</p>
        </div>
        <div className="card">
          <FaTools size={30} />
          <h4>Admin Tools</h4>
          <p>Access system settings and maintenance</p>
        </div>
      </div>
    </div>
  );
}
