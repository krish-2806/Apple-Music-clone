import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h2><FaApple /> Music</h2>
        <p>
          Stream millions of songs, discover trending artists, and enjoy
          an immersive music experience anywhere, anytime.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Browse</h3>
          <NavLink to="/" className="browse">
            Home
          </NavLink>

          <NavLink to="/search" className="browse">
            Search
          </NavLink>

          <NavLink to="/new" className="browse">
            New
          </NavLink>

          <NavLink to="/signin" className="browse">
            Sign In
          </NavLink>
        </div>

        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Apple Music Clone. Designed & Developed by Krrish.</p>
      </div>

    </footer>
  );
};

export default Footer;