import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";

import { Container } from "@mui/material";
import { useSwiper } from "swiper/react";

import "./hero.css";
const HeroComponent = () => {
  const data = [
    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17149817329368458.jpg&w=1920&q=75",
    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17150530820551897.jpg&w=1920&q=75",
    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17146149031826662.jpg&w=1920&q=75",
    "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fpm2ec.s3.ap-southeast-1.amazonaws.com%2Fcms%2F17150541229617388.jpg&w=1920&q=75",
  ];
  const swiper = useSwiper();
  return (
    <div style={{ marginTop: 40 }}>
      <Container>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ el: ".swiper-pagination" }}
          className={`mySwiper  `}
          modules={[Autoplay, Pagination, FreeMode, Navigation]}
        >
          {data.map((src, index): any => {
            return (
              <>
                <SwiperSlide key={index}>
                  <img src={src} alt="" className="image" />
                </SwiperSlide>
              </>
            );
          })}
          <div className="swiper_button">
            <div
              className="swiper-button-next"
              onClick={() => swiper && swiper.slideNext()}
            ></div>
            <div
              className="swiper-button-prev"
              onClick={() => swiper && swiper.slidePrev()}
            ></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default HeroComponent;
