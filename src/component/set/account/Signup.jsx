import { useState } from 'react';
import './Account.css';

function Signup({ onSignup, onSwitchToLogin, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password || !confirmPassword || !email) {
      setError('All fields are required');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // For demo, just create a new user
      // In real app, this would be an API call to your backend
      const user = {
        id: Math.floor(Math.random() * 1000),
        username: username,
        email: email,
        isLoggedIn: true
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      
      // Call signup callback
      onSignup(user);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="signup-form">
      <h3>Create Account</h3>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <button 
          type="submit" 
          className="form-button primary-button"
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          Already have an account?{' '}
          <button 
            className="text-button"
            onClick={onSwitchToLogin}
          >
            Login
          </button>
        </p>
      </div>
      
      <button className="close-button" onClick={onClose}>×</button>
    </div>
  );
}

export default Signup; 