import { memo, useEffect, useState } from "react";
import { FaApple, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUser = () => {
      setUsername(localStorage.getItem("username") || "");
    };
    getUser();
    window.addEventListener("storage", getUser);
    return () => window.removeEventListener("storage", getUser);
  }, []);

  return (
    <div className="navbar">
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span>{username}</span>
      </div>

      <div>
        <h2><FaApple /> Music</h2>
        <p>Premium Music Experience.</p>
      </div>
    </div>
  );
};
export default memo(Navbar);