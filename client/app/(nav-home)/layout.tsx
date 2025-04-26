'use client';
import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import NavbarCustom from "../components/desktop/navbar-custom";
import NavbarCustomMobile from "../components/mobile/navbar-mobile";
import "bootstrap/dist/css/bootstrap.min.css";
import kfupm from "../../public/home/kfupm.jpeg";
import { useEffect, useState } from "react";

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

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundImage: `url(${kfupm.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <div style={containerStyle}>
          {isMobile ? <NavbarCustomMobile /> : <NavbarCustom />}
          {children}
        </div>
      </body>
    </html>
  );
}