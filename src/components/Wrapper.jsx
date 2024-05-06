import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";
import Hero from "./Hero";
import RgVeda from "./RgVeda";
import Profile from "./Profile";
import Ceremony from "./Ceremony";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Wishes from "./Wishes";
import Music from "./Music";
import { useSearchParams } from "react-router-dom";

const Wrapper = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [searchParams] = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div>
      {/* <AnimatePresence>
        {showWelcomePage && (
          <motion.div
            className="fixed w-full h-screen bg-white z-[999]"
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeIn", duration: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: -500 },
              visible: { opacity: 1, y: 0 },
            }}
            exit={{ opacity: 0, y: -500 }}
          >
            <Welcome onClose={() => setShowWelcomePage(false)} to={to} />
          </motion.div>
        )}
      </AnimatePresence>
      <Music isWelcomed={showWelcomePage} /> */}
      <Hero />
      <RgVeda />
      <Profile />
      <Ceremony />
      <Countdown />
      <Gallery />
      <Wishes />
    </div>
  );
};

export default Wrapper;
