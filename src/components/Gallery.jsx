import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import { motion } from "framer-motion";

import img1 from "../assets/images/gallery/1.webp";
import img2 from "../assets/images/gallery/2.webp";
import img3 from "../assets/images/gallery/4.webp";
import img4 from "../assets/images/gallery/5.webp";
import img5 from "../assets/images/gallery/6.webp";
import img6 from "../assets/images/gallery/7.webp";

const WEDDING_GALLERY = [
  {
    image: img1,
    delay: 0.1,
  },
  {
    image: img2,
    delay: 0.2,
  },
  {
    image: img3,
    delay: 0.3,
  },
  {
    image: img4,
    delay: 0.4,
  },
  {
    image: img5,
    delay: 0.5,
  },
  {
    image: img6,
    delay: 0.6,
  },
];

const Gallery = () => {
  return (
    <section className="w-11/12 mx-auto my-20 text-gold font-platypi text-center">
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
        Wedding Gallery
      </motion.h1>
      <LightGallery
        speed={500}
        download={false}
        elementClassNames="flex flex-wrap items-center justify-center gap-2 mt-5"
      >
        {WEDDING_GALLERY.map((gallery, index) => (
          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1, delay: gallery.delay }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            key={index}
            href={gallery.image}
          >
            <img
              alt={gallery.image}
              src={gallery.image}
              width={400}
              height={400}
              className="h-[400px] w-[400px] rounded-md object-cover"
            />
          </motion.a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
