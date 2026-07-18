import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Player from "./component/Player/Player";
import Footer from "./component/Footer/Footer";
import ScrollTop from './ScrollTop';

const Layout = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [playlist, setPlaylist] = useState([]);

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const authPage = location.pathname === "/signin" || location.pathname === "/signup";

    useEffect(() => {
        const savedUser = localStorage.getItem("username");
        if (savedUser) {
            setUsername(savedUser);
        }
    }, []);

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return (
        <>
            <ScrollTop />

            <Navbar
                username={username}
                setUsername={setUsername}
                isLoggedIn={isLoggedIn}
            />

            <Sidebar />

            <div className="main-content">
                <Outlet
                    context={{
                        currentSong,
                        setCurrentSong,
                        playlist,
                        setPlaylist,
                        username,
                        setUsername,
                        isLoggedIn,
                    }}
                />
            </div>

            {/* Login Overlay */}
            {!isLoggedIn && !authPage && (
                <div className="login-overlay">
                    <div className="login-card">

                        <h1>🔒 Please Login First</h1>
                        <p>Login to access Apple Music.</p>

                        <button onClick={() => navigate("/signin")}>
                            Login
                        </button>

                        <button
                            className="signup-btn"
                            onClick={() => navigate("/signup")}
                        >
                            Create Account
                        </button>

                    </div>
                </div>
            )}

            {currentSong && (
                <Player
                    song={currentSong}
                    playlist={playlist}
                    setCurrentSong={setCurrentSong}
                />
            )}

            <Footer />
        </>
    );
};
export default Layout;