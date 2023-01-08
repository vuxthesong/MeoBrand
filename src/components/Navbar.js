import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.cart);
  console.log(state);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3 px-4" to="/">
          LA COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link  fs-5 " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2 ">
              <NavLink className="nav-link  fs-5" to="/products">
                Product
              </NavLink>
            </li>
            <li className="nav-item mx-2 ">
              <NavLink className="nav-link  fs-5" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2 ">
              <NavLink className="nav-link  fs-5" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex mx-3">
            <NavLink
              className="btn btn-outline-dark mx-1 fs-5 "
              to="/cart"
              type="submit"
            >
              <i className="fa fa-shopping-cart sign-in"></i> Cart (
              {state.length})
            </NavLink>
            <NavLink
              className="btn btn-outline-dark mx-1 fs-5"
              to="/login"
              type="submit"
            >
              <i className="fa fa-sign-in"></i> Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
