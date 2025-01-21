import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "./assets/image1.webp";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpg";

const HeroSection = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Left section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
          <main className="w-full px-4 pt-10 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold transition-all duration-700 ease-in-out">
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 
                  filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  The Future of
                </span>
                <span
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
                  filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Digital Finance
                </span>
              </h1>

              <p
                className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed
                filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-all duration-700 ease-in-out"
              >
                Build the next generation of financial applications on a highly
                scalable, fast and secure blockchain platform designed for
                global adoption.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start w-full">
                <a
                  href="/dharitriChanges"
                  className="px-12 py-3 rounded-xl text-base font-medium text-white
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                    hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    shadow-lg hover:shadow-xl
                    hover:shadow-indigo-500/25"
                >
                  Start Building
                </a>
                {/* <a
                  href="/dharitriChanges"
                  className="px-4 py-3 rounded-xl text-base font-medium
                    text-white
                    border-2 border-indigo-500/50 hover:border-indigo-400
                    backdrop-blur-sm hover:backdrop-blur-lg
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    shadow-lg hover:shadow-xl
                    hover:shadow-purple-500/25
                    bg-white/10 hover:bg-white/20"
                >
                  Resource
                </a> */}
                <a
                  href="/dharitriChanges"
                  className="px-8 py-3 rounded-xl text-base font-medium
                    text-white
                    border-2 border-indigo-500/50 hover:border-indigo-400
                    backdrop-blur-sm hover:backdrop-blur-lg
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    shadow-lg hover:shadow-xl
                    hover:shadow-purple-500/25
                    bg-white/10 hover:bg-white/20"
                >
                  Explore The Ecosystem
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Right section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-indigo-500 to-purple-600">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2500 }} // Correct autoplay usage
            loop={true}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="slider-image h-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
