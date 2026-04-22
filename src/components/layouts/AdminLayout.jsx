import React from "react";
import "./admindashboard.css";
import { useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="admin-layout">

      {/* Sidebar */}

      <aside className="admin-sidebar">

        <div className="logo">
          Admin Panel
        </div>

        <ul className="menu">

          <li className="active">Dashboard</li>

          <li onClick={() => navigate('/admin/users')}>Users</li>

          <li>Products</li>
          <li onClick={() => navigate('/admin/categories')}>Add Categories</li>
                    <li onClick={() => navigate('/admin/categoriesList')}>View Categories</li>

          <li>Orders</li>

          <li>Settings</li>

        </ul>

      </aside>


      {/* Main Section */}

      <div className="admin-main">

        {/* Header */}

        <header className="admin-header">

          <h4>Welcome Shahid 👋</h4>

          <div className="profile">

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
            />

          </div>

        </header>


        {/* Content */}

        <div className="admin-content">

          {children}

        </div>

      </div>

    </div>
  );
}