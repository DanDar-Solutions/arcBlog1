import { useState } from 'react';
import './Account.css';

function Login({ onLogin, onSwitchToSignup, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // For demo, check a hardcoded user
      // In real app, this would be an API call to your backend
      if (username === 'admin' && password === 'password') {
        // Save user to localStorage (simplified auth)
        const user = {
          id: 1,
          username: username,
          name: 'Admin User',
          isLoggedIn: true
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        
        // Call login callback
        onLogin(user);
      } else {
        setError('Invalid username or password');
      }
      
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="login-form">
      <h3>Login</h3>
      
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
            type="password"
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button 
          type="submit" 
          className="form-button primary-button"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="form-footer">
        <p>
          Don't have an account?{' '}
          <button 
            className="text-button"
            onClick={onSwitchToSignup}
          >
            Sign up
          </button>
        </p>
      </div>
      
      <button className="close-button" onClick={onClose}>×</button>
    </div>
  );
}

export default Login; 