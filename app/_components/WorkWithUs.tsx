"use client";

import React, { useState } from "react";
import {
    Input,
    Button,
    Select,
    SelectItem,
    Checkbox,
    CheckboxGroup,
} from "@nextui-org/react";
import { toast } from "sonner";

const WorkWithUs = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<any>({
        name: "",
        address: "",
        email: "",
        phone: "",
        isDivingLicense: "",
        workBasis: "",
        services: [],
    });
    console.log("🚀 ~ WorkWithUs ~ formData:", formData)

    const [isTerm, setIsTerm] = useState<boolean>(false);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const handleChange = (key: string, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const servicesOptions = [
        { key: "Transport", value: "Transport" },
        { key: "Cleaning", value: "Rengöring" },
        { key: "Helper", value: "Flytthjälp" },
    ];

    const handleSubmit = async () => {
        if (!isTerm) {
            toast.error("You must agree to the terms and conditions.");
            return;
        }
        if (
            !formData.name || 
            !formData.address ||
            !formData.email ||
            !formData.phone ||
            !formData.isDivingLicense ||
            !formData.workBasis ||
            formData.services.length === 0
        ) {
            return toast.error("All fields are required");
        }

        setLoading(true)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/work-with-us`, {
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
                address: "",
                email: "",
                phone: "",
                isDivingLicense: "",
                workBasis: "",
                services: [],
            })
            setSelectAll(false)
            console.log("Submission successful:", result);
        } catch (error: any) {
            console.error("Error during submission:", error.message);
            toast.error(error.message ? error.message : "Error during submission");

        } finally {
            setLoading(false)

        }

        console.log("Form Data:", formData);
    };

    const handleServiceChange = (newValues: string[]) => {
        handleChange("services", newValues);

        if (newValues.length === servicesOptions.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const handleSelectAllChange = (checked: boolean) => {
        setSelectAll(checked);
        handleChange(
            "services",
            checked ? servicesOptions.map((service) => service.value) : []
        );
    };

    return (
        <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-8/12 p-5 sm:p-10  2xl:w-7/12">

            {/* Name Field */}
            <div className="flex flex-col md:flex-row w-full gap-3">

                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2"> Ange ditt namn</label>
                    <Input
                        label="Ditt fullständiga namn "
                        fullWidth
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Ange din e-postadress</label>
                    <Input
                        label="example@example.com"
                        fullWidth
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-3">

                {/* Address Field */}
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Ange din adress</label>
                    <Input
                        label="Ange din adress"
                        fullWidth
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                    />
                </div>

                {/* Email Field */}


                {/* Phone Field */}
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Ange ditt telefonnummer</label>
                    <Input
                        label="123-456-7890"
                        fullWidth
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full mb-4 flex flex-col items-start">
                <label className="text-black font-semibold mb-2">Typ av arbete du gör</label>
                <Checkbox
                    isSelected={selectAll}
                    onChange={(e) => handleSelectAllChange(e.target.checked)}
                    className="mb-1"
                >
                    Välj Alla
                </Checkbox>
                <CheckboxGroup
                    value={formData.services}
                    onChange={handleServiceChange}
                >
                    {servicesOptions.map((service) => (
                        <Checkbox key={service.key} value={service.value}>
                            {service.value}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-3">

                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Har du körkort?</label>
                    <Select
                        label="Välj ett alternativ"
                        fullWidth
                        value={formData.isDivingLicense}
                        onSelectionChange={(value) => handleChange("isDivingLicense", value.currentKey)}
                    >
                        <SelectItem key="yes" value="yes">Ja</SelectItem>
                        <SelectItem key="no" value="no">Nej</SelectItem>
                    </Select>
                </div>
                <div className="w-full mb-4 flex flex-col items-start">
                    <label className="text-black font-semibold mb-2">Arbetsbasis</label>
                    <Select
                        label="Välj ett alternativ"
                        fullWidth
                        selectedKeys={formData.workBasis ? [formData.workBasis] : undefined}
                        onSelectionChange={(key) => handleChange("workBasis", key.currentKey)}
                    >
                        <SelectItem key="full_time">Heltid</SelectItem>
                        <SelectItem key="part_time">Deltid</SelectItem>
                        <SelectItem key="hourly">Timanställning</SelectItem>

                    </Select>
                </div>
            </div>
            <div className="flex items-center justify-start w-full mt-4">
                <Checkbox
                    isSelected={isTerm}
                    onChange={() => setIsTerm(!isTerm)}
                    className="mb-0.5"
                >
                    Jag godkänner villkoren.
                </Checkbox>
            </div>
            <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center justify-end w-full">
                <button
                    onClick={handleSubmit}

                    className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-9 py-3.5 my-auto sm:w-48 text-white bg-sky-800 rounded min-h-[46px] max-md:px-5">
                    {
                        loading ? "Skickar in..." : "Skicka"
                    }
                </button>

            </div>
        </div>
    );
};

export default WorkWithUs;
