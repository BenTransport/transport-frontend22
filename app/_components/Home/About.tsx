"use client"

import Link from 'next/link';
import * as React from 'react';

const checklistItems = [
    "A decade of expertise in moving and transport services.",
    "Trusted by over 100k satisfied customers worldwide.",
    "Operating in 20+ locations to serve you better."
];

export const AboutSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-10  px-20 py-5 max-md:px-5">
            <div className="flex flex-col justify-center self-stretch sm:py-16 ">
                <img src="/about.png" alt="" />
            </div>
            <div className="flex flex-col justify-between items-center self-stretchmy-auto ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col justify-between w-full">

                        <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                            <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-xl sm:text-2xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                                <div
                                    className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[70px]  sm:w-[115px]"
                                />
                                <div className="self-stretch text-[#1CAC78] my-auto">Om Oss</div>
                            </div>
                            <div data-aos="fade-down" className="mt-4 text-2xl md:text-4xl leading-10 text-gray-900 max-md:max-w-full">
                                Levererar   <span className="text-sky-800">smidiga</span> flyttupplevelser
                            </div>
                        </div>
                        <div className="flex flex-col justify-between mt-7 w-full min-h-[272px] max-md:max-w-full">
                            <div className="text-base leading-7 text-zinc-800 max-md:max-w-full">
                                Vi tror på att förenkla livet genom att erbjuda pålitliga och effektiva flytt- och transportlösningar.
                                Vår mission är att göra varje flytt stressfri och se till att våra kunder känner sig stöttade och trygga genom hela processen. Vi brinner för att erbjuda
                                förstklassiga tjänster som möter en rad olika behov.
                            </div>
                            <div className="flex flex-col pt-4 pb-6 mt-3 w-full max-md:max-w-full">
                                {checklistItems.map((item, index) => (
                                    <div key={index} className="mt-3 first:mt-0">
                                        <div className="flex gap-3 items-center w-full max-md:max-w-full">
                                            <div className="self-stretch my-auto text-xl leading-snug text-cyan-700 whitespace-nowrap">
                                                ✔
                                            </div>
                                            <div className="self-stretch my-auto text-base text-gray-700 min-w-[240px]">
                                                {item}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="book-now">
                        <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                            Boka nu
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};
