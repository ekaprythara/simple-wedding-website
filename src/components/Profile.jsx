import leftFlower from "../assets/images/left-flowers.png";
import rightFlower from "../assets/images/right-flowers.png";
import ladyImg from "../assets/images/wanita.jpg";
import manImg from "../assets/images/pria.jpg";

// Icons
import { FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="relative w-full h-fit overflow-hidden">
      <img
        src={leftFlower}
        alt="Left Flower"
        className="absolute left-0 top-0 w-3/12 lg:w-2/12"
      />
      <div className="w-9/12 mx-auto pt-10 font-lora text-gold text-center">
        <h1 className="text-5xl pb-10">OM SWASTYASTU</h1>
        <p className="text-lg">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
          Manusa Yadnya Pawiwahan Putra dan Putri kami.
        </p>
      </div>
      <div className="grid grid-rows-[1.4fr_0.2fr_1.4fr] grid-cols-none lg:grid-cols-[1.4fr_0.2fr_1.4fr] lg:grid-rows-none w-fit mx-auto m-10 items-start justify-center place-items-center gap-10 text-center text-[#988568]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={manImg}
            alt="The Man"
            width={320}
            height={320}
            className="rounded-full mb-2"
          />
          <p className="font-greatVibes text-5xl">Andy</p>
          <p className="font-lora text-xl">I Putu Andy Wirawan</p>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={25} />
          </a>
          <p className="font-lora text-sm">PUTRA PERTAMA DARI PASANGAN</p>
          <p className="font-lora text-lg">
            I Nengah Suarma & Ni Komang Wardani
          </p>
        </div>
        <div className="font-greatVibes lg:flex items-center justify-center h-full text-5xl">
          &
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src={ladyImg}
            alt="The Lady"
            width={320}
            height={320}
            className="rounded-full mb-2"
          />
          <p className="font-greatVibes text-5xl">Eka</p>
          <p className="font-lora text-xl">Ni Luh Eka Darmayanti</p>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={25} />
          </a>
          <p className="font-lora text-sm">PUTRA PERTAMA DARI PASANGAN</p>
          <p className="font-lora text-lg">
            I Nengah Sumarno (Alm) & Ni Nengah Damiati
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
