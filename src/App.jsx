import { useState } from "react";
import Welcome from "./components/Welcome";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import RgVeda from "./components/RgVeda";
import Profile from "./components/Profile";
import Ceremony from "./components/Ceremony";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
// import Fetching from "./components/Fetching";

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

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
            <Welcome onClose={() => setShowWelcomePage(false)} />
          </motion.div>
        )}
      </AnimatePresence> */}
      <Hero />
      <RgVeda />
      <Profile />
      <Ceremony />
      <Countdown />
      <Gallery />
      <Wishes />
    </div>
    // <Fetching />
  );
};

export default App;
