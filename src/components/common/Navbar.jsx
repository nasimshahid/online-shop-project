import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(0);
  const isLoggedIn = false; // Replace with Redux state
  const userRole = null; // 'user', 'seller', 'admin', 'delivery'

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold" style={{ fontSize: "1.8rem", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          🛍️ StepToShop
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Search Bar */}
          <div className="mx-auto d-none d-lg-flex" style={{ width: "400px" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 rounded-start"
                placeholder="🔍 Search products, brands, categories..."
                style={{ padding: "10px 15px", backgroundColor: "#f5f5f5" }}
              />
              <button className="btn" style={{ backgroundColor: "#667eea", color: "white", cursor: "pointer" }} type="button">
                Search
              </button>
            </div>
          </div>

          {/* Right Menu */}
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {/* Search Toggle Mobile */}
            <li className="nav-item d-lg-none">
              <button className="btn btn-sm" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                🔍
              </button>
            </li>

            {/* Notifications */}
            <li className="nav-item">
              <button className="btn btn-light position-relative">
                🔔
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#ff6b6b", fontSize: "0.7rem" }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link to="/user/cart" className="btn position-relative" style={{ backgroundColor: "#f0f0f0" }}>
                🛒 Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#ff6b6b" }}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            {/* User Menu */}
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <button className="btn dropdown-toggle" data-bs-toggle="dropdown" style={{ color: "#667eea" }}>
                  👤 My Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/user/orders">My Orders</Link></li>
                  <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  {userRole === "seller" && <li><Link className="dropdown-item" to="/seller/dashboard">Seller Dashboard</Link></li>}
                  {userRole === "admin" && <li><Link className="dropdown-item" to="/admin/dashboard">Admin Panel</Link></li>}
                  {userRole === "delivery" && <li><Link className="dropdown-item" to="/delivery/dashboard">Delivery Dashboard</Link></li>}
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#logout">Logout</a></li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-primary btn-sm">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="btn" style={{ backgroundColor: "#667eea", color: "white" }}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* More Options */}
            <li className="nav-item dropdown">
              <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
                ⋮
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                <li><a className="dropdown-item" href="#sell">📦 Become a Seller</a></li>
                <li><a className="dropdown-item" href="#delivery">🚚 Become a Delivery Partner</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#help">❓ Help & Support</a></li>
                <li><a className="dropdown-item" href="#contact">📧 Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="container-fluid d-lg-none p-3 border-top">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 rounded-start"
              placeholder="🔍 Search..."
              style={{ backgroundColor: "#f5f5f5" }}
            />
            <button className="btn" style={{ backgroundColor: "#667eea", color: "white" }} type="button">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;