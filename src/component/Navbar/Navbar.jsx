import { memo, useEffect, useState } from "react";
import { FaApple, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoPhoto.jpeg";

const Navbar = ({username, setUsername}) => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      setUsername(localStorage.getItem("username") || "");
    };

    getUser();

    window.addEventListener("storage", getUser);

    return () => window.removeEventListener("storage", getUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    setUsername("");
    setShowMenu(false);
    window.location.reload();

    navigate("/signin");
};

  return (
    <div className="navbar">

      <div className="user-info">

        <div
          className="user-dropdown"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaUserCircle className="user-icon" />

          <span>{username}</span>

          <span className="arrow">▼</span>
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

      </div>

      <div>
        <h2><img src={logo} /> BEATvybe</h2>
        <p>Premium Music Experience.</p>
      </div>

    </div>
  );
};

export default memo(Navbar);  