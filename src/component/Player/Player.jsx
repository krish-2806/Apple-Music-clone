import { memo, useState, useRef, useEffect } from "react";
import "./Player.css";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaApple,
  FaListUl,
  FaRandom,
  FaRedoAlt,
} from "react-icons/fa";

const Player = ({ song, playlist, setCurrentSong }) => {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);

  if (!song) return null;

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      await audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const previousSong = () => {
    if (!playlist.length) return;

    const index = playlist.findIndex((item) => item.id === song.id);

    if (index <= 0) {
      setCurrentSong(playlist[playlist.length - 1]);
    } else {
      setCurrentSong(playlist[index - 1]);
    }
  };

  const nextSong = () => {
    if (!playlist.length) return;

    if (shuffle) {
      let random;
      do {
        random = Math.floor(Math.random() * playlist.length);
      } while (playlist[random].id === song.id && playlist.length > 1);

      setCurrentSong(playlist[random]);
      return;
    }
    const index = playlist.findIndex(item => item.id === song.id);

    if (index === playlist.length - 1) {
      setCurrentSong(playlist[0]);
    } else {
      setCurrentSong(playlist[index + 1]);
    }
  };

  useEffect(() => {
    if (!audioRef.current || !song?.preview) return;

    audioRef.current.src = song.preview;
    audioRef.current.load();

    audioRef.current.volume = volume / 100;

    audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => console.log(err));
  }, [song]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const updateTime = () => {
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration || 0);
  };

  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("loadedmetadata", updateTime);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", updateTime);
  };
}, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      nextSong();
    };
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [song]);

  const formatTime = (time) => {
  if (isNaN(time)) return "0:00";

  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};
  return (
    <div className="player">
      <div className="left-player">
        <FaRandom
          className="icon small-icon"
          style={{ color: shuffle ? "#ff375f" : "white" }}
          onClick={() => setShuffle(!shuffle)}/>

        <FaBackward
          className="icon"
          onClick={previousSong}/>

        <div
          className="play-btn"
          onClick={togglePlay}>
          {isPlaying ? (
            <FaPause className="icon" />
          ) : (
            <FaPlay className="icon" />
          )}
        </div>

        <FaForward
          className="icon"
          onClick={nextSong}/>

        <FaRedoAlt
          className="icon small-icon"
          onClick={async () => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = 0;
            try {
              await audioRef.current.play();
              setIsPlaying(true);
            } catch (err) {
              console.log(err);
            }
          }}/>

      </div>

      <div className="center-player">

  <div className="song-details">
    <img src={song.image} alt={song.title} />

    <div className="song-text">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>

      <div className="progress-container">

        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          className="progress-bar"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />

        <span>{formatTime(duration)}</span>

      </div>

    </div>
  </div>

  {/* <FaApple className="apple-logo" /> */}

</div>

      <div className="right-player">
        <FaListUl className="icon" />
        <div className="volume">
          <FaVolumeUp />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => {
              const value = e.target.value;
              setVolume(value);
              if (audioRef.current) {
                audioRef.current.volume = value / 100;
              }
            }}/>
        </div>
      </div>
      <audio
        ref={audioRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default memo(Player);