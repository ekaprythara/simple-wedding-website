import { useEffect, useState } from "react";
import video from "../assets/videos/andy-eka.mp4";
import { motion } from "framer-motion";

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
    <section className="w-10/12 md:w-9/12 lg:w-8/12 my-20 mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="aspect-video border-black bg-black w-12/12 md:w-11/12 lg:w-10/12 mx-auto"
      >
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.hr
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-2/12 my-10 border-gold border-[0.5] mx-auto"
      />
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="font-platypi text-sm md:text-base lg:text-lg text-center text-neutral-600 w-12/12 md:w-11/12 lg:w-10/12 mx-auto"
      >
        Siang dan malam berganti begitu cepat, di antara saat-saat mendebarkan
        yang belum pernah kami rasakan sebelumnya. Kami nantikan kehadiran para
        keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari
        yang bahagia
      </motion.p>
      <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-5 mt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex min-[50px] max-w-[100px] flex-1 flex-col justify-center items-center"
        >
          <span className="font-cousineMono text-xs sm:text-sm md:text-lg lg:text-2xl">
            {days < 0 ? "0" : days}
          </span>
          <span className="text-[0.50rem] md:text-sm lg:text-base font-lato">
            DAYS
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex min-[50px] max-w-[100px] flex-1 flex-col justify-center items-center"
        >
          <span className="font-cousineMono text-xs sm:text-sm md:text-lg lg:text-2xl">
            {hours < 0 ? "0" : hours}
          </span>
          <span className="text-[0.50rem] md:text-sm lg:text-base font-lato">
            HOURS
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex min-[50px] max-w-[100px] flex-1 flex-col justify-center items-center"
        >
          <span className="font-cousineMono text-xs sm:text-sm md:text-lg lg:text-2xl">
            {minutes < 0 ? "0" : minutes}
          </span>
          <span className="text-[0.50rem] md:text-sm lg:text-base font-lato">
            MINUTES
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="bg-gold text-white rounded-md font-playFair py-2 px-4 flex min-[50px] max-w-[100px] flex-1 flex-col justify-center items-center"
        >
          <span className="font-cousineMono text-xs sm:text-sm md:text-lg lg:text-2xl">
            {seconds < 0 ? "0" : seconds}
          </span>
          <span className="text-[0.50rem] md:text-sm lg:text-base font-lato">
            SECONDS
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
