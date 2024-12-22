"use client";

import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Checkbox,
  CheckboxGroup,
  Textarea,
} from "@nextui-org/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import TextField from "@mui/material/TextField";
import { renderTimeViewClock } from "@mui/x-date-pickers";
import { toast } from "sonner";
import dayjs from "dayjs";
const GetOffer = () => {
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState<any>({
    userType: "",
    name: "",
    email: "",
    phone: "",
    dateRange: "",
    services: [],
    from: "",
    to: "",
    hours: "",
    distance: "",
    helpers: "",
    workers: "",
    spaceSize: "",
    floor: 0,
    lift: "false",
    specialRequirements: "",
    frequency: "",
  });

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isTerm, setIsTerm] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState<any>()

  const handleChange = (key: string, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleServiceChange = (newValues: any) => {
    handleChange("services", newValues);
    if (newValues.length === servicesOptions.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      handleChange(
        "services",
        servicesOptions.map((service) => service.value)
      );
    } else {
      handleChange("services", []);
    }
  };

  const handleSubmit = async () => {
    if (!isTerm) {
      toast.error("Du måste godkänna villkoren");
      return;
    }
    if (!formData.userType || !formData.phone || !formData.email || !formData.name || !formData.services) {
      toast.error("All fields are required");
      return;
    }

    const formattedTime = dayjs(time).format("HH:mm");
    console.log(formattedTime)
    setLoading(true)
    const data = {
      ...formData,
      timeRange: formattedTime
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/offer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message ? errorData.message : "Fel vid inlämning.");
        throw new Error(errorData.message || "Misslyckades med att skicka data.");
      }

      const result = await response.json();
      toast.error("Inlämning lyckades");
      setFormData({
        userType: "",
        name: "",
        email: "",
        phone: "",
        timeRange: "",
        dateRange: "",
        services: [],
        from: "",
        to: "",
        hours: "",
        distance: "",
        vanType: "",
        helpers: "",
        workers: "",
        spaceSize: "",
        specialRequirements: "",
        frequency: "",
      })
      console.log("Inlämning lyckades:", result);
    } catch (error: any) {
      console.error("Error during submission:", error.message);
      toast.error(error.message ? error.message : "Fel vid inlämning.");

    } finally {
      setLoading(false)

    }
    console.log("Form Data:", formData);
  };

  const servicesOptions = [
    { key: "Transport", value: "Transport" },
    { key: "Cleaning", value: "Städning" },
    { key: "Helper", value: "Hjälpare" },
  ];
  

  const frequencyOptions = [
    { key: "Monthly", value: "Månadsvis" },
    { key: "Weekly", value: "Veckovis" },
    { key: "One-time", value: "Engångs" },
  ];
  

  return (
    <div className="bg-white shadow-lg flex items-center justify-center rounded-3xl flex-col w-11/12 md:w-8/12 p-5 sm:p-10  2xl:w-7/12">
      <div className="flex flex-col md:flex-row w-full gap-3">

        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold text-start mb-2">
            Jag är en
          </label>
          <Select
            label="Välj vem du är"
            fullWidth
            selectedKeys={formData.userType ? [formData.userType] : undefined}
            onSelectionChange={(key) =>
              handleChange("userType", key.currentKey as string)
            }
          >
            <SelectItem key="Private">Privatperson</SelectItem>
            <SelectItem key="Company">Företag</SelectItem>
            <SelectItem key="Student">Student</SelectItem>
          </Select>
        </div>

        {/* Name Input */}
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">Skriv in ditt namn</label>
          <Input
            label="Namn"
            fullWidth
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-3">

        {/* Email Input */}
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">
            Skriv in din e-postadress
          </label>
          <Input
            label="Ange e-postadress"
            fullWidth
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Phone Input */}
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">
            Skriv in ditt telefonnummer
          </label>
          <Input
            label="Ange telefonnummer"
            fullWidth
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-3">

        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">Bästa tidsperiod</label>
          <Input
            type="date"
            label="Datum"
            fullWidth
            min={today}
            value={formData.dateRange}
            onChange={(e) => handleChange("dateRange", e.target.value)}
          />
        </div>
        <div className="w-full mb-4 flex flex-col items-start text-black">
          <label className="text-black font-semibold mb-2">Bästa tidsintervall</label>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              ampm={false}
              sx={{
                width: "100%",
                borderRadius: "25px",
              }}
              value={time}
              onChange={(newValue) => setTime(newValue)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </LocalizationProvider>

        </div>
      </div>

      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">
          Välj tjänst(er)
        </label>
        <Checkbox
          isSelected={selectAll}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
          className="mb-0.5"
        >
          Välj alla
        </Checkbox>
        <CheckboxGroup value={formData.services} onChange={handleServiceChange}>
          {servicesOptions.map((service) => (
            <Checkbox key={service.key} value={service.value}>
              {service.value}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>

      {/* Frequency Selection */}
      {formData.services.length > 0 && (
        <div className="w-full mb-4 flex flex-col items-start">
          <label className="text-black font-semibold mb-2">
            Arbetsfrekvens
          </label>
          <Select
            label="Frekvens"
            fullWidth
            selectedKeys={formData.frequency ? [formData.frequency] : undefined}
            onSelectionChange={(key) =>
              handleChange("frequency", key.currentKey as string)
            }
          >
            {frequencyOptions.map((freq) => (
              <SelectItem key={freq.key}>{freq.value}</SelectItem>
            ))}
          </Select>
        </div>
      )}

      {formData.services.includes("Transport") && (
        <>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">Från</label>
            <Input
              label="Upphämtningsplats"
              fullWidth
              value={formData.from}
              onChange={(e) => handleChange("from", e.target.value)}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">till</label>
            <Input
              label="Avlämningsplats"
              fullWidth
              value={formData.to}
              onChange={(e) => handleChange("to", e.target.value)}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">Avstånd</label>
            <Input
              label="Avstånd i km"
              fullWidth
              value={formData.distance}
              onChange={(e) => handleChange("distance", e.target.value)}
            />
          </div>

          {/* Uncomment and use if vanType is needed
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">Van type</label>
            <Select
              fullWidth
              label="Select Van Type"
              selectedKeys={formData.vanType ? [formData.vanType] : undefined}
              onSelectionChange={(key) =>
                handleChange("vanType", key.currentKey as string)
              }
            >
              <SelectItem key="Small">Small Van</SelectItem>
              <SelectItem key="Medium">Medium Van</SelectItem>
              <SelectItem key="Large">Large Van</SelectItem>
            </Select>
          </div>
          */}
        </>
      )}

      {formData.services.includes("Cleaning") && (
        <>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">
              Antal städare
            </label>
            <Input
              label="Städare"
              type="number"
              fullWidth
              value={formData.workers}
              onChange={(e) => handleChange("workers", e.target.value)}
              min={1}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">
              Ytstorlek (kvm)
            </label>
            <Input
              label="Yta"
              type="number"
              fullWidth
              value={formData.spaceSize}
              onChange={(e) => handleChange("spaceSize", e.target.value)}
              min={1}
            />
          </div>
        </>
      )}
      {formData.services.includes("Helper") && (

        <>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">
              Antal hjälpare
            </label>
            <Input
              label="Hjälpare"
              type="number"
              fullWidth
              value={formData.helpers}
              onChange={(e) => handleChange("helpers", e.target.value)}
              min={1}
            />
          </div>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2">Timmar</label>
            <Input
              label="Hjälpares timmar krävs"
              fullWidth
              value={formData.hours}
              onChange={(e) => handleChange("hours", e.target.value)}
            />
          </div>


        </>
      )}

      {(formData.services.includes("Helper") || formData.services.includes("Transport")) && (

        <>
          <div className="w-full mb-4 flex flex-col items-start">
            <label className="text-black font-semibold mb-2"> Har du hiss?</label>
            <Select
              label="Skriv Ja eller Nej"
              fullWidth
              selectedKeys={formData.lift}
              onSelectionChange={(key) =>
                handleChange("lift", key.currentKey)
              }
            >
              <SelectItem key={"true"}>Ja</SelectItem>
              <SelectItem key={"false"}>Nej</SelectItem>
            </Select>

          </div>
          {
            formData.lift == "false" &&
            <div className="w-full mb-4 flex flex-col items-start">
              <label className="text-black font-semibold mb-2">Vilket våningsplan ?</label>
              <Input
                label="Din våning"
                type="number"
                fullWidth
                value={formData.floor}
                onChange={(e) => handleChange("floor", e.target.value)}
              />
            </div>
          }

        </>

      )}
      <div className="w-full mb-4 flex flex-col items-start">
        <label className="text-black font-semibold mb-2">
          Speciella krav:


        </label>
        <Textarea
          label="Lämna meddelande eller särskilda krav (Valfritt)"
          fullWidth
          value={formData.specialRequirements}
          onChange={(e) => handleChange("specialRequirements", e.target.value)}
          rows={7}
        />
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

export default GetOffer;
