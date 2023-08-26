import React from 'react';
import styles from './Slider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {SliderProducts} from "../../data/products";
import CardS from "./card/CardS";

const Slider = () => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                className={styles.swiper}
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide key={i} className={styles.swiperSlider}>
                        <CardS product={slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};

export default Slider;