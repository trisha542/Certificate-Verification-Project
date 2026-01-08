import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { 
      setAuth(true);
      navigate('/admin');
    } else {
      alert('Wrong Password!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="password" 
          placeholder="Enter Admin Password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: '10px', borderRadius: '5px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;