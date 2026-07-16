import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

const songs = [
    {
        id: 1,
        title: "Winning Speech",
        artist: "Karan Aujla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVlpKQOqMN4jYTeNipoBR_Es38nqjW4GASDbJTWxl_A&s=10",
        preview: "/songs/WinningSpeech.mp3",
    },
    {
        id: 2,
        title: "Softly",
        artist: "Karan Aujla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9QOuc7sPpM9o9BTs7_7NG_6Xk7b3rmZEH42CX34jhg&s=10",
        preview: "/songs/Softly.mp3",
    },
    {
        id: 3,
        title: "295",
        artist: "Sidhu Moose Wala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6P1e9XCxRVlf9SQO1ov98PfFtYqhQ9MO5mwOeP5W_w&s=10",
        preview: "/songs/295.mp3",
    },
    {
        id: 4,
        title: "Brown Munde",
        artist: "AP Dhillon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPbjc6bdnLV_VqyNwgh5ezjELHO7ysle_JRe12h1VnA&s=10",
        preview: "/songs/BrownMunde.mp3",
    },
    {
        id: 5,
        title: "Kesariya",
        artist: "Arijit Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4TbsVQ11vM9Xqeq49S9HoPXzDIpVHJAQLirpzb9obw&s=10",
        preview: "/songs/Kesariya.mp3",
    },
    {
        id: 6,
        title: "Apna Bana Le",
        artist: "Arijit Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrI2YxBLXjEqdrVVz1l4S_7xcZm0rI2ZbPCfMGKUAoQ&s=10",
        preview: "/songs/ApnaBanaLe.mp3",
    },
    {
        id: 7,
        title: "Heeriye",
        artist: "Jasleen Royal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRNvWmbUh7kkhTSYVgCzGtWju3dSIIOw13clrCYQFGQ&s=10",
        preview: "/songs/Heeriye.mp3",
    },
    {
        id: 8,
        title: "Satranga",
        artist: "Arijit Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0XZdsVszkvRxdivEtUDQZ34LKzxg6Cr9f3DB-H9P6w&s=10",
        preview: "/songs/Satranga.mp3",
    },
    {
        id: 9,
        title: "Gypsy Kali",
        artist: "Babbu Maan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThN_zEYYhedUaC57Tm5C2lvkzGZ_ddGJdPndyOZ8qXrw&s=10",
        preview: "/songs/GypsyKali.mp3",
    },
    {
        id: 10,
        title: "Farmaish",
        artist: "Laddi Chahal Ft. Parmish Verma",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3FmswiKbiGCCm_cpd8UH83sqCJ0Ias63b4nFi1aC-Q&s=10",
        preview: "/songs/Farmaish.mp3",
    },
    {
        id: 11,
        title: "Mittran Di Chhatri",
        artist: "Babbu Maan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDN968oVJ8F4KcOjvLnipmxjzqmCH4ZwdlnsUK6SUeeg&s=10",
        preview: "/songs/MittranDiChhatri.mp3",
    },
    {
        id: 12,
        title: "Blue Eyes",
        artist: "Yo YO Honey Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OYeVFRSAC0Nfjm8xZge-40maihEMIbA7nLplgtogEw&s  ",
        preview: "/songs/BlueEyes.mp3",
    },
]

const Search = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setCurrentSong, setPlaylist } = useOutletContext();
    const filteredSongs = songs.filter(
        (song) =>
            song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase())
    );
    const handleSearch = async () => {
        if (search.trim() === "") {
            setResults([]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`https://corsproxy.io/?https://api.deezer.com/search?q=${encodeURIComponent(search)}`);

            const data = await response.json();
            setResults(data.data || []);
        } catch (error) {
            console.log(error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-m">

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search your songs...."
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={handleSearch}/>

                <FaSearch className="search-icon" onClick={handleSearch} />
            </div>

            {search.trim() !== "" && (
                <section>
                    <h2>Your Results</h2>
                    <div className="search-results">
                        {filteredSongs.length > 0 ? (
                            filteredSongs.map((song) => (
                                <div
                                    className="result"
                                    key={song.id}
                                    onClick={() => {
                                        setPlaylist(filteredSongs);
                                        setCurrentSong(song);
                                    }}>
                                    <div className="result-card">
                                        <img src={song.image} alt={song.title} />
                                        <h3>{song.title}</h3>
                                        <p>{song.artist}</p>
                                    </div>
                                </div>
                            ))
                        ) : ( <h3>No songs found.</h3> )}
                    </div>
                </section>
            )}
            <section>
                <h2>Recently Search</h2>
                <br />
                <div className="song">
                    {songs.map((song) => (
                        <div
                            className="song-card"
                            key={song.id}
                            onClick={() => { setPlaylist(songs); setCurrentSong(song); }}>
                            <img src={song.image} alt={song.title} />
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Search;