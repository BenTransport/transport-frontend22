"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessPage = ({ searchParams }: any) => {
    const router = useRouter();
    const { session_id } = searchParams;
    const [bookingDetails, setBookingDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (session_id) {
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-payment?session_id=${session_id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setBookingDetails(data.booking);
                    } else {
                        setError(true);
                    }
                })
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        } else {
            setError(true);
            setLoading(false);
        }
    }, [session_id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <svg
                        className="animate-spin h-10 w-10 text-blue-600 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                    </svg>
                    <p className="mt-4 text-gray-600">Verifying your payment...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <p className="text-4xl font-bold text-red-500">Payment Verification Failed</p>
                    <p className="mt-2 text-gray-600">Please contact support for assistance.</p>

                    <button onClick={() => router.push("/")} className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-5 py-2.5 my-auto  text-white bg-sky-800 rounded-xl max-md:px-5">
                        Go Back to Home

                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h1 className="text-4xl font-bold text-gray-800 mt-4">Payment Successful!</h1>
                <p className="mt-2 text-gray-600">
                    Thank you for your booking. Here are your booking details:
                </p>

                {bookingDetails && (
                    <div className="mt-6 text-left">

                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-500">Services:</p>
                            <ul className="list-disc list-inside text-gray-800">
                                {bookingDetails.selectedServices.map((service: any, index: any) => (
                                    <li key={index}>{service.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4 flex items-center gap-x-3 justify-end">

                            <p className="text-sm font-medium text-gray-500">Total Cost:</p>
                            <p className="text-gray-800">€{bookingDetails.totalCost}</p>
                        </div>
                    </div>
                )}

                <button onClick={() => router.push("/")} className="gap-2.5 flex items-center mx-auto hover:scale-105 transition-all duration-250 self-stretch px-5 py-2.5 my-auto  text-white bg-sky-800 rounded-xl max-md:px-5">
                    Go to Home
                    <ArrowRight className="ml-2 h-5 w-5" />

                </button>

            </div>
        </div>
    );
};

export default SuccessPage;
