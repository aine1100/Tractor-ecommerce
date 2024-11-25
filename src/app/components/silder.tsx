"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Importing directly from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS (if needed)
import Image from "next/image";

const Slider = () => {
  const carouselImages = [
    { id: 1, src: "/hoe.png", alt: "Slide 1" },
    { id: 2, src: "/hoe.png", alt: "Slide 2" },
    { id: 3, src: "/tractor.png", alt: "Slide 3" },
    { id: 4, src: "/hoe.png", alt: "Slide 4" },
    { id: 5, src: "/hoe.png", alt: "Slide 5" },
    { id: 6, src: "/hoe.png", alt: "Slide 6" },
  ];

  return (
    <div className="container  flex flex-col items-center justify-center gap-4 w-full h-[300px]">
      <div className="w-full max-w-[500px] flex flex-col items-center"> {/* Adjusted max width */}
        <Swiper
          modules={[Pagination, Autoplay]} // Correct module import for Swiper 11+
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // 3 seconds delay between each slide change
            disableOnInteraction: false, // Keeps autoplay working even if the user interacts
          }}
          pagination={{
            clickable: true, // Pagination is clickable
          }}
        >
          {carouselImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex justify-center">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
