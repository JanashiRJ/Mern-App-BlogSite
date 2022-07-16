import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src="data:image/jpeg;base64,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" alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
