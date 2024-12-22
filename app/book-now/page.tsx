"use client"
import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Checkbox, Textarea, Select, SelectItem } from '@nextui-org/react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ServicesCard } from '../_components/servicesCard';
import { Trash, X } from 'lucide-react';
import { LocalizationProvider, renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { toast } from 'sonner';
import { CheckOut } from '../_components/CheckOut';

const pricing = {
    transport: {
        ratePerKm: 10,
        smallVan: 50,
        largeVan: 100,
    },
    helper: {
        ratePerHelperPerHour: 15,
    },
    cleaning: {
        ratePerSqFt: 1,
        ratePerCleaner: 20,
    },
};

interface Service {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface FormData {
    distance?: number;
    from?: string;
    liftTransport?: any;
    floorTransport?: any;
    liftMoving?: any;
    floorMoving?: any;
    to?: string;
    helpers?: number;
    hours?: number;
    area?: number;
    cleaners?: number;
}

interface SelectedService extends Service, FormData { }

const requiredFields: { [key: string]: (keyof FormData)[] } = {
    transport: ['from', 'to', 'distance'],
    helper: ['helpers', 'hours'],
    cleaning: ['area', 'cleaners'],
};

const BookingPage: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [currentService, setCurrentService] = useState<Service | null>(null);
    const [formData, setFormData] = useState<FormData>({});
    const [totalCost, setTotalCost] = useState(0);
    const [time, setTime] = useState<any>()
    const [isWorking, setIsWorking] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const services: Service[] = [
        {
            id: 'transport',
            name: 'Transport',
            description: 'Boka en transporttjänst. ',
            image: '/get-car.jpg',
        },
        {
            id: 'helper',
            name: 'Hjälpare',
            description: 'Anlita hjälp för flyttning.',
            image: '/helper.jpg',
        },
        {
            id: 'cleaning',
            name: 'Rengörare',
            description: 'Få ditt utrymme städat.',
            image: '/cleaning.jpg',
        },
    ];

    const handleOpenForm = (service: Service) => {
        setCurrentService(service);
        const existingService = selectedServices.find((s) => s.id === service.id);
        if (existingService) {
            const { id, name, description, image, ...existingFormData } = existingService;
            setFormData(existingFormData);
        } else {
            setFormData({});
        }
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
        setCurrentService(null);
    };

    const handleAddService = () => {
        if (currentService) {
            const updatedServices = [...selectedServices];
            const serviceIndex = updatedServices.findIndex((s) => s.id === currentService.id);
            if (serviceIndex !== -1) {
                // Update existing service
                updatedServices[serviceIndex] = { ...currentService, ...formData };
            } else {
                // Add new service
                updatedServices.push({ ...currentService, ...formData });
            }
            setSelectedServices(updatedServices);
        }
        setVisible(false);
        setFormData({});
    };
    const handleAccept = async () => {
        if (!phoneNumber) {
            toast.success("50% discount accepted!");
            setIsWorking(true);
            setIsPopupOpen(false);
            return
        }
        setLoading1(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success("50% discount accepted!");
            setIsWorking(true);
            setIsPopupOpen(false);
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading1(false);
        }
    };
    const handleCheckboxChange = () => {
        if (isWorking == true) {
            setIsWorking(false);
            return;
        }
        setIsPopupOpen(true);
    };
    const handleCancel = () => {
        setIsPopupOpen(false);
        setIsWorking(true);

        setPhoneNumber('');
    };
    useEffect(() => {
        calculateTotal();
    }, [selectedServices, isWorking]);

    const handleInputChange = (key: keyof FormData, value: string | number) => {
        setFormData({ ...formData, [key]: value });
    };

    const calculateTotal = () => {
        let total = 0;
        selectedServices.forEach((service) => {
            if (service.id === 'transport') {
                const floorTransportCost =
                    service.floorTransport &&
                        service.floorTransport > 1 &&
                        service.liftTransport === "false"
                        ? (service.floorTransport - 1) * 100
                        : 0;
                total += (service.distance || 0) * pricing.transport.ratePerKm;
                total += floorTransportCost;
            }
            if (service.id === 'helper') {
                const floorMovingCost =
                    service.floorMoving &&
                        service.floorMoving > 1 &&
                        service.liftMoving === "false"
                        ? (service.floorMoving - 1) * 100
                        : 0;
                total += (service.helpers || 0) * (service.hours || 0) * pricing.helper.ratePerHelperPerHour;
                total += floorMovingCost;
            }
            if (service.id === 'cleaning') {
                total += (service.area || 0) * pricing.cleaning.ratePerSqFt;
                if (service.cleaners) {
                    total += (service.cleaners || 0) * pricing.cleaning.ratePerCleaner;
                }
            }
        });
        if (isWorking) {
            total = total * 0.5; // Apply 50% discount
        }
        setTotalCost(total);
    };

    const areFieldsFilled = () => {
        if (currentService) {
            const fields = requiredFields[currentService.id];
            return fields.every((field) => formData[field] !== undefined && formData[field] !== '');
        }
        return false;
    };

    const handleDeleteService = (serviceId: string) => {
        setSelectedServices(selectedServices.filter((s) => s.id !== serviceId));
    };

    const handleSubmit = async () => {
        if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.date) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const bookingData = {
            userInfo: {
                ...userInfo,
                time: dayjs(time).format("HH:mm"),
            },
            selectedServices,
            totalCost,
            isWorking,
        };

        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to create booking.");
                throw new Error(errorData.message || "Failed to create booking.");
            }

            const result = await response.json();
            toast.success("Booking created successfully!");
            console.log("Booking result:", result);
        } catch (error) {
            console.error("Error creating booking:", error);
        } finally {
            setLoading(false);
        }
    };
    const today = new Date().toISOString().split('T')[0];
    const handleSelectChange = (key: keyof FormData, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <div className="mt-20 min-h-screen flex flex-col md:flex-row p-4 gap-4">
            {/* Left Section: User Info and Service Cards */}


            <div className="flex flex-col w-full md:w-6/12 xl:w-7/12 ">
                <Card className="p-4 flex flex-col gap-2">

                    <div className='mb-8 ml-3'>

                        <h1 className='text-3xl font-bold sm:text-4xl'>
                            Boka <span className='text-sky-800'>Nu</span>
                        </h1>
                        <p className='mt-1 '>
                            Boka en tjänst nu!
                        </p>
                    </div>
                    <Input
                        label="Namn"
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="E-post"
                        type="email"
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="Telefon"
                        type="tel"
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        label="Datum för tjänst"
                        type="date"
                        min={today}
                        onChange={(e) => setUserInfo({ ...userInfo, date: e.target.value })}
                        className="mb-2"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            ampm={false}
                            label="Tid för tjänst"
                            sx={{
                                width: "100%",
                                borderRadius: "25px"
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
                    <div className="w-full mb-4 flex flex-col items-start">

                        <Textarea
                            label="Lämna meddelande eller särskilda krav (Valfritt* )"
                            fullWidth
                            value={userInfo.message}
                            onChange={(e) => setUserInfo({ ...userInfo, message: e.target.value })}
                            rows={10}
                        />
                    </div>



                    {selectedServices.length > 0 ? (
                        selectedServices.map((service, index) => {
                            // Existing code for displaying selected services...
                            let serviceCost = 0;
                            let costBreakdown = '';

                            if (service.id === 'transport') {
                                const distanceCost = (service.distance || 0) * pricing.transport.ratePerKm;
                                const floorTransportCost =
                                    service.floorTransport &&
                                        service.floorTransport > 1 &&
                                        service.liftTransport === "false"
                                        ? (service.floorTransport - 1) * 100
                                        : 0;
                                serviceCost = distanceCost + floorTransportCost;

                                costBreakdown = `Distance Cost: ${service.distance || 0} km * SEK${pricing.transport.ratePerKm}/km = SEK${distanceCost}\n`
                                    + (service.liftTransport === "false" && service.floorTransport > 1
                                        ? `Floor Cost: ${service.floorTransport - 1} floors * SEK100 = SEK${floorTransportCost}\n`
                                        : '')
                                    + `Total: SEK${serviceCost}`;
                            }
                            else if (service.id === 'helper') {
                                const floorMovingCost =
                                    service.floorMoving &&
                                        service.floorMoving > 1 &&
                                        service.liftMoving === "false"
                                        ? (service.floorMoving - 1) * 100
                                        : 0;
                                serviceCost = (service.helpers || 0) * (service.hours || 0) * pricing.helper.ratePerHelperPerHour + floorMovingCost;
                                costBreakdown = `${service.helpers || 0} helpers * ${service.hours || 0} hours * SEK${pricing.helper.ratePerHelperPerHour}/hr = SEK${serviceCost - floorMovingCost}\n`
                                    + (service.liftMoving === "false" && service.floorMoving > 1
                                        ? `Floor Cost: ${service.floorMoving - 1} floors * SEK100 = SEK${floorMovingCost}\n`
                                        : '')
                                    + `Total: SEK${serviceCost}`;

                            }
                            else if (service.id === 'cleaning') {
                                const areaCost = (service.area || 0) * pricing.cleaning.ratePerSqFt;
                                const cleanerCost = (service.cleaners || 0) * pricing.cleaning.ratePerCleaner;
                                serviceCost = areaCost + cleanerCost;
                                costBreakdown = `Area Cost: ${service.area || 0} sq ft * SEK${pricing.cleaning.ratePerSqFt}/sq ft = SEK${areaCost}\n`
                                    + `Cleaner Cost: ${service.cleaners || 0} cleaners * SEK${pricing.cleaning.ratePerCleaner} = SEK${cleanerCost}\n`
                                    + `Total: SEK${serviceCost}`;
                            }

                            return (

                                <Card key={index} className="p-4 mb-2 bg-[#f0f2f4]">
                                    <div className="flex justify-between items-center">
                                        <h5 className='font-bold text-xl text-sky-800 mb-3'>{service.name}</h5>
                                        <button className=' text-[#1CAC78] flex items-center justify-center p-2 rounded-full hover:scale-95'
                                            onClick={() => handleDeleteService(service.id)}
                                        >
                                            <X className='h-5 w-5' />
                                        </button>
                                    </div>
                                    <ul>
                                        {Object.entries(service)
                                            .filter(([key]) => !['id', 'name', 'description', 'image'].includes(key))
                                            .map(([key, value]) => (
                                                <li key={key} className="text-lg capitalize">
                                                    {key === "liftTransport" || key === "liftMoving"
                                                        ? `Lift: ${value === "true" ? "Yes" : "No"}`
                                                        : key === "floorTransport" || key === "floorMoving"
                                                            ? `Floor: ${value}`
                                                            : key === "hours"
                                                                ? ` Hours : ${value} ${value > 1 ? "Hours" : "Hour"} `
                                                                : key === "distance"
                                                                    ? `Distance : ${value} km`
                                                                    : key === "area"
                                                                        ? `Area : ${value} sq ft`
                                                                        : `${key}: ${value}`}
                                                </li>
                                            ))}

                                    </ul>
                                    <p className='mt-2 whitespace-pre-line'>{costBreakdown}</p>
                                </Card>
                            );
                        })

                    ) : (
                        <div className='flex flex-col-reverse sm:flex-row items-center justify-between gap-3 flex-wrap '>
                            <div className='flex  gap-3 flex-wrap '>

                                {services.map((service, index) => (
                                    <div className="" key={index}>
                                        <button
                                            onClick={() => handleOpenForm(service)}
                                            className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-5 py-2.5  text-white rounded-xl border border-sky-900 bg-sky-900 border-solid  max-md:px-5">
                                            Välj {service.name}

                                        </button>
                                    </div>
                                ))}
                            </div>
                            <p>Välj en tjänst</p>


                        </div>
                    )}
                    {selectedServices.length > 0 && (
                        <>
                            <div className='flex items-center justify-end gap-3 flex-wrap'>

                                {services.map((service, index) => (
                                    <div className="" key={index}>
                                        <button
                                            onClick={() => handleOpenForm(service)}
                                            className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-5 py-2.5 my-auto text-white rounded-xl border border-sky-900 bg-sky-900 border-solid  max-md:px-5">
                                            Välj {service.name}

                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Checkbox
                                isSelected={isWorking}
                                onChange={handleCheckboxChange}
                                className="mb-2"
                            >
                                Om du arbetar, får du 50% rabatt.
                            </Checkbox>
                            <Modal isOpen={isPopupOpen} onClose={handleCancel}>
                                <ModalContent>
                                    <ModalHeader>
                                        <h4 className="text-lg text-sky-900 font-bold">Skriv ditt personnummer (valfritt*)</h4>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input
                                            type="tel"
                                            label=" "
                                            placeholder="Skriv här ditt personnummerr "
                                            fullWidth
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" onClick={handleCancel}>
                                        Avbryt
                                        </Button>
                                        <Button
                                            color="success"
                                            isLoading={loading1}
                                            className='text-white'
                                            onClick={handleAccept}
                                        >
                                            Godkänn
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            <h4 className="mt-4 text-end pr-4">
                                Totalkostnad: SEK{totalCost}
                                {isWorking && <span className="text-green-600"> (50% rabatt tillämpad)</span>}
                            </h4>

                            {/* <div className="flex gap-3 items-center self-start mt-8 text-base font-medium text-center w-full justify-end">
                                <button
                                    onClick={handleSubmit}

                                    className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-9 py-3.5 my-auto sm:w-48 text-white rounded-lg bg-sky-800 border-solid min-h-[46px] max-md:px-5">
                                    {
                                        loading ? "Booking..." : "Boka nu"
                                    }
                                </button>
                            </div> */}
                            <CheckOut time={time} totalCost={totalCost} selectedServices={selectedServices} userInfo={userInfo} isWorking={isWorking} />


                        </>
                    )}
                </Card>
            </div>

            <div className=" items-end lg:px-20 text-sm text-gray-50 flex flex-col gap-4 w-full md:w-6/12 xl:w-5/12 max-md:pl-5">
                <div className="flex flex-col justify-center items-start py-10 w-full md:bg-sky-800 md:w-[350px] rounded-xl max-md:pr-5">
                    <div className="flex flex-col justify-center gap-6 w-full">
                        {services.map((service, index) => (
                            <div className="w-full md:-ml-10" key={index}>
                                <ServicesCard service={service} handleOpenForm={handleOpenForm} pricing={pricing} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={visible} onClose={handleClose}>
                <ModalContent>
                    <ModalHeader>
                        <h4 className='text-xl sm:text-2xl font-bold '>Lägg till <span className='text-sky-800'>
                            {currentService?.name} {" "}
                        </span>
                            Detaljer</h4>
                    </ModalHeader>
                    <ModalBody>
                        {currentService?.id === 'transport' && (
                            <>
                                <Input
                                    label="Från"
                                    value={formData.from || ''}
                                    onChange={(e) => handleInputChange('from', e.target.value)}
                                    className="mb-2"
                                />
                                <Input
                                    label="till"
                                    value={formData.to || ''}
                                    onChange={(e) => handleInputChange('to', e.target.value)}
                                    className="mb-2"
                                />
                                <Input
                                    label="Avstånd (km)"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.distance !== undefined ? formData.distance : ''}
                                    onChange={(e) => handleInputChange('distance', parseFloat(e.target.value))}
                                    className="mb-2"
                                />
                                <div className="w-full mb-4 flex flex-col items-start">
{/*                                     <Select
                                        label="do you have lift ?"
                                        fullWidth
                                        selectedKeys={new Set([formData.liftTransport || ""])}
                                        onSelectionChange={(key) =>
                                            // @ts-ignore
                                            handleSelectChange("liftTransport", Array.from(key)[0])
                                        }
                                    >
                                        <SelectItem key={"true"}>Yes</SelectItem>
                                        <SelectItem key={"false"}>No</SelectItem>
                                    </Select> */}

                                </div>

                                {
                                    formData.liftTransport == "false" &&
                                    <div className="w-full mb-2 flex flex-col items-start">
                                        <Input
                                            label="Your Floor Number"
                                            type="number"
                                            fullWidth
                                            // @ts-ignore
                                            value={formData.floorTransport !== undefined ? formData.floorTransport : 0}

                                            onChange={(e) => handleInputChange('floorTransport', e.target.value)}

                                        />
                                    </div>
                                }

                            </>
                        )}
                        {currentService?.id === 'helper' && (
                            <>
                                <Input
                                    label="Antal hjälpare"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.helpers !== undefined ? formData.helpers : ''}
                                    onChange={(e) => handleInputChange('helpers', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                                <Input
                                    label="Antal timmar"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.hours !== undefined ? formData.hours : ''}
                                    onChange={(e) => handleInputChange('hours', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                                <div className="w-full mb-4 flex flex-col items-start">
                                    <Select
                                        label="do you have lift ?"
                                        fullWidth

                                        selectedKeys={new Set([formData.liftMoving || ""])} // Ensure selectedKeys is a Set
                                        onSelectionChange={(key) =>
                                            // @ts-ignore
                                            handleSelectChange("liftMoving", Array.from(key)[0]) // Extract value from Set
                                        }
                                    >
                                        <SelectItem key={"true"}>Yes</SelectItem>
                                        <SelectItem key={"false"}>No</SelectItem>
                                    </Select>

                                </div>
                                {
                                    formData.liftMoving == "false" &&
                                    <div className="w-full mb-2 flex flex-col items-start">
                                        <Input
                                            label="Your Floor Number"
                                            type="number"
                                            fullWidth
                                            // @ts-ignore
                                            value={formData.floorMoving !== undefined ? formData.floorMoving : 0}

                                            onChange={(e) => handleInputChange('floorMoving', e.target.value)}

                                        />
                                    </div>
                                }

                            </>
                        )}
                        {currentService?.id === 'cleaning' && (
                            <>
                                <Input
                                    label="Yta (kvm)"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.area !== undefined ? formData.area : ''}
                                    onChange={(e) => handleInputChange('area', parseFloat(e.target.value))}
                                    className="mb-2"
                                />
                                <Input
                                    label="Antal hjälpare"
                                    type="number"
                                    // @ts-ignore
                                    value={formData.cleaners !== undefined ? formData.cleaners : ''}
                                    onChange={(e) => handleInputChange('cleaners', parseInt(e.target.value, 10))}
                                    className="mb-2"
                                />
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <div className="flex gap-3 items-center self-start mt-8 text-base font-normal text-center">
                            <button onClick={handleClose} className="gap-2.5 hover:scale-105 transition-all duration-250 self-stretch px-5 py-2.5 my-auto  text-white bg-sky-800 rounded-xl max-md:px-5">
                                Avbryt.

                            </button>
                            <button onClick={handleAddService} disabled={!areFieldsFilled()} className="gap-2.5 self-stretch hover:scale-105 transition-all duration-250 px-5 py-2.5 my-auto  text-white rounded-xl border border-[#1CAC78] bg-[#1CAC78] border-solid max-md:px-5">
                                Lägg till tjänst

                            </button>
                        </div>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default BookingPage;
