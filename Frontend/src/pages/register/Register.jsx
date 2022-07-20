import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="background">
    <div className="register">
    <img src="https://img.icons8.com/ios-filled/2x/user-male-circle.png"
       className="imageuser" >
       </img>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username
        <input
          type="text"
          className="registerInput1"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        </label>
        <label>Email
        <input
          type="text"
          className="registerInput2"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label>Password
        <input
          type="password"
          className="registerInput3"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
    </div>
  );
}
