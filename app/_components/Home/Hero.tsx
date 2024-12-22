"use client"

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import ScrollBaseAnimation from '../text-marquee';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const statistics = [
    { title: 'kommuner', value: 47, suffix: '+' },
    { title: 'Våra Kunder', value: 157, suffix: 'K' },
    { title: 'Erfarenhet', value: 5, suffix: 'år' }
];

const cities = ' Göteborgs stad | Borås stad | Mölndals stad | Trollhättans stad | Skövde kommun | Uddevalla kommun | Partille kommun | Vänersborgs kommun | Alingsås kommun | Lidköpings kommun';

const Counter = ({ from, to, suffix }: any) => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            // @ts-ignore
            controls.start({ count: to, transition: { duration: 2, ease: 'easeOut' } });
        }
    }, [isVisible, controls, to]);

    return (
        <div ref={ref} className='flex '>
            <motion.div
                animate={controls}
                // @ts-ignore
                initial={{ count: from }}
                onUpdate={(latest) => {
                    const counterElement = document.getElementById(`counter-${to}`);
                    // @ts-ignore
                    if (counterElement) counterElement.textContent = Math.floor(latest.count).toString();
                }}
                className="text-7xl leading-none text-right uppercase max-md:text-4xl"
            >
                <span id={`counter-${to}`}>{from}</span>
            </motion.div>
            <span className="self-start text-4xl text-center">{suffix}</span>
        </div>
    );
};

export const TransportPage: React.FC = () => {
    const slides = [
        {
            title: (
                <h1 data-aos="fade-right" className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    <span className="text-sky-800">Transportlösningar</span>{' '}
                    <span className="text-sky-800">gjorda</span>{' '}
                    <span className="text-sky-800">enkla.</span>
                </h1>
            ),
            discription: (
                <p data-aos="fade-up-right" className="mt-8 text-lg leading-7 text-zinc-800 max-md:max-w-full">
                    Vi erbjuder pålitliga transportlösningar som är anpassade för att passa dina behov. Oavsett
                    om det är en enkel flytt eller en komplex leverans, gör vi det enkelt och smidigt för dig.
                </p>
            ),
            image: "/transport.png",
        },
        {
            title: (
                <h1 data-aos="fade-right" className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    <span className="text-sky-800">Professionell</span>{' '}
                    <span className="text-sky-800">rengöring</span>{' '}
                    <span className="text-sky-800">för dig.</span>
                </h1>
            ),
            discription: (
                <p data-aos="fade-up-right" className="mt-8 text-lg leading-7 text-zinc-800 max-md:max-w-full">
                    Våra professionella rengöringstjänster säkerställer att ditt hem eller kontor är skinande rent
                    och redo för användning. Upplev en renare miljö med vår hjälp.
                </p>
            ),
            image: "/cleaner.png",
        },
        {
            title: (
                <h1 data-aos="fade-right" className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                    <span className="text-sky-800">Flyttning</span>{' '}
                    <span className="text-sky-800">utan stress</span>{' '}
                    <span className="text-800-800">eller krångel.</span>
                </h1>
            ),
            discription: (
                <p data-aos="fade-up-right" className="mt-8 text-lg leading-7 text-zinc-800 max-md:max-w-full">
                    Låt våra pålitliga hjälpare göra din flytt enkel och smidig. Från packning till transport – vi
                    tar hand om allt för dig.
                </p>
            ),
            image: "/helper_main.png",
        },
    ];

    return (
        <div className='max-w-[100vw]'>
            <div className='relative w-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={28}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 28,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col w-full relative ">
                                <Image layout="fill" src={slide.image} alt="" className="object-cover z-0 h-full w-full" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-black/70 z-[1]"></div>

                                <div className="z-20 flex relative flex-col justify-center items-start px-20 py-36 mt-0 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
                                    <div className="flex z-0 flex-col justify-between max-w-full min-h-[348px] lg:w-[559px]">
                                        {slide.title}
                                        {slide.discription}
                                        <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center">
                                            <Link href="get-offer">
                                                <button className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-9 py-3.5 my-auto sm:w-48 text-white hover:bg-sky-900 bg-sky-800 rounded min-h-[46px] max-md:px-5">
                                                    Få erbjudande
                                                </button>
                                            </Link>
                                            <Link href="book-now">
                                                <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 hover:bg-emerald-600 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                                                    Boka nu
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="hidden lg:flex absolute right-[77px] top-[140px] z-10 flex-col max-w-full font-semibold text-white w-[187px]">
                    {statistics.map((stat, index) => (
                        <div key={index} className={`flex flex-col ${index > 0 ? 'mt-10' : ''}`}>
                            <div className="flex flex-col pl-9 w-full whitespace-nowrap max-w-[187px] text-right">
                                <div className="text-2xl uppercase">{stat.title}</div>
                                <div className="flex items-center justify-end gap-1 mt-2">
                                    <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="overflow-hidden relative gap-2.5 self-center px-2.5 py-12 -mt-6 sm:-mt-10 z-30 mx-auto  w-full text-2xl font-medium leading-loose text-white rounded-xl bg-sky-800 max-w-[1061px] max-md:max-w-full">
                <ScrollBaseAnimation scrollDependent={true}>{cities}</ScrollBaseAnimation>
            </div>
        </div>

    );
};
