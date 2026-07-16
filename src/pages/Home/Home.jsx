import { memo } from "react";
import { useOutletContext } from "react-router-dom";
import "./Home.css";

const recentlyPlayed = [
  {
    id: 1,
    title: "Super Star",
    artist: "Parmish Verma × Paradox",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSq6bZyzJ3LNd-ZFOTKEDShWAucY08ltbkZZZ3CI5cA&s=10",
    preview: "/songs/SuperStar.mp3",
  },
  {
    id: 2,
    title: "Not Guilty",
    artist: "Dhanda Nyoliwala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMDzH8W_7f8cnPcGtr412pjagGBIYeAfI-64mMfs-Sg&s=10",
    preview: "/songs/notGuilty.mp3",
  },
  {
    id: 3,
    title: "Tareefan",
    artist: "Jordan Sandhu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqQielqwHBAL8FrusCU7w6nUeFv4DzfZY-EoN3HyAA&s=10",
    preview: "/songs/tareefan.mp3",
  },
  {
    id: 4,
    title: "Bairan",
    artist: "Banjaare",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-LIMeoy-wDb_02lQFRzpgz7qLiNSzTuQyuipfrMp_A&s=10",
    preview: "/songs/bairan.mp3",
  },
  {
    id: 5,
    title: "Banda Bamb",
    artist: "Jordan Sandhu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_hOUr35pon_eEpeAaIolBpme3wMWudnV9V3o95gsKA&s=10",
    preview: "/songs/BandaBamb.mp3",
  },
  {
    id: 6,
    title: "Jinni Sohni",
    artist: "Harvi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-N1mii3IFO-UtjiZ6rNYwIVXytUqjtONaFyYuqmQVtQ&s",
    preview: "/songs/JinniSohni.mp3",
  },
];

const topAlbums = [
  {
    id: 7,
    title: "Winning Speech",
    artist: "Karan Aujla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVlpKQOqMN4jYTeNipoBR_Es38nqjW4GASDbJTWxl_A&s=10",
    preview: "/songs/WinningSpeech.mp3",
  },
  {
    id: 8,
    title: "Softly",
    artist: "Karan Aujla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9QOuc7sPpM9o9BTs7_7NG_6Xk7b3rmZEH42CX34jhg&s=10",
    preview: "/songs/Softly.mp3",
  },
  {
    id: 9,
    title: "Insane",
    artist: "AP Dhillon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDbBnLhJ8ynia4141_rufTNtc8xOovk-4ugJDVvO--A&s=10",
    preview: "/songs/Insane.mp3",
  },
  {
    id: 10,
    title: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPbjc6bdnLV_VqyNwgh5ezjELHO7ysle_JRe12h1VnA&s=10",
    preview: "/songs/BrownMunde.mp3",
  },
  {
    id: 11,
    title: "Excuses",
    artist: "AP Dhillon, Gurinder Gill",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWx0Bz7Jzek5DjHY3sv_1jzzJzEP0L9-tYcEL88p4YA&s=10",
    preview: "/songs/Excuses.mp3",
  },
  {
    id: 12,
    title: "295",
    artist: "Sidhu Moose Wala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6P1e9XCxRVlf9SQO1ov98PfFtYqhQ9MO5mwOeP5W_w&s=10",
    preview: "/songs/295.mp3",
  },
];

const Home = () => {
  const { setCurrentSong, setPlaylist } = useOutletContext();
  const playSong = async (song) => {
    try {
      const response = await fetch(`https://corsproxy.io/?https://api.deezer.com/search?q=${encodeURIComponent(`${song.title} ${song.artist}`)}`);

      const data = await response.json();

      if (data.data.length > 0) {
        const apiSong = data.data[0];

        setCurrentSong({
          title: apiSong.title,
          artist: apiSong.artist.name,
          image: apiSong.album.cover_medium,
          preview: apiSong.preview,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Apple Music</h2>
          <p>100 Million Songs. Ad-Free.</p>
          <button>Listen Now</button>
        </div>
      </div>

      <section>
        <h2>Recently Played</h2>
        <br />

        <div className="song">
          {recentlyPlayed.map((song) => (
            <div
              className="song-card"
              key={song.id}
              onClick={() => {
                setPlaylist(recentlyPlayed);
                setCurrentSong(song);
              }}>
              <img src={song.image} alt={song.title} />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Top Albums</h2>
        <br />

        <div className="song">
          {topAlbums.map((song) => (
            <div
              className="song-card"
              key={song.id}
              onClick={() => {
                setPlaylist(topAlbums);
                setCurrentSong(song);
              }}>
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

export default memo(Home);