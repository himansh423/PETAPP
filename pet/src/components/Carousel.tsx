"use client"
import { useState } from "react";
import Image from "next/image";
import img1 from "../../public/dogado.png";
import img2 from "../../public/dogAdopt.png"; // Add more images as necessary
import img3 from "../../public/dogAdopt.png"; // Add more images as necessary

const images = [img1, img2, img3]; // Array of images

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="min-w-full" key={index}>
              <Image src={image} className="object-cover" alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-md"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-md"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
