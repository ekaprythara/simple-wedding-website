import { useEffect, useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import song from "../assets/music/audio.mp3";

// eslint-disable-next-line react/prop-types
const MusicToggler = ({ isWelcomed }) => {
  const music = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isWelcomed) music.current.play();

    if (isPlaying) {
      music.current.play();
    } else {
      music.current.pause();
    }
  }, [isPlaying, isWelcomed]);

  return (
    <section>
      <audio ref={music} loop>
        <source src={song} type="audio/mp3" />
      </audio>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-3 left-3 z-50 flex animate-spin-slow cursor-pointer items-center justify-center rounded-full bg-gold p-2"
      >
        {isPlaying ? (
          <MdMusicNote size={25} color="white" />
        ) : (
          <MdMusicOff size={25} color="white" />
        )}
      </button>
    </section>
  );
};

export default MusicToggler;
