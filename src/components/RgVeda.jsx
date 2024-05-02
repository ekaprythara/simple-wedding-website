import { motion } from "framer-motion";
import { GiBlackBook } from "react-icons/gi";
import flowerImg from "../assets/images/flower.png";

const RgVeda = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          src={flowerImg}
          alt="Flower"
          className="w-24 pb-8"
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-platypi text-sm md:text-base lg:text-lg text-neutral-600 text-center"
        >
          Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan.
          <br />
          Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang
          penuh kegembiraan bersama seluruh keturunanmu.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col gap-2 w-48 md:w-52 lg:w-56 mt-10"
        >
          <hr className="border border-gold" />
          <p className="font-platypi text-base md:text-lg lg:text-xl text-gold flex items-center justify-center">
            <GiBlackBook size={28} className="me-3" />
            Rg Veda X.85.42
          </p>
          <hr className="border border-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default RgVeda;
