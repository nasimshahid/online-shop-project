import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import './Auth.css';

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: location.state?.email || '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return {
      isValid: hasMinLength && hasNumber && hasSpecialChar && hasUpperCase && hasLowerCase,
      hasMinLength,
      hasNumber,
      hasSpecialChar,
      hasUpperCase,
      hasLowerCase
    };
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation checks
    if (!formData.email) {
      setError('Email not found. Please start from forgot password page.');
      return;
    }

    if (!formData.otp) {
      setError('Please enter the verification code');
      return;
    }

    if (formData.otp.length !== 6) {
      setError('Verification code must be 6 digits');
      return;
    }

    const passwordValidation = validatePassword(formData.newPassword);
    if (!passwordValidation.isValid) {
      setError('Password does not meet the requirements');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      
      const response = await authService.resetPassword({
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      });

      setSuccess('Password reset successfully! Redirecting to login...');
      
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to reset password. Please try again.');
      console.error('Reset password error:', err);
    } finally {
      setLoading(false);
    }
  };

  const passwordValidation = validatePassword(formData.newPassword);

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Create New Password</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              Set a new secure password for your account
            </p>
            <div className="trust-badges">
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🔒</span>
                <span>Secure</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>⚡</span>
                <span>Quick Reset</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>✨</span>
                <span>All Set</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form">
            {/* Header */}
            <div className="auth-header">
              <h2 style={{ marginBottom: '0.5rem' }}>Reset Password</h2>
              <p style={{ color: '#999', marginBottom: '2rem' }}>
                Enter your email, verification code, and new password
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit}>
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

              {/* OTP Field */}
              <div className="form-group mb-3">
                <label htmlFor="otp" className="form-label fw-600">
                  Verification Code
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="otp"
                  name="otp"
                  placeholder="Enter 6-digit code"
                  maxLength="6"
                  value={formData.otp}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <small style={{ color: '#999', marginTop: '0.5rem', display: 'block' }}>
                  Check your email for the verification code
                </small>
              </div>

              {/* New Password Field */}
              <div className="form-group mb-3">
                <label htmlFor="newPassword" className="form-label fw-600">
                  New Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control form-control-lg"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={formData.newPassword}
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

              {/* Confirm Password Field */}
              <div className="form-group mb-4">
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
                  required
                />
              </div>

              {/* Password Requirements */}
              <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: '#333' }}>Password must contain:</p>
                <ul style={{ fontSize: '0.8rem', color: '#666', marginBottom: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ color: passwordValidation.hasMinLength ? '#28a745' : '#999' }}>
                    {passwordValidation.hasMinLength ? '✓' : '○'} At least 8 characters
                  </li>
                  <li style={{ color: passwordValidation.hasNumber ? '#28a745' : '#999' }}>
                    {passwordValidation.hasNumber ? '✓' : '○'} At least one number
                  </li>
                  <li style={{ color: passwordValidation.hasSpecialChar ? '#28a745' : '#999' }}>
                    {passwordValidation.hasSpecialChar ? '✓' : '○'} At least one special character (!@#$%^&*)
                  </li>
                  <li style={{ color: passwordValidation.hasUpperCase ? '#28a745' : '#999' }}>
                    {passwordValidation.hasUpperCase ? '✓' : '○'} Uppercase letter
                  </li>
                  <li style={{ color: passwordValidation.hasLowerCase ? '#28a745' : '#999' }}>
                    {passwordValidation.hasLowerCase ? '✓' : '○'} Lowercase letter
                  </li>
                </ul>
              </div>

              {/* Reset Button */}
              <button
                type="submit"
                className="btn btn-login w-100 py-3 fw-600 mb-3"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Resetting...
                  </>
                ) : (
                  'Reset Password'
                )}
              </button>

              {/* Back to Login */}
              <div className="text-center">
                <Link to="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>
                  ← Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
