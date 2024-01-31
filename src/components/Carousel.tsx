import { useCallback, useEffect, useState } from "react";
import Image1 from "../assets/boda.jpeg";
import Image2 from "../assets/boda2.jpeg";
import Image3 from "../assets/boda3.jpeg";
import Image4 from "../assets/boda4.jpeg";
import Image5 from "../assets/boda5.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Carousel = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  //   const prevSlide = useCallback(() => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //     );
  //   }, []);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [nextSlide]);
  return (
    <div className="max-w-full overflow-hidden">
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-1.5rem border-none p-2 z-1 cursor-pointer transition duration-300 hover:bg-opacity-80 left-0"
      >
        &lt;
      </button> */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div className="min-h-[500px]">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`Slide ${images[activeIndex]}`}
            className={`w-screen h-${
              isMobile ? "auto" : "500px"
            } block rounded-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-1.5rem border-none p-2 cursor-pointer z-0 transition duration-300 hover:bg-opacity-80 right-0"
      >
        &gt;
      </button> */}
    </div>
  );
};
export default Carousel;
