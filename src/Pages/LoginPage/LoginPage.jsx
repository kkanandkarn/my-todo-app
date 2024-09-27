import React, { useState } from "react";
import LoginImage from "../../assets/login-concept-illustration_114360-739.png";
import "./LoginPage.css";
import { FaLock } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // when we call a function inside any function then it is known as collback function
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const togglePassword = () => {
    setVisible(!visible);
  };

  const handleSubmit = () => {
    if (username.trim() === "") {
      toast.error("Username is required");
      return;
    }
    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    }

    if (username === "priyanka@gmail.com" && password === "priyanka") {
      toast.success("Login success !");
    } else {
      toast.error("Invalid crendentials");
    }
  };

  return (
    <div className="main-container">
      <Toaster />
      <div className="left-container">
        <img src={LoginImage} alt="Login Page" />
      </div>
      <div className="right-container">
        <div className="lock-icon">
          <FaLock size={25} />
        </div>
        <h1 className="header-text"> Log In </h1>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="input-box"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container2">
          <label>Password</label>
          <input
            type={visible ? "text" : "password"}
            placeholder="Enter password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="eye-icon" onClick={togglePassword}>
            {visible ? <IoEye size={25} /> : <IoMdEyeOff size={25} />}
          </div>
        </div>

        <div className="login-button" onClick={handleSubmit}>
          <CiLogin size={25} />
          Login
        </div>
        <div className="bottom-text">
          Don't have an account ?{" "}
          <span onClick={() => navigate("/register")}>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
