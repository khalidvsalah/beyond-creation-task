"use client";

import { useState, useEffect, createContext } from "react";

import Global from "./components/global";
import device from "./utils/device";

export const CheckDevice = createContext<boolean | undefined>(undefined);

export default function App({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(device.isMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1022);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CheckDevice.Provider value={isMobile}>
      <Global />
      {children}
    </CheckDevice.Provider>
  );
}
