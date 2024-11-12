import React, { useState } from "react";
import '../CSS/LoginSignin';

function LoginSignin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setUserData({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      alert('Sign Up Successful! Please Log in.');
      setIsSignUp(false);
    } else {
      alert('Passwords do not match');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (formData.email === userData.email && formData.password === userData.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div>
          {isSignUp ? (
            // Sign Up Form
            <form onSubmit={handleSignUpSubmit}>
              <h1>Sign Up</h1>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png"
                  alt="toggle password visibility"
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Sign Up</button>
              <p onClick={() => setIsSignUp(false)}>Already have an account? Log in</p>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png"
                  alt="toggle password visibility"
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <button type="submit">Log In</button>
              <p onClick={() => setIsSignUp(true)}>Don't have an account? Sign up</p>
            </form>
          )}
        </div>
      ) : (
        <div>
          <h1>Welcome, {userData.fullName || "User"}!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default LoginSignin;
