import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", color: "white", paddingTop: "50px", paddingBottom: "20px" }}>
      <div className="container footer-content">
        <div className="row mb-5">
          {/* About */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#667eea", fontSize: "1.2rem" }}>🛍️ StepToShop</h6>
            <p className="text-muted small mb-3">Your trusted online marketplace for quality products and exceptional service.</p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-light">f</a>
              <a href="#" className="btn btn-sm btn-outline-light">𝕏</a>
              <a href="#" className="btn btn-sm btn-outline-light">📷</a>
              <a href="#" className="btn btn-sm btn-outline-light">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/public/product-listing" className="text-muted text-decoration-none">Products</Link></li>
              <li className="mb-2"><a href="#about" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#contact" className="text-muted text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h6 className="fw-bold mb-3 text-white">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Track Order</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Returns & Exchanges</a></li>
              <li className="mb-2"><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h6 className="fw-bold mb-3 text-white">Subscribe</h6>
            <p className="text-muted small mb-3">Get exclusive offers & updates</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn" style={{ background: "#667eea", color: "white", border: "none" }}>→</button>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <small className="text-muted">© 2024 StepToShop. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="text-muted">
              <a href="#" className="text-muted text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer