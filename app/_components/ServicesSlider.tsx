"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const ServicesSlider = () => {

    const services = [
        {
            "name": "Städning",
            "title": "Professionella Städningstjänster",
            "description": "Våra städtjänster ger en fläckfri miljö för ditt hem eller kontor. Vi främjar en hälsosammare boende- och arbetsmiljö. Oavsett om du behöver en engångsstädning eller en återkommande tjänst, är vi flexibla för att passa ditt schema.",
            "image": "/cleaning.jpg",
            "link": "/book-now?service=cleaning"
        },
        {
            "name": "Transport",
            "title": "Professionella Transporttjänster",
            "description": "Våra transporttjänster säkerställer att dina tillhörigheter transporteras säkert. Med en flott av pålitliga fordon och erfarna förare ser vi till att dina saker når sin destination i tid. Oavsett om du behöver en liten van för lätta föremål eller ett större fordon för tunga möbler, har vi rätt alternativ för dig.",
            "image": "/transport.jpg",
            "link": "/book-now?service=transport"
        },
        {
            "name": "Flytthjälp",
            "title": "Professionella Flytthjälpstjänster",
            "description": "Våra flytthjälpstjänster är designade för att ta bort stressen från flytten. Från att packa dina tillhörigheter till tungt lyft, ser vi till att allt hanteras med omsorg. Oavsett om du flyttar inom staden eller till en ny plats, ger vårt team oöverträffat stöd.",
            "image": "/moving_helpers.jpg",
            "link": "/book-now?service=moving_helpers"
        },
    ];


    return (
        <section className="relative overflow-hidden bg-white pb-32 space-y-20">

            <h1 className="text-4xl md:text-6xl lg:text-7xl w-full text-center font-bold mb-20">Våra Tjänster</h1>

            <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    pagination={{
                        el: ".swiper-pagination1",
                        clickable: true,
                        renderBullet: (index: any, className: any) => {
                            return `<span class="${className}">${services[index].name}</span>`;
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {services.map((service: any, index: any) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full rounded-xl shadow-2xl"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black text-start">
                                        {service.title}
                                    </h2>
                                    <p className="mt-8 text-lg text-gray-700 text-start">
                                        {service.description}
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination1 mt-14 flex mx-2 justify-center "></div>
                    <div className="flex items-center justify-center">
                        <div className="mt-10 flex items-center justify-start ">
                            <Link href={"/book-now"}>
                                <button
                                    className=" rounded-full min-w-[200px] flex items-center justify-center bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                                >
                                    Boka nu
                                </button>
                            </Link>
                        </div>
                    </div>
                </Swiper>
            </div>
        </section >
    );
};

export default ServicesSlider;
