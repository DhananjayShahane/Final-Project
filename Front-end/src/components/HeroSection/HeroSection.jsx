import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import bgVideo from "../../assets/Video/hero-section-video.mp4";
import sliderImage1 from "../../assets/food_1.png";
import sliderImage2 from "../../assets/food_2.png";
import sliderImage3 from "../../assets/food_3.png";
import sliderImage4 from "../../assets/food_4.png";

const sliderData = [
  { id: 1, image: sliderImage1, title: "Gourmet Steak" },
  { id: 2, image: sliderImage2, title: "Tasty Pasta" },
  { id: 3, image: sliderImage3, title: "Fresh Salad" },
  { id: 4, image: sliderImage4, title: "Delicious Dessert" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-start px-8 md:px-20 text-white">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover" src={bgVideo} type="video/mp4" autoPlay muted loop />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center p-5 md:p-0">
              
              {/* Left Text Section */}
              <div className="mx-auto flex justify-center items-center">
                <div className="heroText">
                  <h1 className="text-white mb-3 lg:text-8xl text-6xl font-medium">
                    Delicious <br /> Steaks
                  </h1>
                  <div>
                    <div className="flex flex-wrap items-center">
                      <h4 className="text-white mb-2 me-3 text-2xl flex items-center">
                        4.4/5 
                        <span className="flex text-yellow-400 ml-2">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </span>
                      </h4>
                    </div>
                    <p className="text-white w-full text-2xl">
                      From <strong>1,206+</strong> Customer Reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Carousel Section */}
              <div className="carousel max-w-xl w-full relative">
                <div className="overflow-hidden relative w-full">
                  {/* Animated Slide */}
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="carousel-item flex justify-center items-center flex-col"
                  >
                    <div className="carousel-image-wrap w-full relative">
                      <img 
                        src={sliderData[currentSlide].image} 
                        className="carousel-image w-full rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105" 
                        alt="Food Item" 
                      />
                      <div className="carousel-caption absolute bottom-5 text-center w-full bg-white bg-opacity-75 p-2 rounded-md">
                        <h4 className="text-black text-md flex items-center justify-center">
                          <FaMapMarkerAlt className="text-red-500 mr-2" /> {sliderData[currentSlide].title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Buttons */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="carousel-control-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full text-white shadow-lg"
                  onClick={prevSlide}
                >
                  <FaChevronLeft size={20} />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="carousel-control-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full text-white shadow-lg"
                  onClick={nextSlide}
                >
                  <FaChevronRight size={20} />
                </motion.button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
