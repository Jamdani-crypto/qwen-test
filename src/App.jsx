import React, { useState } from 'react';
import { FaApple, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import './App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="logo">
            <FaApple className="logo-icon" />
            <h1>NutriTrack</h1>
          </div>
          <p className="subtitle">Track calories. Hit goals.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or continue</span>
        </div>

        {/* Google Login */}
        <button onClick={handleGoogleLogin} className="btn-google">
          <FaGoogle className="google-icon" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="footer-text">
          New here? <a href="#" className="link">Create account</a>
        </p>
      </div>
    </div>
  );
}

export default App;
