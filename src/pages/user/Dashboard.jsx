import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserDashboard() {
  const user = useSelector(state => state.auth.user)

  return (
    <div className="user-dashboard">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Welcome Section */}
            <div className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <h1 className="card-title mb-2">
                  Welcome back, {user?.name || 'User'}! 👋
                </h1>
                <p className="card-text text-muted mb-0">
                  Manage your orders, cart, and account settings from here.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="row g-3">
              {/* My Cart */}
              <div className="col-md-6">
                <Link to="/user/cart" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-shadow">
                    <div className="card-body text-center p-4">
                      <div className="display-4 mb-3">🛒</div>
                      <h5 className="card-title">My Cart</h5>
                      <p className="card-text text-muted small">
                        View and manage your shopping cart
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* My Orders */}
              <div className="col-md-6">
                <Link to="/user/orders" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-shadow">
                    <div className="card-body text-center p-4">
                      <div className="display-4 mb-3">📦</div>
                      <h5 className="card-title">My Orders</h5>
                      <p className="card-text text-muted small">
                        Track your orders and delivery status
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Account Info */}
            <div className="card mt-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Account Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <p className="text-muted small mb-1">Email</p>
                    <p className="fw-600">{user?.email}</p>
                  </div>
                  <div className="col-md-6 mb-2">
                    <p className="text-muted small mb-1">Mobile</p>
                    <p className="fw-600">{user?.mobile || 'Not provided'}</p>
                  </div>
                  <div className="col-12">
                    <p className="text-muted small mb-1">Address</p>
                    <p className="fw-600">{user?.address || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-shadow {
          transition: box-shadow 0.3s ease;
          cursor: pointer;
        }
        .hover-shadow:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  )
}
