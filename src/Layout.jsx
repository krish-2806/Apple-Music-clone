import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Player from "./component/Player/Player";
import Footer from "./component/Footer/Footer";
import ScrollTop from './ScrollTop';

const Layout = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    return (
        <>
            <ScrollTop />
            <Navbar />
            <Sidebar />
            <div className='main-content'>
                <Outlet
                    context={{ currentSong, setCurrentSong, playlist, setPlaylist }} />
            </div>
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