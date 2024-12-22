import React from 'react'
import GetOffer from '../_components/OfferForm'

function page() {
    return (
        <main className="flex flex-col  text-center text-white bg-slate-50">
            <div className="relative  z-10 flex-col flex items-center justify-center w-full  max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
                <img
                    src={"/cargo.png"}
                    alt="banner"
                    className="object-cover -z-10 absolute inset-0 size-full"
                />
                <div
                    className="object-cover z-10 absolute inset-0 size-full bg-[#0d0c0c3f]"
                >

                </div>
                <h1 className="z-10 font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl  mt-32" data-aos="fade-down">
                Få ett anpassat erbjudande
                </h1>
                <div className="flex rounded-2xl  mx-auto my-20  z-[30] w-full items-center justify-center" data-aos="fade-up">
                    <GetOffer />
                </div>
            </div>
            {/* <div className='hidden lg:flex items-start my-14 px-7 justify-between gap-x-8 h-full w-full'>
                <img src="/move-get-2.jpg" alt="" className='w-6/12 rounded-3xl' />
                <GetOffer />
            </div> */}
        </main>
    )
}

export default page