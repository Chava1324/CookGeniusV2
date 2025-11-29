import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import "../styles/custom.css";

const ImageCarousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
        
    ];
    
    

return (
    <section className="carousel-section">
        <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
            }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="mySwiper"
        >
            {images.map((img, i) => (
                <SwiperSlide key={i}>
                    <img src={img} alt={`slide-${i}`} className="carousel-img" />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);
};

export default ImageCarousel;
