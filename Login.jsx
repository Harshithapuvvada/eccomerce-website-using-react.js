import React from 'react';
import '../styles/Login.module.css';

const Login = () => {
  return (
    <div className="form-container">
      <form>
        <div>
            <h1>.</h1>
            <h1>.</h1>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
