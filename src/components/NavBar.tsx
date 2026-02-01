import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaIdCard,
  FaTools,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import "./Navbar.css";

import netflixLogo from "../images/JP Netflix Blue Logo_sz3125.png";
import blueImage from "../images/blue.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileImage = location.state?.profileImage || blueImage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Only routes that exist right now
  const navLinks = [
    { label: "Home", path: "/browse", icon: <FaHome /> },
    { label: "One Pager", path: "/one-pager", icon: <FaFileAlt /> },
    { label: "Skills", path: "/skills", icon: <FaTools /> },
    { label: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/browse" className="navbar-logo" onClick={closeSidebar}>
            <img src={netflixLogo} alt="Jermaine Peguese" />
          </Link>

          <ul className="navbar-links">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <button
            type="button"
            className="hamburger"
            onClick={toggleSidebar}
            aria-label="Open menu"
            aria-expanded={isSidebarOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => navigate("/browse")}
          />
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar (mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Jermaine Peguese" />
        </div>

        <ul>
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link to={l.path} onClick={closeSidebar}>
                {l.icon} {l.label}
              </Link>
            </li>
          ))}

          {/* Optional: quick jump back to profile tiles */}
          <li>
            <Link to="/browse" onClick={closeSidebar}>
              <FaIdCard /> Profiles
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
