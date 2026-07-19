import './New.css';
import { useOutletContext } from "react-router-dom";

const newAlbums = [
    {
        id: 1,
        title: "Moosetape",
        artist: "Sidhu Moose Wala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwpmUUOyKsNFB7z6jUaSv_qHQUNo8D0VPwQlUcbyQQA&s=10"
    },
    {
        id: 2,
        title: "Making Memories",
        artist: "Karan Aujla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqQp2gAm0M3ux1F64rtz0ToLV25torBrIB9vsWmxNPQ&s=10"
    },
    {
        id: 3,
        title: "Hidden Gems",
        artist: "AP Dhillon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2z0ueCIcZql9DkQaJAp7v7h7kXb_xPWVqlRhLTXWKw&s=10"
    },
    {
        id: 4,
        title: "Aashiqui 2",
        artist: "Arijit Singh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo4ke281LbJt-Hxpqxp-Ng83RYYrsicTImaMiBYdLsA&s=10"
    },
    {
        id: 5,
        title: "After Hours",
        artist: "The Weeknd",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYod_yWY6NVdi_XGBJrGXYgyCRGRyYCqxe_Pm4pAYFw&s=10"
    }
];
const bestSongs = [
    {
        id: 6,
        title: "Patiala Flow",
        artist: "Parmish Verma, Laddi Chahal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9-Yn3Fq9atcbsw098FWOYo1DnoP7fqkepi5VF-whMA&s=10",
        preview: "/songs/PatialaFlow.mp3",
    },
    {
        id: 7,
        title: "Syahi",
        artist: "Sinta Bhai",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNlc86jdvirxBKapvKPNOpfwOacCsrbYgMWYbbP18-Q&s=10",
        preview: "/songs/Syahi.mp3",
    },
    {
        id: 8,
        title: "2 Bhai",
        artist: "Mohit Ladhotiya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLMzOFjuxb14jGF4y82vQJOm0Fao6-vYq-EIdbsIdVg&s=10",
        preview: "/songs/2 Bhai.mp3",
    },
    {
        id: 9,
        title: "Bau Ji",
        artist: "Mohit Ladhotiya",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXwNx8hKBS8ZVs6Hdy1MzNkvZXQz2d3sxtfnUwS6pUw&s=10",
        preview: "/songs/BauJi.mp3",
    },
    {
        id: 10,
        title: "Tension",
        artist: "Dhanda Nyoliwala",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0-gfco2v6C24QfAt9PN1pGn3LhwRt4DccoHiA7sCsw&s=10",
        preview: "/songs/Tension.mp3",
    },
    {
        id: 11,
        title: "Hai Mera Dil",
        artist: "Alfaaz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoxc5Q9motPHiNoZTacSUgKrHggBQ2LwFQRVjTXix8w&s=10",
        preview: "/songs/HayeMeraDil.mp3",
    },
    {
        id: 12,
        title: "3 PEG",
        artist: "Sharry Maan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFRytYaWo7MX_69aCUQPr-RAWsBRx97X7WyfIXn36XA&s=10",
        preview: "/songs/3Peg.mp3",
    },
    {
        id: 13,
        title: "Yarri Da Vasta",
        artist: "Sharry Maan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW5ezYLtVrMK-wrqMw7X4vtzz8c-boPTqc2x6p0axkA&s=10",
        preview: "/songs/YariDaVaasta.mp3",
    },
    {
        id: 14,
        title: "Dhakk Champion",
        artist: "Parmish Verma, Laddi Chahal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p6J6ITU_X5KDMCJbIfCtgapqb5_Oh-CmYeldDXIxUQ&s=10",
        preview: "/songs/DhakkChampion.mp3",
    }
];
const recent = [
    {
        id: 15,
        title: "Low Fade",
        artist: "Karan Aujla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKLiLaGXfFEnYesvTQGlOfAH3JHLOAyjYFh0D58rXgQ&s=10",
        preview: "/songs/LowFade.mp3",
    },
    {
        id: 16,
        title: "Love Salary",
        artist: "Cheema Y, Gur Sidhu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91JWOwBopIGcOVwNvHj1Sfxd-1ta3-P_pX1-mxeCUOA&s=10",
        preview: "/songs/LoveSalary.mp3",
    },
    {
        id: 17,
        title: "Headliner",
        artist: "Navaan Sandhu, Haakam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjMdYKYQ4Km18c8LV3igERzwNhAnKdcusMOtvgcBdJw&s=10",
        preview: "/songs/Headliner.mp3",
    },
    {
        id: 18,
        title: "Sadi Sun",
        artist: "Harsh Nussi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKG3vg4d_BLEkz5XSSElBjZSVAtKF8eujS-d3aPvJ7SA&s=10",
        preview: "/songs/SadiSun.mp3",
    },
    {
        id: 19,
        title: "Bro's",
        artist: "Dulla, Shah Rehan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjmXhGasduik7mayoQjlWQx4NPWSzH4BDbrtV9PhKqQ&s",
        preview: "/songs/Bros.mp3",
    },
]
const update = [
    {
        id: 20,
        title: "Jackpot",
        artist: "Cheema Y, Gur Sidhu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd6BdyXnxY1Chk2Gy-RtBcpbe2hGHmsQ1Gfw4HGESdQ&s=10",
        preview: "/songs/Jackpot.mp3",
    },
    {
        id: 21,
        title: "Eye Contact",
        artist: "Harsh Nussi, Deep Klair",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62WnZ_Tk3L1AfJ2J7dVD4sIayFTqasJeh_1VMKm3NVA&s=10",
    },
    {
        id: 22,
        title: "Sensation",
        artist: "Zehr Vibe, Intense, Sardar Khehra",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dktGlpyabH6MORv_3XARJkwdQTKtCgNOAn2bfHA9kQ&s=10",
        preview: "/songs/Sensation.mp3",

    },
    {
        id: 23,
        title: "Tu Wafa",
        artist: "Jodha Vishu, Rambo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOXPlNkmH7tu6lOTM-lclasg3pNVq3QAWJ9NLVtc_og&s=10",
        preview: "/songs/TuWafa.mp3",
    },
    {
        id: 24,
        title: "Don",
        artist: "Jot Sidhu, Jasmeen Akhtar, Jugnu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHSduyxg2SC7EC4HLzhzRTlB-MycWCzGkm5P0e9fPyw&s=10",
        preview: "/songs/Don.mp3",
    },
]
const update2 = [
    {
        id: 25,
        title: "Big Things",
        artist: "Jordan Sandhu, Gur Sidhu, Kaptaan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJApunrhnPBuM-ATxFyNGhlMQ76aZPQO9P3A7n2dacw&s=10",
        preview: "/songs/BigThings.mp3",
    },
    {
        id: 26,
        title: "Bulle",
        artist: "Arjan Dhillon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAlD5hhC0LWO0di97BrcQUmHrxav-StQkmz3hLY799g&s",
        preview: "/songs/Bulle.mp3",
    },
    {
        id: 27,
        title: "CEO",
        artist: "Cheema Y, Gur Sidhu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIE-CphFmXjm5EBqW17IkB4EI3tfQ-nWxZI4kOFoe1dg&s=10",
        preview: "/songs/CEO.mp3",
    },
    {
        id: 28,
        title: "Waare Waare",
        artist: "Navaan Sandhu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhQGBemcIAh2YpZ4GKdvnZUEYTIqng9YN99dGA9FPNg&s=10",
        preview: "/songs/WaareWaare.mp3",
    },
    {
        id: 29,
        title: "Charmer",
        artist: "Diljit Dosanjh, Avvy Sra, Raj Ranjodh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnNHPD_e8reUPu1QG9sgLhf_dzr60NnPlnej_W1DahA&s=10",
        preview: "/songs/Charmer.mp3",
    }
];

const New = () => {
    const { setCurrentSong, setPlaylist } = useOutletContext();
    return (
        <div className="section">
            <h1>New</h1>
            <br />
            <h3>New Albums</h3>
            <br />
            <div className="slider">
                {newAlbums.map((song) => (
                    <div
                        className="banner-card"
                        key={song.id}
                        onClick={() => {
                            setPlaylist(newAlbums);
                            setCurrentSong(song);
                        }}>
                        <img src={song.image} alt={song.title} />
                        <div className="banner-info">
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br /><br />
            <h3>Best New Songs</h3>
            <br />
            <div className="main-s">
                {bestSongs.map((song) => (
                    <div
                        className="small"
                        key={song.id}
                        onClick={() => {
                            setPlaylist(bestSongs);
                            setCurrentSong(song);
                        }}>
                        <img src={song.image} alt={song.title} />
                        <div className="text">
                            <h5>{song.title}</h5>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br /><br />
            <h3>Recent Release</h3>
            <br />
            <div className='recent'>
                {recent.map((song) => (
                    <div className='card'
                        key={song.id}
                        onClick={() => {
                            setPlaylist(recent);
                            setCurrentSong(song);
                        }}>
                        <img src={song.image} alt={song.title} />
                        <div className='banner-info'>
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}

            </div>
            <br /><br />
            <h3>Update Playlists</h3>
            <br />
            <div className='recent'>
                {update.map((song) => (
                    <div className='card'
                        key={song.id}
                        onClick={() => {
                            setPlaylist(update);
                            setCurrentSong(song);
                        }}>
                        <img src={song.image} alt={song.title} />
                        <div className='banner-info'>
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className='recent'>
                {update2.map((song) => (
                    <div className='card'
                        key={song.id}
                        onClick={() => {
                            setPlaylist(update2);
                            setCurrentSong(song);
                        }}>
                        <img src={song.image} alt={song.title} />
                        <div className='banner-info'>
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default New;