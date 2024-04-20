import { useEffect, useState } from "react";
import video from "../assets/videos/andy-eka.mp4";

const Countdown = () => {
  const TIME = "Dec 26, 2024";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = TIME;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  });

  return (
    <section className="w-5/6 my-20 mx-auto text-center">
      <div className="aspect-video border-black bg-black w-6/12 mx-auto">
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <hr className="w-2/12 my-10 border-gold border-[0.5] mx-auto" />
      <p className="font-lora text-lg text-gold w-7/12 mx-auto">
        Siang dan malam berganti begitu cepat, di antara saat-saat mendebarkan
        yang belum pernah kami rasakan sebelumnya. Kami nantikan kehadiran para
        keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari
        yang bahagia.
      </p>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex w-[100px] flex-col justify-center items-center">
          <span className="font-cousineMono text-3xl">
            {days < 0 ? "0" : days}
          </span>
          <span className="text-base font-lato">DAYS</span>
        </div>
        <div className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex w-[100px] flex-col justify-center items-center">
          <span className="font-cousineMono text-3xl">
            {hours < 0 ? "0" : hours}
          </span>
          <span className="text-base font-lato">HOURS</span>
        </div>
        <div className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex w-[100px] flex-col justify-center items-center">
          <span className="font-cousineMono text-3xl">
            {minutes < 0 ? "0" : minutes}
          </span>
          <span className="text-base font-lato">MINUTES</span>
        </div>
        <div className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex w-[100px] flex-col justify-center items-center">
          <span className="font-cousineMono text-3xl">
            {seconds < 0 ? "0" : seconds}
          </span>
          <span className="text-base font-lato">SECONDS</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
