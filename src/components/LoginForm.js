import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleUserCreation = () => {
    setIsCreatingUser(!isCreatingUser);
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    try {
      const url = isCreatingUser
        ? 'http://localhost:8080/sem3_exam_war_exploded/api/signup' // Adjust the endpoint URL accordingly
        : 'http://localhost:8080/sem3_exam_war_exploded/api/login'; // Adjust the endpoint URL accordingly

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        if (isCreatingUser) {
          // Handle successful user creation
          console.log('User created successfully:', data);
        } else {
          // Handle successful login
          const { username, token } = data;
          console.log(`Logged in as ${username}. Token: ${token}`);
          setIsLoggedIn(true); // Set login status to true
        }
        // Reset form fields and error
        setUsername('');
        setPassword('');
        setError('');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Request error:', error);
      setError('Error occurred during the request');
    }
  };

  if (isLoggedIn) {
    // Render content for logged-in state
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  }

  // Render content for login/signup form
  return (
    <div>
      <h2>{isCreatingUser ? 'Create User' : 'Login'}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">{isCreatingUser ? 'Create User' : 'Login'}</button>
      </form>
      <p>
        {isCreatingUser ? 'Already have an account? ' : "Don't have an account? "}
        <button onClick={handleToggleUserCreation}>
          {isCreatingUser ? 'Login' : 'Create Account'}
        </button>
      </p>
    </div>
  );
};

export default Login;
