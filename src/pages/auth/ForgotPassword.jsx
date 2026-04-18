import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import './Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      await authService.forgotPassword(email);
      setSubmitted(true);
        navigate('/reset-password', { state: { email: email } });
    } catch (err) {
      setError(err.message || 'Failed to send reset link. Please try again.');
      console.error('Forgot password error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Reset Your Password</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
              Don't worry! We'll help you recover your account
            </p>
            <div className="trust-badges">
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>🔐</span>
                <span>100% Secure</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>⚡</span>
                <span>Quick Process</span>
              </div>
              <div className="badge-item">
                <span style={{ fontSize: '2rem' }}>✅</span>
                <span>Auto-Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-container">
          <div className="auth-form">
            {/* Header */}
            <div className="auth-header">
              <h2 style={{ marginBottom: '0.5rem' }}>Forgot Password?</h2>
              <p style={{ color: '#999', marginBottom: '2rem' }}>
                Enter your email address and we'll send you a reset link
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="forgot-form">
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
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label fw-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={loading}
                    required
                  />
                  <small style={{ color: '#999', marginTop: '0.5rem', display: 'block' }}>
                    We'll send a password reset link to this email
                  </small>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-login w-100 py-3 fw-600 mb-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>

                {/* Back to Login */}
                <div className="text-center">
                  <Link to="/login" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>
                    ← Back to Login
                  </Link>
                </div>
              </form>
            ) : (
              <div className="success-message text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Check Your Email!</h3>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                  We've sent a password reset OTP to <strong>{email}</strong>
                </p>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                  }}
                  className="btn btn-outline-primary w-100 py-2 mb-2"
                >
                  Try Another Email
                </button>
                <Link to="/login" className="btn btn-login w-100 py-2">
                  Back to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
