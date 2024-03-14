import { useCallback, useEffect, useState } from "react";
import Image1 from "../assets/boda.jpeg";
import Image2 from "../assets/boda2.jpeg";
import Image3 from "../assets/boda3.jpeg";
import Image4 from "../assets/boda4.jpeg";
import Image5 from "../assets/boda5.jpeg";
import Image6 from "../assets/boda6.jpeg";
import { AnimatePresence, motion } from "framer-motion";

const Carousel = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [nextSlide]);
  return (
    <div className="flex flex-col min-h-fit  overflow-scroll">
      <AnimatePresence initial={false} mode="wait">
        <motion.div className="flex min-h-[500px] justify-center overflow-scroll">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            className=" rounded-xl md:object-scale-down max-h-[500px] overflow-scroll"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Carousel;
