"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

const faqData: any[] = [
    {
        question: "How can I book a vehicle or helper?",
        answer: "To book a vehicle or helper, click on the 'Få erbjudande' or 'Boka nu' button on our website. Fill out the form with your requirements, and we'll provide you with the best options to suit your needs.",
    },
    {
        question: "How does the booking process work?",
        answer: "To book a vehicle or helper, click on the 'Få erbjudande' or 'Boka nu' button on our website. Fill out the form with your requirements, and we'll provide you with the best options to suit your needs.",
    },
    {
        question: "What services do you offer?",
        answer: "We offer moving and shipping services, including vehicles and helpers for shifting homes, office relocations, and logistics support.",
    },
    {
        question: "What makes your services unique?",
        answer: "Our services stand out due to our reliability, affordability, and a wide range of vehicles and helpers to meet your specific needs.",
    }
];

export const FAQTWO: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-40 w-full mt-20">
            <div className="flex gap-10 items-end max-w-full uppercase w-11/12">
                <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <div data-aos="fade-right" className="flex flex-wrap gap-6 items-center w-full text-2xl font-bold leading-none text-emerald-500 whitespace-nowrap tracking-[5.52px] max-md:max-w-full">
                        <div className="shrink-0 self-stretch my-auto h-0.5 border-2 border-emerald-500 border-solid w-[86px]" />
                        <div className="self-stretch my-auto">FAQ'S</div>
                    </div>
                    <div data-aos="fade-up-right" className="mt-4 text-4xl font-semibold leading-tight text-sky-800 max-md:max-w-full">
                        <span className="font-bold">Looking </span>
                        <span className="font-bold text-sky-800">for answers </span>
                        <span className="font-bold">?</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10 w-10/12">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`flex overflow-hidden flex-col py-8 pr-11 pl-3.5 mt-10 w-full rounded-xl border border-solid bg-slate-100 border-sky-800 border-opacity-70 max-w-[1074px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:max-w-full cursor-pointer`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex w-full justify-between flex-wrap gap-10 items-center text-xl font-semibold leading-relaxed text-zinc-800 max-md:mr-2 max-md:max-w-full">
                            <div className="self-stretch my-auto">{faq.question}</div>

                            {expandedIndex === index ?
                                <ChevronUp />
                                :
                                <ChevronDown />


                            }
                        </div>
                        {expandedIndex === index && (
                            <div className="mt-2.5 text-lg leading-8 text-stone-900 text-opacity-80 max-md:max-w-full">
                                {faq.answer || "Answer coming soon! Please check back later."}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
