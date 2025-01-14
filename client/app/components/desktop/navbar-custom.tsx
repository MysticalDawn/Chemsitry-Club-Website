"use client";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/chem_logo.png";
import Image from "next/image";
import "@/app/ui/nav/navbar.css";
import { useEffect, useState } from "react";
import NavbarCustomMobile from "../mobile/navbar-custom-mobile";
import NavTab from "@/app/lib/nav/nav-tab";
import Cursor from "@/app/lib/nav/cursor";
import { usePathname } from "next/navigation";

export default function NavbarCustom() {
  const [isMobile, setMobile] = useState(false);
  const path_name = usePathname();

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <>
      {isMobile ? (
        <NavbarCustomMobile />
      ) : (
        <Container
          className={`p-2 m-0 ${
            path_name === "/" ? "navbar-custom" : "nav-others"
          }`}
        >
          <header className="d-flex justify-around w-100">
            <div className="justify-start">
              <Image src={logo} alt="logo" height={134.34} width={189.86} priority />
            </div>
            <nav
              className="d-flex align-items-center position-relative"
              onMouseLeave={() => {
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }));
              }}
            >
              <NavTab setPosition={setPosition} href="/">
                Home
              </NavTab>
              <NavTab setPosition={setPosition} href="/resources">
                Resources
              </NavTab>
              <NavTab setPosition={setPosition} href="/calendar">
                Calendar
              </NavTab>
              <NavTab setPosition={setPosition} href="/about_us">
                About Us
              </NavTab>
              <Cursor position={position} />
            </nav>
            <div></div>
            <div></div>
          </header>
        </Container>
      )}
    </>
  );
}
