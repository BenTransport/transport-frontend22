"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CheckOut({ time, totalCost, isWorking, selectedServices, userInfo }: any) {
    const service = "testing"
    const [loading, setLoading] = useState({
        isLoading: false,
        type: ""
    })

    const handlePayment = async (method: string) => {
        setLoading({
            isLoading: true,
            type: method
        })
        try {
            const stripe = await stripePromise;

            if (!stripe) {
                throw new Error("Stripe.js not loaded");
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-checkout-session`, {
                serviceName: service,
                price: totalCost,
                isWorking,
                selectedServices,
                userInfo,
                time,
                method
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const session = response.data;
            console.log("🚀 ~ handlePayment ~ session:", response)

            if (session.id) {
                await stripe.redirectToCheckout({ sessionId: session.id });
            } else {
                console.error("Failed to create checkout session:", session);
            }
        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setLoading({
                isLoading: false,
                type: ""
            })
        }
    };

    return (


        <div className="flex items-center justify-end w-full mt-5">
            <button onClick={() => handlePayment("klarna")} type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium  text-base rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                <img src="/klarna-logo.jpg" alt="" className="mix-blend-multiply h-8 mr-1 -rotate-12" />
                {
                    loading.isLoading && loading.type == "klarna" ? "Processing..." : "Pay With Klarna"
                }


            </button>
            <button onClick={() => handlePayment("card")} type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium  text-base rounded-lg px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-10 h-3" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595"></path><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14"></path></svg>
                {
                    loading.isLoading && loading.type == "card" ? "Processing..." : "Pay With Card"
                }


            </button>
            {/* <button
                onClick={handlePayment}
                className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded-full bg-sky-800 border-solid mt-6 max-md:px-5">

                {
                    loading ? "Booking..." : " Pay with Klarna"
                }

            </button> */}
        </div>

    );
}
