import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import img1 from "../assets/images/gallery/1.webp";
import img2 from "../assets/images/gallery/2.webp";
import img4 from "../assets/images/gallery/4.webp";
import img5 from "../assets/images/gallery/5.webp";
import img6 from "../assets/images/gallery/6.webp";
import img7 from "../assets/images/gallery/7.webp";

const WEDDING_GALLERY = [img1, img2, img4, img5, img6, img7];

const Gallery = () => {
  return (
    <section className="w-11/12 mx-auto my-20 text-gold text-center">
      <h1 className="font-platypi text-3xl md:text-4xl lg:text-5xl pb-10">
        PHOTO GALLERY
      </h1>
      <LightGallery
        speed={500}
        download={false}
        elementClassNames="flex flex-wrap items-center justify-center gap-2 mt-5"
      >
        {WEDDING_GALLERY.map((gallery, index) => (
          <a key={index} href={gallery}>
            <img
              alt={gallery}
              src={gallery}
              width={400}
              height={400}
              className="h-[400px] w-[400px] rounded-md object-cover"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
