const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-heroImgHorizontal bg-center bg-cover bg-no-repeat h-full w-full -z-20 absolute md:block hidden" />
      <div className="bg-heroImgVertical bg-center bg-cover bg-no-repeat h-full w-full -z-20 absolute block md:hidden" />
      <div className="bg-black/40 h-full w-full absolute -z-10" />
      <div className="w-11/12 md:w-10/12 mx-auto h-full flex flex-col items-start justify-center md:justify-end p-2 md:p-10 lg:p-20 z-10 text-white">
        <p className="font-platypi text-sm md:text-base lg:text-lg">
          The Wedding of
        </p>
        <h1 className="font-greatVibes text-5xl md:text-6xl lg:text-8xl mt-5 mb-2">
          Andy & Eka
        </h1>
        <p className="font-platypi text-sm md:text-base lg:text-lg">
          “Bertemu denganmu adalah takdir, menjadi temanmu adalah pilihan, tapi
          jatuh cinta denganmu benar-benar di luar dayaku.”
        </p>
      </div>
    </div>
  );
};

export default Hero;
