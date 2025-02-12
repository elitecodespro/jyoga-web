"use client"

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isLoaded, setIsLoaded] = useState(false)
  
    useEffect(() =>{
      setIsLoaded(true)
    }, [])

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
    }, []);

    if (!isLoaded) {
      return <h1>LOADING...</h1>
    }

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      {children}
    </div>
  );
}
