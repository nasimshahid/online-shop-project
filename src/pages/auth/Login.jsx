import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import './Auth.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  useEffect(() => {
  window.onbeforeunload = () => {
    console.log("REAL PAGE RELOAD happening");
  };
}, []);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const loading = useSelector(state => state.auth.loading);
  const authError = useSelector(state => state.auth.error);
const isAuthenticated = useSelector(state => state);
console.log("Login component - isAuthenticated:", isAuthenticated);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  setError("");

  if (!formData.email || !formData.password) {
    setError("Please enter email and password");
    return;
  }

  try {

    const response = await dispatch(
      loginUser(formData.email, formData.password)
    );

    if (response?.message?.includes("Email not verified")) {

      navigate("/verify-email", {
        state: { email: formData.email },
      });

      return;
    }

    // Navigate based on user role
    const userRole = response?.user?.userType?.role;
    
    switch(userRole) {
      case 'admin':
        navigate("/admin/dashboard", { replace: true });
        break;
      case 'seller':
        navigate("/seller/dashboard", { replace: true });
        break;
      case 'delivery':
        navigate("/delivery/dashboard", { replace: true });
        break;
      case 'user':
      default:
        navigate("/user/dashboard", { replace: true });
        break;
    }

  } catch (err) {

    setError(err.message || "Login failed");

  }
};

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome Back!</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              Login to your account to continue shopping
            </p>
            <div className="trust-badges">
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🔒</span>
                <span>Secure Login</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>⚡</span>
                <span>Quick Access</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🎁</span>
                <span>Exclusive Deals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form">
            {/* Header */}
            <div className="auth-header">
              <h2 style={{ marginBottom: '0.5rem' }}>Login</h2>
              <p style={{ color: '#999', marginBottom: '2rem' }}>
                Enter your credentials to access your account
              </p>
            </div>

            {/* Form Fields */}
            <form className="login-form" onSubmit={handleSubmit}>
              {/* Error Alert */}
              {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {error}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setError('')}
                  ></button>
                </div>
              )}

              {/* Email Field */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label fw-600">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label fw-600">
                  Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-login w-100 py-3 fw-600 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Logging in...
                  </>
                ) : (
                  'Login to Account'
                )}
              </button>

              {/* Divider */}
              <div className="divider mb-3">
                <span>OR</span>
              </div>

              {/* Social Login */}
              <div className="social-login">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary w-100 py-2 mb-2" 
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Google login coming soon');
                  }}
                >
                  <span>🔵</span> Continue with Google
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary w-100 py-2" 
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Facebook login coming soon');
                  }}
                >
                  <span>👤</span> Continue with Facebook
                </button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="signup-link">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







