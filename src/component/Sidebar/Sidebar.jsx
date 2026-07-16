import { memo } from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaMusic,
  FaSignInAlt,
  FaHeart,
  FaApple,
}from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo"><FaApple /> Music</h2>
      <NavLink to="/" className="nav-link">
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/search" className="nav-link">
        <FaSearch />
        <span>Search</span>
      </NavLink>

      <NavLink to="/new" className="nav-link">
        <FaMusic />
        <span>New</span>
      </NavLink>

      <NavLink to="/signin" className="sign-link">
        <FaSignInAlt />
        <span>Sign In</span>
      </NavLink>
    </div>
  );
};

export default memo(Sidebar);