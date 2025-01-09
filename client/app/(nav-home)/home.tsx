"use client";
import { Container } from "react-bootstrap";
import KFUPM from "../../public/Home/kfupm.png";
import Image from "next/image";
import "../ui/home/nav-main.css";
import NavbarCustom from "../components/desktop/navbar-custom";
import HomeMobile from "./home-mobile";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div className="bg-img">
          <NavbarCustom />
    </div>
  );
}
