import leftFlower from "../assets/images/left-flowers.png";
import rightFlower from "../assets/images/right-flowers.png";
import ladyImg from "../assets/images/wanita.jpg";
import manImg from "../assets/images/pria.jpg";

// Icons
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="relative w-full h-fit overflow-hidden py-20">
      <img
        src={leftFlower}
        alt="Left Flower"
        className="absolute left-0 top-0 w-3/12 lg:w-2/12"
      />
      <div className="w-9/12 mx-auto pt-10 font-platypi text-gold text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl pb-5">OM SWASTYASTU</h1>
        <p className="text-sm md:text-base lg:text-lg">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya Pawiwahan Putra dan Putri kami
        </p>
      </div>
      <div className="grid grid-rows-[1.4fr_0.2fr_1.4fr] grid-cols-none lg:grid-cols-[1.4fr_0.2fr_1.4fr] lg:grid-rows-none w-fit mx-auto m-10 items-start justify-center place-items-center gap-10 text-center text-[#988568]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={manImg}
            alt="The Man"
            width={320}
            height={320}
            className="rounded-full mb-3 shadow-lg shadow-gray-800"
          />
          <p className="font-greatVibes text-5xl">Andy</p>
          <p className="font-platypi text-lg md:text-xl lg:text-2xl">
            I Putu Andy Wirawan
          </p>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={30} />
          </a>
          <p className="font-platypi text-sm">PUTRA PERTAMA DARI PASANGAN</p>
          <p className="font-platypi text-sm md:text-base lg:text-lg flex flex-col">
            <span>I Nengah Suarma</span>
            <span>&</span>
            <span>Ni Komang Wardani</span>
          </p>
        </div>
        <div className="font-greatVibes lg:flex items-center justify-center h-full text-5xl">
          &
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={ladyImg}
            alt="The Man"
            width={320}
            height={320}
            className="rounded-full mb-3 shadow-lg shadow-gray-800"
          />
          <p className="font-greatVibes text-5xl">Eka</p>
          <p className="font-platypi text-lg md:text-xl lg:text-2xl">
            Ni Luh Eka Darmayanti
          </p>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={30} />
          </a>
          <p className="font-platypi text-sm">PUTRI PERTAMA DARI PASANGAN</p>
          <p className="font-platypi text-sm md:text-base lg:text-lg flex flex-col">
            <span>I Nengah Sumarno (Alm)</span>
            <span>&</span>
            <span>Ni Nengah Darmiati</span>
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
