import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import './Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    address: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.mobile.trim()) {
      setError('Mobile number is required');
      return;
    }
    if (!formData.address.trim()) {
      setError('Address is required');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setError('You must agree to terms and conditions');
      return;
    }

    try {
      setLoading(true);
      
      const response = await authService.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
        address: formData.address
      });
      setSuccess('Signup successful! Redirecting to email verification...');
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/verify-email', { state: { email: formData.email } });
      }, 2000);
    } catch (err) {
      // Handle "User already exists" error
      if (err.message === 'User already exists' || err.message?.includes('already exists')) {
        setError('This email is already registered. Please login or use a different email.');
      } else {
        setError(err.message || 'Signup failed. Please try again.');
      }
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper auth-wrapper-signup">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Join Us Today!</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              Create an account and start shopping with amazing deals
            </p>
            <div className="trust-badges">
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>✨</span>
                <span>Easy Setup</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🎉</span>
                <span>Welcome Bonus</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🚀</span>
                <span>Start Shopping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form">
            {/* Header */}
            <div className="auth-header">
              <h2 style={{ marginBottom: '0.5rem' }}>Create Account</h2>
              <p style={{ color: '#999', marginBottom: '2rem' }}>
                Fill in your details to get started
              </p>
            </div>

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

            {/* Success Alert */}
            {success && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {success}
              </div>
            )}

            {/* Form Fields */}
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label fw-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

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
                />
              </div>

              {/* Mobile Number */}
              <div className="form-group mb-3">
                <label htmlFor="mobile" className="form-label fw-600">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="mobile"
                  name="mobile"
                  placeholder="03001234567"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Address */}
              <div className="form-group mb-3">
                <label htmlFor="address" className="form-label fw-600">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="address"
                  name="address"
                  placeholder="Enter your delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={loading}
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
                    placeholder="Enter a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                <small style={{ color: '#999', marginTop: '0.5rem', display: 'block' }}>
                  At least 8 characters with numbers and special characters
                </small>
              </div>

              {/* Confirm Password */}
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-600">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              {/* Terms & Conditions */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={loading}
                />
                <label className="form-check-label fw-500" htmlFor="agreeTerms">
                  I agree to the{' '}
                  <Link to="/terms" style={{ color: '#667eea' }}>
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" style={{ color: '#667eea' }}>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="btn btn-signup w-100 py-3 fw-600 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>

              {/* Divider */}
              <div className="divider mb-3">
                <span>OR</span>
              </div>

              {/* Social Sign Up */}
              <div className="social-login">
                <button type="button" className="btn btn-outline-secondary w-100 py-2 mb-2" disabled={loading}>
                  <span>🔵</span> Sign up with Google
                </button>
                <button type="button" className="btn btn-outline-secondary w-100 py-2" disabled={loading}>
                  <span>👤</span> Sign up with Facebook
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="auth-footer">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="login-link">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

