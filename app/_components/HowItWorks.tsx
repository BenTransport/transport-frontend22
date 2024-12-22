"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const HowItWorks = () => {
  useEffect(() => {
    Swiper.use([Pagination, Autoplay]);
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    return () => swiper.destroy();
  }, []);
  const howItWorks = [
    {
      stepNumber: "1:a Steg",
      title: "Begär ett erbjudande",
      description:
        "Börja med att fylla i vårt formulär 'Få erbjudande' med dina uppgifter. Dela information om dina flytt- eller transportbehov, som typ av objekt, upphämtningsplats och destination. Detta hjälper oss att skräddarsy en lösning som passar dina behov bäst. Vårt team kommer att granska dina uppgifter och återkomma till dig snabbt med de bästa alternativen.",
    },
    {
      stepNumber: "2:a Steg",
      title: "Välj dina tjänster",
      description:
        "När du har fått ett erbjudande, välj de tjänster du behöver. Oavsett om det bara är ett transportfordon, ett team av professionella hjälpare eller ett komplett flyttpaket, erbjuder vi flexibla alternativ som passar din budget och dina preferenser. Du kan anpassa dina tjänster för att matcha dina specifika krav.",
    },
    {
      stepNumber: "3:e Steg",
      title: "Schemalägg din flytt",
      description:
        "Välj ett bekvämt datum och tid för din flytt. Vårt team säkerställer att vi kommer i tid och arbetar runt ditt schema för att göra processen smidig och utan stress. Vi prioriterar punktlighet för att hålla din flytt stressfri och effektiv.",
    },
    {
      stepNumber: "4:e Steg",
      title: "Slappna av och koppla av",
      description:
        "Med allt planerat och schemalagt kan du luta dig tillbaka och vara lugn. Vårt expertteam kommer att ta hand om allt tunga lyft och säkerställa att dina tillhörigheter transporteras säkert och effektivt till sin destination. Njut av en sömlös upplevelse med vårt professionella stöd genom hela processen.",
    },
    
  ];

  return (
    <section className=" relative">
      <div className="w-full max-w-7xl px-4 lg:p-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex my-4 mb-10">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              Vår Process
            </h1>
            <h2 className="w-full text-center text-primaryColor text-xl font-manrope leading-normal">
            Enkelt, Snabbt och Pålitligt
            </h2>
          </div>
          <div className="w-full justify-start lg:items-end items-center lg:gap-16 gap-4 flex lg:flex-row flex-col">
            <img
              className="h-80 rounded-xl w-auto hidden lg:flex"
              src="/get-car.jpg"
              alt="How It Works image"
            />
            <div className="swiper mySwiper flex flex-col lg:gap-32 gap-10 w-full">
              <div className="swiper-wrapper mb-16">
                {howItWorks.map((item: any, index: number) => (
                  <div className="swiper-slide" key={index}>
                    <div className="w-full flex-col justify-center items-start flex">
                      <span className="w-full text-[#48575F] text-base font-medium leading-relaxed lg:text-start text-center">
                        {item.stepNumber}
                      </span>
                      <div className="w-full flex-col justify-center lg:items-start items-center gap-1.5 flex">
                        <h4 className="text-gray-900 text-xl md:text-2xl xl:text-4xl font-bold leading-8 lg:text-start text-center mb-6">
                          {item.title}
                        </h4>
                        <p className="lg:max-w-3xl w-full text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination lg:justify-start justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
