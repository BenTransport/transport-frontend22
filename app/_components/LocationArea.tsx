import Link from 'next/link'
import React from 'react'

function LocationArea() {
    return (
        <section className="flex flex-col  items-center justify-center py-16 px-4 ">
            <div className=" w-full lg:w-7/12 xl:w-8/12 flex flex-col items-start justify-center ">
                <h2 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="text-4xl lg:text-6xl text-center font-bold text-gray-800">Behöver du våra tjänster i ditt område?</h2>
                <p className="text-lg text-gray-600 leading-relaxed my-4 mb-10 text-center">
                    Vi erbjuder pålitliga flytt- och transportlösningar över ett brett geografiskt område. Är du osäker på om vi täcker ditt område? Skicka oss dina uppgifter för att ta reda på hur vi kan hjälpa till.
                </p>


            </div>

            <div className="flex gap-3 items-center self-start mt-8 mx-auto text-base font-medium text-center">
                <Link href="get-offer">
                    <button className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-9 py-3.5 my-auto sm:w-48 text-white bg-sky-800 rounded min-h-[46px] max-md:px-5">
                        Få erbjudande
                    </button>
                </Link>
                <Link href="book-now">
                    <button className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                        Boka nu
                    </button>
                </Link>
            </div>

            {/* <div className=" w-full flex justify-center">
                <img
                    src="/map.svg"
                    alt="Service Map"
                    className="max-w-full h-auto"
                />
            </div> */}
        </section>

    )
}

export default LocationArea