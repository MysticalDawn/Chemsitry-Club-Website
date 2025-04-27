import React, { ReactNode } from "react";
import Image from "next/image"; // Assuming you're using Next.js
import path_vector_left from "../../../public/calender/left_section_vector.svg";
import Footer from "@/app/components/desktop/footer";

interface CalendarLayoutProps {
  children: ReactNode;
}

const CalendarLayout: React.FC<CalendarLayoutProps> = ({ children }) => {
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
        {/* Left Section Vector (Background Styled) */}
        <section
          className="left-section-vector absolute z-0"
          style={{
            left: "0",
            width: "60%",
            height: "100%",
            backgroundImage: `url(${path_vector_left.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <section className="calendar-body">{children}</section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CalendarLayout;
