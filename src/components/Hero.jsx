import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCameraRetro, FaHeart, FaUserAlt } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
  {
    bg: "url('/weddings.jpeg')",
    title: "Timeless Wedding Shots",
    icon: <FaHeart className="text-pink-400 text-3xl md:text-4xl mb-4" />,
    buttonText: "Book Wedding Shoot",
    buttonLink: "#contact",
  },
  {
    bg: "url('/weddings.jpeg')",
    title: "Elegant Portraits",
    icon: <FaUserAlt className="text-yellow-300 text-3xl md:text-4xl mb-4" />,
    buttonText: "View Portrait Gallery",
    buttonLink: "#gallery",
  },
  {
    bg: "url('/weddings.jpeg')",
    title: "Event Memories Captured",
    icon: <FaCameraRetro className="text-green-400 text-3xl md:text-4xl mb-4" />,
    buttonText: "Book for Events",
    buttonLink: "#booking",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const handleDotClick = (i) => setIndex(i);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.section
          key={index}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: currentSlide.bg }}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

          {/* Text Content */}
          <div className="relative z-20 text-center px-4 max-w-2xl">
            {currentSlide.icon}
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4"
              variants={textVariants}
              custom={0.2}
              initial="hidden"
              animate="visible"
            >
              {currentSlide.title}
            </motion.h2>
            <motion.p
              className="text-sm md:text-lg backdrop-blur-md bg-black/40 p-3 md:p-4 rounded-lg mb-4"
              variants={textVariants}
              custom={0.4}
              initial="hidden"
              animate="visible"
            >
              Capturing moments that last a lifetime — Weddings, Portraits, Events & More
            </motion.p>
            <motion.a
              href={currentSlide.buttonLink}
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
              variants={textVariants}
              custom={0.6}
              initial="hidden"
              animate="visible"
            >
              {currentSlide.buttonText}
            </motion.a>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <button
          onClick={handlePrev}
          className="bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full shadow"
        >
          <IoChevronBack size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <button
          onClick={handleNext}
          className="bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full shadow"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
