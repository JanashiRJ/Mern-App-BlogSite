import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="background">
    <div className="login">
      <img src="https://img.icons8.com/ios-filled/2x/user-male-circle.png"
       className="imageuser" >
       </img>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username
        <input
          type="text"
          className="loginInput1"
          placeholder="Enter your username..."
          ref={userRef}
        />
        </label>
        <label>Password
        <input
          type="password"
          className="loginInput2"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        </label>
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
    </div>
  );
}
