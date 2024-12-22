"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { Toaster } from "sonner";
export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
      <NextUIProvider>
        <Toaster />
        {children}
      </NextUIProvider>
  );
}
