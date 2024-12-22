import React from 'react'
import PartnerForm from '../_components/partnersForm'
import WorkWithUs from '../_components/WorkWithUs'

function page() {
    return (
        <div className="">
            <div className="relative z-0 flex-col flex items-center justify-center w-full   max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">

                <img
                    src={"/cargo.png"}
                    alt="banner"
                    className="object-cover z-10 absolute inset-0 size-full"
                />
                <div
                    className="object-cover z-10 absolute inset-0 size-full bg-[#0d0c0c6d]"
                >

                </div>
                <div className='flex flex-col items-center justify-center z-30'>
                    <div className='flex flex-col mt-36 items-center justify-center  text-3xl md:text-5xl lg:text-6xl xl:text-7xl z-30  font-bold'>

                        <h1 data-aos="fade-down" className="text-6xl font-bold text-sky-800 leading-[73px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                            <span className='text-white'>
                            Arbeta med oss
                            </span>
                        </h1>
                    </div>

                </div>
                <div className="flex rounded-2xl relative  mx-auto my-4 mt-20 mb-20  z-20 w-full items-center justify-center" data-aos="fade-up">


                    <WorkWithUs />

                </div>
            </div>
        </div>
    )
}

export default page