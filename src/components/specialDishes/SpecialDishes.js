import React from 'react';
import dishes from './specialDishes.json';
import SlideSpecialDish from './SlideSpecialDish';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "./SpecialDishes.module.css";

function SpecialDishes() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
        >
            {dishes.map(dish => (
                <SwiperSlide key={dish.id}>
                    <SlideSpecialDish
                        id={dish.id}
                        topic={dish.topic}
                        name={dish.name}
                        description={dish.description}
                        img={dish.img}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SpecialDishes;

