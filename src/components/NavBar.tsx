import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaTools, FaFileAlt, FaEnvelope, FaIdBadge } from "react-icons/fa";
import "./Navbar.css";

import netflixLogo from "../images/JP Netflix Blue Logo_sz3125.png";
import blueImage from "../images/blue.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileImage = (location.state as any)?.profileImage || blueImage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/browse" className="navbar-logo" onClick={closeSidebar}>
            <img src={netflixLogo} alt="Jermaine Peguese" />
          </Link>

          <nav className="navbar-main" aria-label="Primary">
            <ul className="navbar-links">
              <li>
                <Link to="/browse" onClick={closeSidebar}>Home</Link>
              </li>
              <li>
                <Link to="/skills" onClick={closeSidebar}>Superpowers</Link>
              </li>
              <li>
                <Link to="/bio" onClick={closeSidebar}>Bio</Link>
              </li>
              <li>
                <Link to="/one-pager" onClick={closeSidebar}>One-Pager</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeSidebar}>Hire Me</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-right">
          <button
            type="button"
            className="icon-btn hamburger"
            aria-label="Open menu"
            aria-expanded={isSidebarOpen}
            onClick={toggleSidebar}
          >
            <span />
            <span />
            <span />
          </button>

          <button
            type="button"
            className="profile-btn"
            aria-label="Go to Home"
            onClick={() => {
              closeSidebar();
              navigate("/browse");
            }}
          >
            <img src={profileImage} alt="Profile" className="profile-icon" />
          </button>
        </div>
      </header>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`} aria-label="Mobile menu">
        <div className="sidebar-logo">
          <img src={netflixLogo} alt="Jermaine Peguese" />
        </div>

        <ul className="sidebar-links">
          <li>
            <Link to="/browse" onClick={closeSidebar}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeSidebar}>
              <FaTools /> Superpowers
            </Link>
          </li>
          <li>
            <Link to="/bio" onClick={closeSidebar}>
              <FaIdBadge /> Bio
            </Link>
          </li>
          <li>
            <Link to="/one-pager" onClick={closeSidebar}>
              <FaFileAlt /> One-Pager
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              <FaEnvelope /> Hire Me
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
