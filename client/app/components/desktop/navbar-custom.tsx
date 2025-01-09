"use client";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../public/chem_logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/app/ui/nav/navbar.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarCustomMobile from "../mobile/navbar-custom-mobile";

export default function NavbarCustom() {
  const path_name = usePathname();
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <NavbarCustomMobile />;
  }

  return (
    <Container className="navbar-custom m-0 p-2">
      <header className="d-flex justify-between">
        <div className="ml-10">
          <Image src={logo} alt="logo" height={134.34} width={189.86} />
        </div>
        <nav className="d-flex align-items-center justify-content-center ml-5">
          <Link
            href="/"
            className={`nav-text m-3 no-underline ${
              path_name === "/" ? "active_text" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/resources"
            className={`nav-text m-3 no-underline ${
              path_name === "/resources" ? "active_text" : ""
            }`}
          >
            Resources
          </Link>
          <Link
            href="/calendar"
            className={`nav-text m-3 no-underline ${
              path_name === "/calendar" ? "active_text" : ""
            }`}
          >
            Calendar
          </Link>
          <Link
            href="/about_us"
            className={`nav-text m-3 no-underline ${
              path_name === "/about_us" ? "active_text" : ""
            }`}
          >
            About Us
          </Link>
        </nav>
      </header>
    </Container>
  );
}
