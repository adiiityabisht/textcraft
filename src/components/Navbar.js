/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button> 
          </form>*/}
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.changeTheme("red")}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => props.changeTheme("yellow")}
            >
              Yellow
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => props.changeTheme("green")}
            >
              Green
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => props.changeTheme("blue")}
            >
              Blue
            </button>
          </div>
          <div
            className="form-check form-switch mx-2"
            onClick={props.toggleMode}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              for="flexSwitchCheckDefault"
            >
              make it dark?
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
};