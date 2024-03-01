import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    if (username === 'admin' && password === 'admin') {
      // Redirect to Dashboard
      setRedirectToDashboard(true);
    } else {
      // Display error message
      setError('Invalid username or password');
    }
  };

  if (redirectToDashboard) {
    return <Navigate to="/AttendancePage" replace />;
  }

  return (
    <div className='login-cointaner'>
      <h2 id='h2'>Login Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className='heading1'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
