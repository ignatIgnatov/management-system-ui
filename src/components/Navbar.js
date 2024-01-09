import { Link } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const [isShown, setIsShown] = useState();
  const { user } = useContext(AuthContext);

  let messageCounter = localStorage.getItem("newMessages");

  useEffect(() => {
    if (messageCounter == 0 || messageCounter === null) {
      setIsShown(false);
    }
  });

  useEffect(() => {
    if (messageCounter > 0) {
      setIsShown(true);
    }
  });

  const userPanel = (
    <>
      <li>
        <Link to="/auth/logout">Logout</Link>
      </li>
      <li className="dropdown">
        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa-solid fa-gear"></i>
          <b className="caret"></b>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/user/my-profile">My profile</Link>
          </li>
        </ul>
      </li>
    </>
  );

  const adminPanel = (
    <>
      <li>
        <Link to="/auth/logout">Logout</Link>
      </li>
      <li className="dropdown">
        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
          Admin Panel <b className="caret"></b>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="/admin/usersList">All Users</Link>
          </li>
          <li>
            <Link to="/message/all">All Received Messages</Link>
          </li>
          <li>
            <Link to="/auth/register">Register User</Link>
          </li>
        </ul>
      </li>
      {isShown ? (
        <li
          onClick={() => {
            setIsShown(false);
            messageCounter = 0;
          }}
        >
          <Link to="/message/all">
            <i className="fa-solid fa-message text-danger message-icon"></i>
          </Link>
        </li>
      ) : (
        ""
      )}
    </>
  );

  let isAdmin = false;
  //TODO:
  // if (user.token) {
  //   if (user.authorities[0].authority === "ADMIN") {
  //     isAdmin = true;
  //   }
  // }

  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top headroom">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <Link
              className="navbar-brand"
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              {/* <img src="assets/images/logo-design-49589" style={{width: "50px"}} alt="Logo" /> */}
              LOGO HERE
            </Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav pull-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              {user.token ? (
                isAdmin ? (
                  adminPanel
                ) : (
                  userPanel
                )
              ) : (
                <li>
                  <Link to="/auth/login">SIGN IN / SIGN UP</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
