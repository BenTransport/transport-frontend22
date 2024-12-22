import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <div className="pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-4 lg:grid-cols-6 md:px-24 lg:px-8 px-4  ">
                <div className="sm:col-span-2">
                    <Link href={"/"}>
                        <img
                            loading="lazy"
                            src="/logo_new.png"
                            alt="Company Logo"
                            data-aos="fade-right"
                            className="object-contain shrink-0 self-stretch my-auto aspect-[1.88] w-[160px]"
                        />
                    </Link>
                    <div className="lg:max-w-sm">
                        {/* <p className="text-sm text-gray-800">
                        Vi är specialiserade på att erbjuda förstklassiga tjänster för städning, flytthjälp och transport. Oavsett om du planerar att flytta, behöver extra hjälp eller vill ha ditt utrymme städat till perfektion, är vi här för att få det att hända.
                        </p> */}
                        <div className="flex items-center my-2 space-x-3">
                            <a href="https://m.facebook.com/100076726356313/" className="hover:text-gray-900 text-gray-500"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/_forareakuten_?igsh=MXJqZHJ4MWhocTNleA==" className="hover:text-gray-900 text-gray-500"><Instagram size={20} /></a>
                        </div>
                        <p className=" text-sm text-gray-500">
                            Följ oss för uppdateringar och exklusiva erbjudanden.
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Sidor</p>
                    <div
                        className=" flex flex-col mt-5 gap-3">

                        <Link href={'/'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Hem
                        </Link>
                        <Link href={'/about-us'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Om US
                        </Link>
                        <Link href={'/partner'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Bli partner
                        </Link>

                        <Link href={'/work'} className={`${true ? "text-black" : "text-white"} hover:scale-x-110 hover:rotate-6 duration-250 transition-all`}>
                            Arbeta med oss
                        </Link>
                    </div>

                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Kontakt</p>
                    <div className="flex mt-5">
                        <p className="mr-1 text-gray-800"><Phone className='h-5 w-5 mr-1' /></p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-[#4B4B4B] hover:text-gray-700"
                        >
                            8888888
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800"><Mail className='h-5 w-5 mr-1' /></p>

                        <a
                            href="mailto:info@movingandmore.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-[#4B4B4B] hover:text-gray-700"
                        >
                            info@moving.com
                        </a>
                    </div>
                </div>

                <div className="sm:col-span-2 hidden sm:flex flex-col">

                    <p className="text-base font-bold tracking-wide text-gray-900">Maps Location</p>
                    <div className="h-60 mt-5 rounded-xl overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d25678.628924030276!2d23.302563130098882!3d42.69970448884887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!3m2!1d42.6977082!2d23.3218675!5e0!3m2!1sen!2s!4v1733226455494!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-0 justify-center flex-col-reverse bg-[#075985] sm:justify-between py-5 md:px-24 lg:px-8 px-4 border-t lg:flex-row">
                <p className="text-sm text-white">
                    © {new Date().getFullYear()} Moving and More. All rights reserved.
                </p>
                <div className="flex space-x-4 md:space-x-6 text-white">
                    <a href="#" className="hover:text-gray-400"><Facebook size={16} /></a>
                    <a href="https://www.instagram.com/_forareakuten_?igsh=MXJqZHJ4MWhocTNleA==" className="hover:text-gray-400"><Instagram size={16} /></a>

                    {/* <a href="#" className="hover:text-gray-400"><Twitter size={16} /></a> */}
                    {/* <a href="#" className="hover:text-gray-400"><Youtube size={16} /></a> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
