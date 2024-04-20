import flower from "../assets/images/single-flower.png";
import { GiBlackBook } from "react-icons/gi";

const RgVeda = () => {
  return (
    <section className="w-5/6 mx-auto">
      <div className="text-center flex flex-col justify-center items-center w-10/12 py-10 mx-auto">
        <img src={flower} alt="Flower" className="w-24 pb-8" />
        <p className="font-lora text-lg text-[#988568]">
          Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
          pernah terpisahkan.
          <br />
          Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang
          penuh kegembiraan bersama seluruh keturunanmu.
        </p>
        <div className="w-64 pt-10 flex flex-col gap-2">
          <hr className="border border-[#988568]" />
          <p className="font-lora text-xl text-[#988568] flex items-center justify-center">
            <span className="me-3">
              <GiBlackBook size={28} />
            </span>
            Rg Veda X.85.42
          </p>
          <hr className="border border-[#988568]" />
        </div>
      </div>
    </section>
  );
};

export default RgVeda;
