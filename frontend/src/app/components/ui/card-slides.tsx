"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {img: "/cards/airbnb-gift-card-q2u1rsm66dh8q4gs5pydb4w3tazanbkzovp7hcvthm.png", 
    title: "Airbnb", 
    subtitle: "promo", 
    cashback: "Get 6% Cash back Rewards"},
    {img: "/cards/EDIT-Foot-Locker-GC1-plx43vqu79o7jwbkkd0tzxrpv2bkk615iz1p85t2i4.png", 
    title: "Foot Locker", 
    subtitle: "promo", 
    cashback: "Get 2% Cash back Rewards" },
    {img: "/cards/EDIT-Saks-GC7-plwzxp36882wiuh1jfyrlu4cyqkap5t3jmksskhkoc.png", 
    title: "Saks Fifth Avenue", 
    subtitle: "promo", 
    cashback: "Get 2% Cash back Rewards" },
    {img: "/cards/EDIT-Uber-GC-plx4g3nb1qeehekl7n68eurfve3cmijj7gcxtnotni.png", 
    title: "Uber", 
    subtitle: "promo", 
    cashback: "Get 2% Cash back Rewards" },
    {img: "/cards/EDIT-Wayfair-GC-plx4h0jnoxnfrr8svje6c4gknvl73x64zz6xmcc1kc.png", 
    title: "Wayfair", 
    subtitle: "promo", 
    cashback: "Get 2% Cash back Rewards" },
    {img: "/cards/esso-gift-card-2023-jpg-q1ho9ojm41yq0b5vqufz8ryx2ea7ueasptxlfe2j1o.webp", 
    title: "Esso", 
    subtitle: "promo", 
    cashback: "Get 2% Cash back Rewards" },
];


export default function CardSlider(){
    return (
        <div className="px-3">
            <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
                480: {slidesPerView: 4, spaceBetween:50}
            }}
            >
                {slides.map((slide,i)=>(
                    <SwiperSlide key={i} className="rounded-xl max-w-72">
                        <img className="w-72" src={slide.img} alt={slide.title} />
                        <div className="p-2 pb-10 md:pb-14">
                            <p className="uppercase text-xxs">{slide.subtitle}</p>
                            <p className="font-semibold text-sm">{slide.title}</p>
                            <p className="text-xs text-black/50">{slide.cashback}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}