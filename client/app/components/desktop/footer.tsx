import { Container } from "react-bootstrap";
import logo from "../../../public/chem_logo.png";
import "../../ui/footer/footer.css";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <main className="flex-col align-items-center align-content-center footer-container">
      <section className="flex items-center justify-around footer-container">
        <img
          src={logo.src}
          alt="logo"
          height={186.78}
          width={263.96}
          loading="lazy"
        />
        <div className="flex footer-links items-center">
          <Link href="/" className="text-white text-base no-underline mx-4">
            Home
          </Link>
          <Link
            href="/resources"
            className="text-white text-base no-underline mx-4"
          >
            Resource
          </Link>
          <Link
            href="/calendar"
            className="text-white text-base no-underline mx-4"
          >
            Calendar
          </Link>
          <Link
            href="/about-us"
            className="text-white text-base no-underline mx-4"
          >
            About Us
          </Link>
        </div>
      </section>
      <section className="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
          className="horizontal-line"
          width="100%"
          height="2"
        >
          <line x1="5" y1="0" x2="95" y2="0" stroke="white" strokeWidth="0.5" />
        </svg>
      </section>
      <section className="flex align-items-center align-content-center justify-around">
        <div className="developers flex items-center text-center pt-4 pr-4 pl-4">
          <p className="text-white font-bold text-center">Developed by:</p>
          <p className="text-white font-light text-center ml-2 mr-2">
            A. Alabdulwahab
          </p>
          <p className="text-white font-light text-center mr-2">O. Alfawaz</p>
          <p className="text-white font-light text-center mr-2">M. Aahmari</p>
          <p className="text-white font-light text-center mr-2">M. Aljassem</p>
        </div>
        <div className="flex justify-center space-x-4">
          <SocialIcon
            url="https://x.com/chemc_kfupm"
            bgColor="white"
            fgColor="#1DA1F2"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://sa.linkedin.com/company/checkfupm"
            bgColor="white"
            fgColor="#0077B5"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </section>
    </main>
  );
}
