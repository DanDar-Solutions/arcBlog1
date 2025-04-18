import { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';
import './Account.css';

function AccountModule() {
  // Check if user is logged in from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  
  // Handle login
  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };
  
  // Handle signup
  const handleSignup = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };
  
  // Handle logout
  const handleLogout = () => {
    setUser(null);
  };
  
  // Toggle login/signup modal
  const toggleAuthModal = () => {
    if (!user) {
      if (authMode === 'login') {
        setShowLogin(!showLogin);
        setShowSignup(false);
      } else {
        setShowSignup(!showSignup);
        setShowLogin(false);
      }
    }
  };
  
  // Switch between login and signup
  const switchToSignup = () => {
    setAuthMode('signup');
    setShowLogin(false);
    setShowSignup(true);
  };
  
  const switchToLogin = () => {
    setAuthMode('login');
    setShowSignup(false);
    setShowLogin(true);
  };
  
  // Close auth modal
  const closeAuthModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };
  
  return (
    <div className="account-module">
      {user ? (
        // User is logged in - show profile
        <UserProfile 
          user={user} 
          onLogout={handleLogout} 
        />
      ) : (
        // User is not logged in - show login/signup button
        <div className="auth-buttons">
          <button 
            className="login-button"
            onClick={() => {
              setAuthMode('login');
              toggleAuthModal();
            }}
          >
            Login
          </button>
        </div>
      )}
      
      {/* Login modal */}
      {showLogin && !user && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <Login 
              onLogin={handleLogin}
              onSwitchToSignup={switchToSignup}
              onClose={closeAuthModal}
            />
          </div>
        </div>
      )}
      
      {/* Signup modal */}
      {showSignup && !user && (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <Signup
              onSignup={handleSignup}
              onSwitchToLogin={switchToLogin}
              onClose={closeAuthModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountModule; 