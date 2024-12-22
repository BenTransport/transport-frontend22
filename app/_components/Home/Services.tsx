"use client"

import * as React from "react";
import { ServiceCard } from "./ServicesCard";

const servicesData: any = [
    {
        title: "Professionell Städservice",
        description: "Vi erbjuder städning för både hem och kontor, och skapar en ren och hälsosam miljö. Oavsett om du behöver en engångsstädning eller regelbundet underhåll, anpassar vi oss efter ditt schema.",
        isHighlighted: false,
        image: "/service_1.png"
    },
    {
        title: "Säker och Effektiv Transport",
        description: "Vi transporterar dina tillhörigheter säkert och i tid med pålitliga fordon och erfarna förare. Oavsett om du behöver en liten skåpbil eller ett större fordon för möbler, har vi rätt alternativ för dig.",
        isHighlighted: true,
        image: "/service_2.png"

    },
    {
        title: "Pålitligt Flyttstöd",
        description: "Få hjälp med packning och tunga lyft. Vi gör din flytt enklare, oavsett om det är inom staden eller längre bort. Vårt erfarna team tar hand om allt med omsorg.",
        isHighlighted: false,
        image: "/service_3.png"
    }
];

export const ServicesSection: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center mt-10 sm:mt-0  ">
            <div className="flex flex-col w-11/12  ">
                <div className="flex flex-col w-full uppercase max-md:max-w-full">
                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-2xl font-bold leading-none text-[#1CAC78] tracking-[5.52px] max-md:max-w-full">
                        <div className="shrink-0 self-stretch my-auto rounded-md h-0.5 border-2 border-[#1CAC78]  border-solid w-[86px]" />
                        <div className="self-stretch my-auto">Våra tjänster</div>
                    </div>
                    <div data-aos="fade-up-right" className="mt-4 text-4xl font-semibold leading-tight text-sky-800 max-md:max-w-full">
                        <span className="font-bold">Vad  </span>
                        <span className="font-bold text-sky-800">vi gör</span>
                    </div>
                </div>
                <div className="gap-10 -start mt-20 place-content-center place-items-center gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service: any, index: number) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                            isHighlighted={service.isHighlighted}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};