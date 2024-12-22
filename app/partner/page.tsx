import React from 'react'
import { ArrowRight, Truck, Sparkles, Users, DollarSign, Clock, Star } from 'lucide-react'
import PartnerForm from '../_components/partnersForm'

export default function BeOurPartner() {
    return (
        <div className="">
            <div className="relative z-0 flex-col flex items-center justify-center w-full   max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
                <img
                    src={"/pexels-cottonbro-4569340.jpg"}
                    alt="banner"
                    className="object-cover -z-10 absolute inset-0 size-full"
                />
                <div
                    className="object-cover z-10 absolute inset-0 size-full bg-[#0d0c0c9c]"
                >

                </div>
                <div className='flex flex-col mt-36 items-center justify-center  text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-30  font-bold'>

                    <h1 data-aos="fade-down" className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                        <span className="text-white">  Gå med i vårt {" "}</span>
                        <span className='text-[#1CAC78]'>
                        Flyttjänst {" "}
                        </span>
                        <span className="text-white">nätverk</span>
                    </h1>

                    <p className="text-xl text-white max-w-3xl mx-auto mb-8 font-normal text-center">
                    Bli en partner som städare, transportör eller hjälpare och väx med vår innovativa flyttjänstplattform.
                    </p>
                </div>
                <div className="flex rounded-2xl relative  mx-auto my-4 mb-20  z-20 w-full items-center justify-center" data-aos="fade-up">
                    <PartnerForm />
                </div>
            </div>



        </div>
    )
}

