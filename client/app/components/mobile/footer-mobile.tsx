"use client";
import { Container } from "react-bootstrap";
import logo from "../../../public/chem_logo.png";
import "../../ui/footer/footer.css";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function FooterMobile() {
  return (
    <main className="flex-col items-center footer-mobile-container py-6 px-4">
      <section className="flex flex-col items-center mb-4">
        <img
          src={logo.src}
          alt="logo"
          height={120}
          width={170}
          loading="lazy"
          className="mb-4"
        />
        <div className="flex flex-wrap justify-center footer-links-mobile mb-4">
          <Link href="/" className="text-white text-sm no-underline mx-2 my-1">
            Home
          </Link>
          <Link
            href="/resources"
            className="text-white text-sm no-underline mx-2 my-1"
          >
            Resource
          </Link>
          <Link
            href="/calendar"
            className="text-white text-sm no-underline mx-2 my-1"
          >
            Calendar
          </Link>
          <Link
            href="/about_us"
            className="text-white text-sm no-underline mx-2 my-1"
          >
            About Us
          </Link>
        </div>
      </section>

      <section className="mb-4 w-full">
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

      <section className="flex flex-col items-center">
        <div className="social-icons flex justify-center space-x-4 mb-4">
          <SocialIcon
            url="https://x.com/chemc_kfupm"
            bgColor="white"
            fgColor="#1DA1F2"
            style={{ height: 36, width: 36 }}
          />
          <SocialIcon
            url="https://sa.linkedin.com/company/checkfupm"
            bgColor="white"
            fgColor="#0077B5"
            style={{ height: 36, width: 36 }}
          />
        </div>

        <div className="developers-mobile text-center">
          <p className="text-white font-bold text-sm mb-1">Developed by:</p>
          <div className="flex flex-wrap justify-center">
            <p className="text-white font-light text-xs mx-1">
              A. Alabdulwahab
            </p>
            <p className="text-white font-light text-xs mx-1">O. Alfawaz</p>
            <p className="text-white font-light text-xs mx-1">M. Alahmari</p>
            <p className="text-white font-light text-xs mx-1">M. Aljassem</p>
          </div>
        </div>
      </section>
    </main>
  );
}
