"use client"

import React from "react";
import { useRouter } from "next/navigation";

function ServicesMain() {
    const router = useRouter();

    const handleBooking = (service: string) => {
        router.push(`/book-now`);
    };

    return (
        <div className="relative overflow-hidden bg-white pb-32 space-y-20">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                        Professionella städtjänster
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                        Våra städtjänster erbjuder en fläckfri miljö för ditt hem eller kontor. 
                        Vi främjar en hälsosammare boende- och arbetsmiljö. Oavsett om du behöver en engångsdjupstädning eller en återkommande tjänst,
                         är vi flexibla för att passa ditt schema.

                        </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Djuprengöring för hem och kontor
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Ekologiska och säkra produkter
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Flexibla schemaläggningsalternativ
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("cleaning")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Boka nu
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/cleaning.jpg"
                            alt="Cleaning Service"
                        />
                    </div>
                </div>
            </div>


            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mt-12 sm:mt-16 lg:mt-0 hidden lg:flex">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/get-car.jpg"
                            alt="Transport Service"
                        />
                    </div>
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                        Säkra och Effektiva Transporttjänster
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                        Våra transporttjänster säkerställer att dina tillhörigheter flyttas säkert. 
                        Med en flotta av pålitliga fordon och erfarna förare ser vi till att dina saker når sin destination i tid. Oavsett om du behöver en liten skåpbil för lätta saker eller ett större fordon för tunga möbler, 
                        har vi rätt alternativ för dig.
                        </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Flera fordonsalternativ för att matcha dina flyttbehov.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Professionella förare som säkerställer säker och snabb leverans.
                            </li>
                            {/* <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                GPS tracking available for real-time location updates.
                            </li>  */}
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("transport")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Boka nu
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 flex lg:hidden">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/get-car.jpg"
                            alt="Transport Service"
                        />
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">

                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none  lg:px-0">

                        <h2 className="text-3xl text-start lg:text-4xl font-bold tracking-tight text-black">
                        Pålitliga flytthjälpstjänster
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 text-start">
                        Våra hjälptjänster är utformade för att ta bort stressen från flytten. Från att packa dina tillhörigheter till
                        tungt lyft, ser vi till att allt hanteras med omsorg. Oavsett om du flyttar inom staden eller till en ny plats, 
                        erbjuder vårt team oöverträffat stöd. </p>
                        <ul className="mt-4 space-y-2 flex flex-col">
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Professionella och erfarna flytthjälpare.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Hjälp med packning, uppackning och organisering.
                            </li>
                            <li className="inline-flex items-center gap-2 text-black">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-[#4B4B4B]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51Z"></path>
                                </svg>
                                Säker hantering av ömtåliga och värdefulla föremål.
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center justify-start">
                            <button
                                onClick={() => handleBooking("helper")}
                                className="inline-flex rounded-full bg-[#4B4B4B] px-6 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-gray-700"
                            >
                                Boka nu
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <img
                            loading="lazy"
                            width={647}
                            height={486}
                            className="w-full rounded-xl shadow-2xl"
                            src="/helper.jpg"
                            alt="Helper Service"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServicesMain;
