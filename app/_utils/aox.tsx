
"use client";

import { useEffect, ReactNode } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from "sonner";

export const AOSProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    return <>
        {children} </>;
};
