import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Ceremony = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="bg-ceremonyImg bg-center bg-fixed absolute w-full h-full -z-40" />
      <div className="flex justify-center items-center h-full px-2">
        <div className="rounded-2xl bg-black/70 py-10">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-platypi text-sm md:text-base lg:text-lg text-neutral-200 text-center mb-10 px-10 md:px-36 lg:px-60"
          >
            Merupakan suatu kebahagiaan dan kehormatan bagi kami,
            <br />
            apabila Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa
            restu.
          </motion.h1>
          <div className="px-5 md:px-32 lg:px-56">
            <div className="grid grid-cols-[0.5fr_1.5fr] border border-white/70 rounded-2xl">
              <div className="bg-white/70 rounded-l-[15px] flex items-center justify-center p-5">
                <div className="flex flex-col gap-2 text-center">
                  <p>
                    <span className="text-4xl font-bold font-nanum animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]" />
                    <br />
                    <span className="text-2xl font-bold font-nanum">DES</span>
                    <br />
                    <span className="text-xl font-bold font-nanum">2023</span>
                  </p>
                </div>
              </div>
              <div className="p-3">
                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="font-platypi text-lg md:text-xl lg:text-2xl text-neutral-200 mb-2"
                >
                  RESEPSI
                </motion.h1>
                <hr />
                <div className="py-2">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="grid grid-rows-none grid-cols-[0.1fr_0.9fr] py-1 text-neutral-200"
                  >
                    <div className="flex items-center justify-center content-center">
                      <FaRegClock size={22} className="me-2" />
                    </div>
                    <p className="font-lato text-sm lg:text-lg">
                      11:00 WITA s.d Selesai
                    </p>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="grid grid-rows-none grid-cols-[0.1fr_0.9fr] py-1 text-neutral-200"
                  >
                    <div className="flex items-center justify-center content-center">
                      <FaMapMarkerAlt size={22} className="me-2" />
                    </div>
                    <p className="font-lato text-sm lg:text-lg">
                      Desa Sembung Gede, Kec. Kerambitan, Kab. Tabanan
                    </p>
                  </motion.div>
                  <button className="rounded-lg py-2 px-4 flex items-center justify-center bg-white mt-5 font-lato text-xs md:text-sm lg:text-sm">
                    PETUNJUK ARAH
                    <span>
                      <FaArrowRight size={15} className="ms-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 md:px-36 lg:px-60">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-platypi text-sm md:text-base lg:text-lg text-neutral-200 text-center mt-10"
            >
              Atas kehadiran dan doa restunya kami ucapkan terima kasih.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-platypi text-sm md:text-base lg:text-lg text-neutral-200 text-center mt-5"
            >
              Om Shanti, Shanti, Shanti, Om.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceremony;
