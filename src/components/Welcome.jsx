import leftFlower from "../assets/images/left-flowers.png";
import rightFlower from "../assets/images/right-flowers.png";
import profileImg from "../assets/images/profile.webp";
import { FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Welcome = ({ onClose }) => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className="fixed w-full h-screen bg-white overflow-hidden text-center">
      <img
        src={leftFlower}
        alt="Left Flower"
        className="absolute left-0 top-0 w-5/12 lg:w-3/12 h-auto"
      />
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="relative border-black border rounded-full w-[200px] h-[300px] overflow-hidden">
            <img
              src={profileImg}
              alt="Profile Pic"
              className="absolute bg-cover bg-center scale-150"
            />
          </div>
          <h1 className="font-greatVibes text-5xl md:text-6xl lg:text-7xl font-bold text-gold mb-2 mt-5">
            Lone & Delphi
          </h1>
          <p className="font-platypi text-sm md:text-base lg:text-lg">
            Kepada Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="font-platypi text-sm md:text-base lg:text-lg font-bold">
            Sir Isaac Newton
          </h2>
          <small className="font-platypi text-xs md:text-sm lg:text-base italic text-gray-700 mt-2">
            *mohon maaf apabila ada kesalahan penulisan nama dan gelar.
          </small>
          <button
            className="font-lato text-xs md:text-sm lg:text-sm mt-2 px-5 py-2 rounded-lg text-white bg-gold flex items-center justify-center focus:outline-none"
            onClick={onClose}
            ref={buttonRef}
          >
            <FaEnvelope size={18} className="me-2" />
            Buka Undangan
          </button>
        </div>
      </div>
      <img
        src={rightFlower}
        alt="Right Flower"
        className="absolute right-0 -z-20 bottom-0 w-5/12 lg:w-3/12 h-auto"
      />
    </div>
  );
};

export default Welcome;
