import { motion } from "framer-motion";
import leftFlower from "../assets/images/left-flowers.png";
import rightFlower from "../assets/images/right-flowers.png";
import brideImg from "../assets/images/bride.jpg";
import groomImg from "../assets/images/groom.jpg";

// Icons
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="relative py-10">
      <img
        src={leftFlower}
        alt="Left Flower"
        className="absolute left-0 top-0 w-3/12 lg:w-2/12"
      />
      <div className="w-9/12 mx-auto font-platypi text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl md:text-4xl lg:text-5xl text-gold"
        >
          OM SWASTYASTU
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-sm md:text-base lg:text-lg mt-5 text-neutral-600"
        >
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya Pawiwahan Putra dan Putri kami.
        </motion.p>
      </div>
      <div className="grid grid-cols-none grid-rows-[1.4fr_0.2fr_1.4fr] lg:grid-cols-[1.4fr_0.2fr_1.4fr] lg:grid-rows-none justify-center items-start place-items-center gap-10 w-fit mx-auto my-10 text-center">
        <div className="flex flex-col justify-center items-center gap-2 text-neutral-600">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            src={groomImg}
            alt="The Groom"
            width={320}
            height={320}
            className="rounded-full shadow-md shadow-gray-500"
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-greatVibes text-5xl text-gold mt-4"
          >
            Andy
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-platypi text-lg md:text-xl lg:text-2xl"
          >
            I Putu Andy Wirawan
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 45 },
              visible: { opacity: 1, y: 0 },
            }}
            href="https://www.instagram.com"
            target="_blank"
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-platypi text-sm md:text-base font-bold"
          >
            PUTRA PERTAMA DARI PASANGAN
          </motion.p>
          <p className="flex flex-col font-platypi text-sm md:text-base lg:text-lg">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I Nengah Suarma
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              &
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Ni Komang Wardani
            </motion.span>
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center items-center lg:h-80 font-greatVibes text-5xl text-gold"
        >
          &
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-2 text-neutral-600">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            src={brideImg}
            alt="The Bride"
            width={320}
            height={320}
            className="rounded-full shadow-md shadow-gray-500"
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-greatVibes text-5xl text-gold mt-4"
          >
            Eka
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-platypi text-lg md:text-xl lg:text-2xl"
          >
            Ni Luh Eka Darmayanti
          </motion.p>
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 45 },
              visible: { opacity: 1, y: 0 },
            }}
            href="https://www.instagram.com"
            target="_blank"
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-platypi text-sm md:text-base font-bold"
          >
            PUTRI PERTAMA DARI PASANGAN
          </motion.p>
          <p className="flex flex-col font-platypi text-sm md:text-base lg:text-lg">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I Nengah Sumarno (Alm)
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              &
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Ni Nengah Darmiati
            </motion.span>
          </p>
        </div>
      </div>
      <img
        src={rightFlower}
        alt="Right Flower"
        className="absolute right-0 bottom-0 w-5/12 lg:w-2/12"
      />
    </section>
  );
};

export default Profile;
