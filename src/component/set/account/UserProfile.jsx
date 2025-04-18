import { useState } from 'react';
import './Account.css';

function UserProfile({ user, onLogout, onClose }) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem('user');
    
    // Call logout callback
    onLogout();
  };
  
  return (
    <div className="user-profile">
      <div className="profile-header" onClick={toggleDropdown}>
        <div className="avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <span className="username">{user.username}</span>
      </div>
      
      {showDropdown && (
        <div className="profile-dropdown">
          <div className="dropdown-header">
            <h4>Logged in as</h4>
            <p className="user-info">{user.username}</p>
            {user.email && <p className="user-email">{user.email}</p>}
          </div>
          
          <div className="dropdown-actions">
            <button className="dropdown-item">My Profile</button>
            <button className="dropdown-item">Settings</button>
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile; 