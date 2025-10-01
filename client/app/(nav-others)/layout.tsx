"use client";
import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import NavbarCustom from "../components/desktop/navbar-custom";
import NavbarMobile from "../components/mobile/navbar-mobile";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Footer from "../components/desktop/footer";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {isMobile ? <NavbarMobile /> : <NavbarCustom />}
        {children}
      </body>
    </html>
  );
}
