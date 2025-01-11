"use client";
import "../ui/home/main-nav.css";
import NavbarCustom from "../components/desktop/navbar-custom";
import HomeMobile from "./home-mobile";
import { useEffect, useState } from "react";
import path_vector_left from "../../public/home/path-left.svg";
import path_vector_right from "../../public/home/path-right.svg";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
export default function Home() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <HomeMobile />
      ) : (
        <div className="bg-img">
          <nav className="position-fixed w-100">
            <NavbarCustom />
          </nav>
          <main className="main-section">
            <section className="left-section-vector flex justify-start w-fit">
              <Image src={path_vector_left} alt={"path_vector"} />
            </section>
            <section className="middle-section flex-col justify-center align-middle">
              <h1 className="leading-normal tracking-wide text-center font-extrabold text-6xl text-white">
                KFUPM Chemical Engineering
                <br />
                Club
              </h1>
              <p className="text-xl font-light text-center text-white tracking-wide mb-3">
                Empowering tomorrow's chemical engineers with knowledge and
                innovation
              </p>
              <div className="primary-btns flex justify-center">
                <Button radius="full" className="m-2 text-center bg-white h-16 w-64 text-lg font-bold">
                  View Resources
                </Button>
                <Button radius="full" className="m-2 text-center bg-white h-16 w-64 text-lg font-bold">
                  View Events
                </Button>
              </div>
            </section>
            <section className="right-section flex justify-end">
              <Image src={path_vector_right} alt={"path_vector"} />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
