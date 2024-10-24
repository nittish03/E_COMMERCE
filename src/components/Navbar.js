import React from "react";

import sicon from "./sicon.png";
import { Link,NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Navbar() {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    const loading = toast.loading("Logging out...");
    try {
    
      await axios.post("https://server-mp3l.onrender.com/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.dismiss(loading);
      toast.success("Logged Out Successfully ");
      navigate("/");
    } catch (error) {
      toast.dismiss(loading);
      console.log(error);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid ">
        <Link className="navbar-brand text-white custom-brand" to="/home">
          ShopSmart
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/jewelery"
              >
                Jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/electronics"
              >
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/men-clothing"
              >
                Men's Clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white custom-nav-link"
                aria-current="page"
                to="/women-clothing"
              >
                Women's Clothing
              </NavLink>
            </li>


          </ul>
          <form className="d-flex custom-search-form" role="search">
            <input
              className="form-control me-2 custom-search-input"
              type="search"
              placeholder="Search ShopSmart"
              aria-label="Search"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn custom-search-btn"
              type="submit"
            >
              <img src={sicon} alt="Search" />
            </button>
          </form>
          {loggedIn?
          <>
                    <Link type="button" to="/" onClick={handleLogout} className="btn custom-login-btn ms-2">
            Log Out
          </Link>
          </>
          :
          <>          
          <Link type="button" to="/" className="btn custom-login-btn ms-2">
            Sign in
          </Link>
          </>}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;