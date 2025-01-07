"use client"
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../public/chem_logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/app/ui/navbar.css";
import { usePathname } from "next/navigation";

export default function NavbarCustom() {
    const path_name = usePathname();
  return (
    <Container className="navbar-custom m-0 p-2">
      <header className="d-flex justify-between">
        <div className="ml-10">
          <Image src={logo} alt="logo" height={134.34} width={189.86} />
        </div>
        <nav className="d-flex align-items-center justify-content-center position-relative">
          <div className="d-flex justify-content-center align-items-center">
            <Link href="/" className={`m-3 no-underline ${path_name=== "/" ? "active_text" : ""}`}>
              Home
            </Link>
            <Link href="/resources" className={`m-3 no-underline ${path_name=== "/resources" ? "active_text" : ""}`}>
              Resources
            </Link>
            <Link href="/calendar" className={`m-3 no-underline ${path_name=== "/calendar" ? "active_text" : ""}`}>
              Calendar
            </Link>
            <Link href="/about_us" className={`m-3 no-underline ${path_name=== "/about_us" ? "active_text" : ""}`}>
              About Us
            </Link>
          </div>
        </nav>
        <div>
            
            </div>
      </header>
    </Container>
  );
}
