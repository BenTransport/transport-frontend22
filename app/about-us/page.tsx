import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutUs from '../_components/AboutUs'
import ServicesMain from '../_components/ServicesMain'
import LocationArea from '../_components/LocationArea'

function page() {
    return (
        <>
            {/* <div className="w-full text-white pt-14 lg:pb-0 flex flex-col lg:min-h-[100vh] h-[100vh] justify-between relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={"/home-open-boxes.jpeg"}
                        layout="fill"
                        objectFit="cover"
                        alt="Moving Boxes"
                        className="opacity-60"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-60 z-10"></div>

                <div className="relative z-20 flex sm:flex-row flex-col w-full h-full justify-between">
                    <div className="sm:w-7/12 w-full lg:pl-24 sm:pl-10 pl-6 pt-16 sm:px-0 px-6">
                        <h1
                            data-aos="fade-right"
                            className="2xl:text-[120px] font-bold lg:text-6xl md:text-5xl text-4xl sm:pr-10 pr-0 leading-tight tracking-tight drop-shadow-lg"
                        >
                            Moving Made Simple
                        </h1>

                        <p className="text-lg mt-3" data-aos="fade-down">
                            Vehicles, Helpers, and Solutions Tailored to You
                        </p>

                        <h2 className="md:text-lg text-sm opacity-90 md:pt-4 pt-2 pb-8 tracking-wide">
                            Whether you're relocating, shipping goods, or just need a helping hand, we make the process seamless and stress-free. <br />
                            <span className="italic">Because moving doesn’t have to be complicated.</span>
                        </h2>

                        <div className="w-fit">
                            <Link href={"/get-offer"}>
                                <div
                                    className={`bg-white text-black hover:bg-black hover:text-white py-2 px-3 sm:px-5 min-w-[150px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base hover:border-black transition-colors`}
                                >
                                    Boka nu
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <section className="about-section py-24 mt-10">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-wrap">
                        <div className="content-column order-2 lg:order-1 lg:w-1/2 w-full z-10">
                            <div className="inner-column lg:pl-8">

                                <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-xl sm:text-2xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                                        <div className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[70px]  sm:w-[115px]" />
                                        <div className="self-stretch text-[#1CAC78] my-auto">Om Oss</div>
                                    </div>
                                    <div data-aos="fade-down" className="mt-4 text-3xl sm:text-4xl leading-10 text-gray-900 max-md:max-w-full">
                                        Förenkla <span className="text-sky-800">Flytt och transport</span> med Excellens
                                    </div>
                                </div>
                                <p className="text-gray-500 text-base leading-relaxed my-8">
                                    På vårt företag tror vi på att göra livet enklare genom att erbjuda pålitliga och effektiva lösningar för flytt, städning
                                    och transport. Oavsett om det handlar om att hjälpa dig att flytta, erbjuda professionella städtjänster eller
                                    säkerställa punktlig transport.
                                </p>
                                <ul className="list-style-one space-y-3 mb-8">
                                    <li className="relative pl-8 text-gray-800">
                                        <span className="absolute left-0 top-0 text-blue-600 font-bold text-lg">&#10004;</span>
                                        Över ett decennium av erfarenhet inom flytt och transporttjänster
                                    </li>
                                    <li className="relative pl-8 text-gray-800">
                                        <span className="absolute left-0 top-0 text-blue-600 font-bold text-lg">&#10004;</span>
                                        Betrodd av mer än 100 000 nöjda kunder världen över
                                    </li>
                                    <li className="relative pl-8 text-gray-800">
                                        <span className="absolute left-0 top-0 text-blue-600 font-bold text-lg">&#10004;</span>
                                        Verksam på över 20 platser för att bättre kunna hjälpa dig
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="image-column hidden lg:flex lg:w-1/2 w-full relative lg:pl-12 lg:order-2 order-1 mb-8 lg:mb-0">
                            <div className="inner-column relative ">
                                <div className="absolute -left-20 -z-30 top-16 h-[520px] w-[520px] bg-no-repeat bg-center" style={{ backgroundImage: "url('https://i.ibb.co/fxJ1jtC/about-circle-1.png');" }}></div>
                                <figure className="image-1 z-50">
                                    <a href="#" className="block">
                                        <img src="/move.jpg" alt="" className="shadow-lg rounded-xl" />
                                    </a>
                                </figure>
                                {/* <figure className="image-2 absolute bottom-0 left-0">
                                    <a href="#" className="block">
                                        <img src="/happy family.jpg" alt="" className="shadow-lg" />
                                    </a>
                                </figure> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUs />


            <section className="py-24 relative max-w-[100vw] overflow-x-hidden">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h1 className="text-2xl sm:text-4xl font-bold text-sky-800 ">
                                        <span className="text-zinc-800">Reliable {" "}</span>
                                        <span className='text-[#1CAC78]'>
                                            Flytt och Transport{' '}
                                        </span>
                                        <span className="text-zinc-800">Services</span>
                                    </h1>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed text-start">
                                        På vårt företag är vi engagerade i att förenkla livet genom att erbjuda pålitliga flytt- och
                                        transportlösningar. Oavsett om det handlar om en lokal flytt eller en långdistansflytt är vårt mål att
                                        säkerställa en stressfri upplevelse för varje kund.
                                    </p>
                                </div>

                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">5+</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">År av expertis</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">157k+</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                            kunder betjänade
                                        </h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">10+</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                            Aktiva servicelokationer
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center">

                                <Link href="book-now">
                                    <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                                        Boka nu
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/get-car.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/pack--box.jpg"
                                alt="about Us image" />
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div
                                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="/pexels-cottonbro-4569340.jpg" alt="about Us image" />
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">

                                        <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                                            <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-lg sm:text-xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                                                <div
                                                    className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[70px]  sm:w-[115px]"

                                                />
                                                <div className="self-stretch text-[#1CAC78] my-auto">Vår framgång i siffror</div>
                                            </div>
                                            <div data-aos="fade-down" className="mt-4 text-3xl sm:text-4xl leading-10 text-gray-900 max-md:max-w-full">
                                                Enkla flytt. <br />
                                                Lokal eller lång. <br />
                                                <span className="text-sky-800">Flytt & städ.</span>
                                            </div>


                                        </div>

                                        <p
                                            className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">

                                            Vi är dedikerade till att förenkla liv genom att erbjuda pålitliga flytt- och transportlösningar.
                                            Oavsett om det är en lokal flytt eller en långdistansflytt,
                                            är vårt uppdrag att säkerställa en stressfri upplevelse för varje kund.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">5+ år</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">År av expertis</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">157k+
                                                Kunder</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Betjänade </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">7+ Plats</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Aktiva tjänsteplatser</p>
                                        </div>
                                        <div
                                            className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Stressfri</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Flytt-, Transport- och Städtjänster</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <div className="flex flex-col w-full font-bold uppercase max-md:max-w-full">
                                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-lg sm:text-xl leading-none text-sky-800 tracking-[5.52px] max-md:max-w-full">
                                        <div
                                            className="h-[2px] rounded-md my-auto bg-[#1CAC78] w-[70px]  sm:w-[115px]"

                                        />
                                        <div className="self-stretch text-[#1CAC78] my-auto">Why Choose Us</div>
                                    </div>
                                    <div data-aos="fade-down" className="mt-4 text-3xl sm:text-4xl leading-10 text-gray-900 max-md:max-w-full">
                                        Simplifying <span className="text-sky-800">Your Moving Experience</span>
                                    </div>
                                </div>

                                <p data-aos="fade-down" className="mt-6 text-lg leading-8 text-gray-600">
                                    Our goal is to make your experience seamless, efficient, and stress-free, whether you're moving homes or require assistance with daily tasks.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9" data-aos="fade-right">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-secondaryColor">
                                                <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                                                <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                                                <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                                            </svg>
                                            Expert Cleaning Services
                                        </dt>
                                        <dd className="inline ml-3">
                                            Our professional cleaning teams ensure your space is spotless, whether it's post-move cleaning or regular upkeep.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9" data-aos="fade-right">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-secondaryColor">
                                                <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd"></path>
                                            </svg>
                                            Reliable Helpers
                                        </dt>
                                        <dd className="inline ml-3">

                                            Need an extra pair of hands? Our trained helpers assist with packing, lifting, and organizing to make your move hassle-free.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9" data-aos="fade-right">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-secondaryColor">
                                                <path fill-rule="evenodd" d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            Efficient Transport Solutions
                                        </dt>
                                        <dd className="inline ml-3">

                                            From small vans to large trucks, our transport services ensure your belongings are moved safely and on time.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <img src="/test.jpg" alt="Moving and Transport Services" className="w-[48rem] hidden lg:flex max-w-none sm:w-[57rem] rounded-3xl md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                    </div>
                </div>
            </section>
            {/* <p data-aos="fade-right" className="mt-10  text-3xl text-center max-w-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
            </p>
            <div className='mt-10'>
                <ServicesMain />
            </div> */}

            <LocationArea />


        </>
    )
}

export default page