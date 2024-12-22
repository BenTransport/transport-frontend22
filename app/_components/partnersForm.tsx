"use client";

import React, { useState } from "react";
import {
    Input,
    Button,
    Select,
    SelectItem,
    Checkbox,
    Textarea,
} from "@nextui-org/react";
import { toast } from "sonner";

const PartnerForm = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<any>({
        name: "",
        email: "",
        phone: "",
        vehicleNumber: "",
        licenseNumber: "",
    });

    const [isTerm, setIsTerm] = useState<boolean>(false);

    const handleChange = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!isTerm) {
            toast.error("You must agree to the terms and conditions.");
            return;
        }
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.vehicleNumber ||
            !formData.licenseNumber
        ) {
            return toast.error("All fields are required");
        }

        console.log("Form Data:", formData);
        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/partner`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message ? errorData.message : "Error during submission");
                throw new Error(errorData.message || "Failed to submit data");
            }

            const result = await response.json();
            toast.error("Submission successful");
            setFormData({
                name: "",
                email: "",
                phone: "",
                vehicleNumber: "",
                licenseNumber: "",
            })
            console.log("Submission successful:", result);
        } catch (error: any) {
            console.error("Error during submission:", error.message);
            toast.error(error.message ? error.message : "Error during submission");

        } finally {
            setLoading(false)

        }
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-8/12 p-5 sm:p-10  2xl:w-7/12">
            <div className="flex flex-col md:flex-row w-full gap-3">

                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Ange ditt namn</label>
                    <Input
                        label="Namn"
                        fullWidth
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">
                        Ange din e-post
                    </label>
                    <Input
                        label="Ange e-postadress"
                        fullWidth
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
            </div>


            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">
                    Ange ditt telefonnummer
                </label>
                <Input
                    label=" Ange telefonnummer "
                    fullWidth
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
            </div>

            {/* Vehicle Number */}
            <div className="flex flex-col md:flex-row w-full gap-3">

                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">
                    Organisationsnummer
                    </label>
                    <Input
                        label=" Skriv ditt organisationsnummer. "
                        fullWidth
                        value={formData.vehicleNumber}
                        onChange={(e) => handleChange("vehicleNumber", e.target.value)}
                    />
                </div>

                {/* License Number */}
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">
                    Plats
                    </label>
                    <Input
                        label=" Skriv plats  "
                        fullWidth
                        value={formData.licenseNumber}
                        onChange={(e) => handleChange("licenseNumber", e.target.value)}
                    />
                </div>
            </div>



            <div className="flex items-center justify-start w-full mt-4">
                <Checkbox
                    isSelected={isTerm}
                    onChange={() => setIsTerm(!isTerm)}
                    className="mb-0.5"
                >
                    Jag godkänner villkoren .
                </Checkbox>
            </div>


            <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center  justify-end w-full">

                <button
                    onClick={handleSubmit}

                    className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded border border-[#1CAC78] bg-[#1CAC78] border-solid min-h-[46px] max-md:px-5">
                    {
                        loading ? "Skickar in..." : "Skicka"
                    }
                </button>
            </div>
        </div>
    );
};

export default PartnerForm;
