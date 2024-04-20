import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Ceremony = () => {
  return (
    <section className="bg-berdua scale-100 bg-fixed bg-center h-screen -z-40">
      <div className="flex justify-center items-center h-full">
        <div className="rounded-2xl bg-black bg-opacity-40 py-10 px-60">
          <h1 className="text-center font-lora text-base text-white mb-10">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami,
            <br /> apabila Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan
            doa restu.
          </h1>
          <div className="grid grid-cols-[0.5fr_1.5fr] border border-white rounded-xl">
            <div className="bg-white rounded-l-xl flex items-center justify-center p-5">
              <div className="flex flex-col gap-2 text-center">
                <p>
                  <span className="text-5xl font-bold font-nanum">26</span>
                  <br />
                  <span className="text-2xl font-bold font-nanum">DES</span>
                  <br />
                  <span className="text-xl font-bold font-nanum">2023</span>
                </p>
              </div>
            </div>
            <div className="p-3">
              <h1 className="text-white font font-lora mb-2 text-2xl">
                RESEPSI
              </h1>
              <hr />
              <div>
                <div className="flex items-center justify-start text-lora text-white mt-2">
                  <FaRegClock size={20} className="me-2" />
                  <p>11:00 WITA s.d Selesai</p>
                </div>
                <div className="flex items-center justify-start text-lora text-white mt-2">
                  <FaMapMarkerAlt size={20} className="me-2" />
                  <p>Desa Sembung Gede, Kec. Kerambitan, Kab. Tabanan</p>
                </div>
                <button className="mt-2 rounded-lg bg-white py-2 px-5 flex items-center justify-center">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </div>
          <p className="text-center font-lora text-base text-white mt-10">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami,
            <br /> apabila Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan
            doa restu.
          </p>
          <p className="text-center font-lora text-xl text-white mt-10">
            Om Shanti, Shanti, Shanti, Om
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ceremony;
