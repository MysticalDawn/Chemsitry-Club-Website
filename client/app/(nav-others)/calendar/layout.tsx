"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import path_vector_left from "../../../public/calender/left_section_vector.svg";
import Footer from "@/app/components/desktop/footer";
import FooterMobile from "@/app/components/mobile/footer-mobile";

interface CalendarLayoutProps {
  children: ReactNode;
}

const CalendarLayout: React.FC<CalendarLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="calendar-layout bg-gray-100 position-relative overflow-hidden"
      style={{
        backgroundColor: "#F9FAFC",
      }}
    >
      {/* Main Content Section */}
      <main className="calendar-content flex-col justify-center align-center text-center position-relative z-10">
        <header className="calendar-header mb-6">
          <h1 className="leading-normal tracking-wide font-extrabold text-4xl text-black">
            Calendar
          </h1>
        </header>

        {/* Left Section Vector (Background Styled)
        <section
          className="left-section-vector absolute z-0"
          style={{
            left: "0",
            width: isMobile ? "100%" : "60%",
            height: "100%",
            backgroundImage: `url(${path_vector_left.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "cover" : "contain",
          }}
        /> */}

        <section className="calendar-body">{children}</section>
      </main>

      <footer>{isMobile ? <FooterMobile /> : <Footer />}</footer>
    </div>
  );
};

export default CalendarLayout;
