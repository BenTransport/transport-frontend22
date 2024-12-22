"use client"

import React, { useState } from "react";

const FAQ = () => {
    const faqData = [
            {
                question: "Hur kan jag boka ett fordon eller hjälp?",
                answer:
                    "För att boka ett fordon eller hjälp, klicka på knappen 'Få erbjudande' eller 'Boka nu' på vår webbplats. Fyll i formuläret med dina krav, så ger vi dig de bästa alternativen som passar dina behov.",
            },
            {
                question: "Vilka tjänster erbjuder ni?",
                answer:
                    "Vi erbjuder ett utbud av tjänster, inklusive uthyrning av fordon för flytt eller frakt, professionella hjälpmedel för packning och lastning, samt fullständig flytthjälp för att göra din flytt stressfri.",
            },
            {
                question: "Hur fungerar bokningsprocessen?",
                answer:
                    "Det är enkelt! Välj de tjänster du behöver, lämna dina uppgifter i formuläret 'Få erbjudande', och välj ett lämpligt datum och tid. Vårt team tar hand om resten för att säkerställa en smidig upplevelse.",
            },
            {
                question: "Vad gör era tjänster unika?",
                answer:
                    "Vi erbjuder en flotta av pålitliga fordon, utbildade och professionella hjälpmedel, och prisvärd prissättning utan dolda avgifter. Vår flexibla schemaläggning och vårt engagemang för kundnöjdhet skiljer oss från andra.",
            },
        // {
        //     question: "Can I trust your team with my belongings?",
        //     answer:
        //         "Absolutely! Our helpers are trained and reliable professionals who handle your belongings with utmost care. We prioritize safety and efficiency in every move.",
        // },
        // {
        //     question: "Do you provide assistance for fragile items?",
        //     answer:
        //         "Yes, we offer specialized handling and transport for fragile items to ensure they reach their destination safely.",
        // },
        // {
        //     question: "Can I book a service without a helper or vehicle?",
        //     answer:
        //         "Yes, you can customize your booking to include only the services you need, whether it’s just a vehicle, helper, or both.",
        // },
        // {
        //     question: "How far in advance should I book a service?",
        //     answer:
        //         "We recommend booking your service at least a few days in advance to ensure availability, especially during peak times.",
        // },
        // {
        //     question: "What is your cancellation policy?",
        //     answer:
        //         "We offer a flexible cancellation policy. Please refer to our terms and conditions or contact our support team for details about cancellations and refunds.",
        // },
        // {
        //     question: "Do you offer services in my area?",
        //     answer:
        //         "We operate across a wide range of locations. Click on 'Få erbjudande' and enter your location details to check availability in your area.",
        // },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex w-full mx-auto ">
                    {/* <div className="w-full lg:w-1/2">
                        <img
                            src="/move-van.jpg"
                            alt="FAQ Section"
                            className="w-full rounded-xl object-cover"
                        />
                    </div> */}

                    {/* FAQ Content */}
                    <div className="w-full">
                        <div className="">
                            <div className="mb-6 lg:mb-16">
                                <h6 className="text-lg text-center font-medium text-gray-600 mb-2 lg:text-left">
                                    FAQs
                                </h6>
                                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                                Letar du efter svar?
                                </h2>
                            </div>
                            <div>
                                {faqData.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="accordion pb-8 border-b border-solid border-gray-200"
                                    >
                                        <button
                                            className="accordion-toggle group inline-flex items-center justify-between w-full text-xl font-normal leading-8 text-gray-600 transition duration-500 hover:text-gray-600"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h5>{faq.question}</h5>
                                            <svg
                                                className={`text-gray-900 transition duration-500 group-hover:text-gray-600 ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ${openIndex === index ? "max-h-screen" : "max-h-0"
                                                }`}
                                        >
                                            <p className="text-base font-normal text-gray-600 mt-4">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
