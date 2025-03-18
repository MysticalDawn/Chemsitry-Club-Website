import { Container } from "react-bootstrap";
import logo from "../../../public/chem_logo.png";
import Image from "next/image";
import "../../ui/footer/footer.css";
import NavTab from "@/app/lib/nav/nav-tab";
export default function Footer() {
  return (
    <Container className="m-0 p-5 footer-container min-vw-100">
      <main className="first-row flex align-content-center align-items-center justify-around">
        <Image
          src={logo}
          alt="logo"
          height={186.78}
          width={263.96}
          loading="lazy"
        />
        <section className="flex">
            
        </section>
      </main>
    </Container>
  );
}
