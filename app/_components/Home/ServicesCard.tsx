import Link from "next/link";
import * as React from "react";

export const ServiceCard = ({ title, description, isHighlighted = false, image }: any) => {
    const containerClasses = `flex flex-col flex-1 shrink justify-center transition-all duration-300 items-center self-stretch my-auto w-full rounded-2xl min-h-full min-w-[240px] ${isHighlighted
        ? "bg-sky-800"
        : "bg-white border border-solid border-slate-300"
        }`;

    const titleClasses = `text-xl lg:text-2xl capatalize font-bold text-center ${isHighlighted ? "text-white" : "text-zinc-800"
        }`;

    const descriptionClasses = `mt-3.5 text-base ${isHighlighted ? "text-white" : "text-zinc-800 text-justify"
        }`;

    const buttonClasses = `gap-2.5 hover:scale-105 duration-300 self-stretch mx-auto mb-5 px-9 py-3.5 mt-7 max-w-full text-base font-medium text-center uppercase rounded min-h-[46px] w-[254px] max-md:px-5 ${isHighlighted ? "bg-emerald-500 text-white" : "bg-sky-800 text-white"
        }`;

    return (
        <div className="flex flex-col min-w-[240px] w-[304px] h-full">
            <div className="flex gap-2.5 justify-center items-center w-full rounded-2xl h-full">
                <div className={containerClasses}>
                    <div className={`${!isHighlighted ? "bg-sky-800" : "bg-black"} p-3 rounded-full flex items-center justify-center -mt-10`}>
                        <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between items-center pt-5 max-w-full min-h-[207px] w-[254px]">
                        <div className={titleClasses}>{title}</div>
                        <div className={descriptionClasses}>{description}</div>
                    </div>
                    <Link href="/get-offer">
                        <button className={buttonClasses} tabIndex={0}>Få erbjudande</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};