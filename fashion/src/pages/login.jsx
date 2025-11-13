import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">

      <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">LOGIN</button>
      </form>

        <p className="signup-text">
          Not registered? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;