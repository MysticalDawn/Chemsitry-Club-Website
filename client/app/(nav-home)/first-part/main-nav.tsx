"use client";
import "../../ui/home/main-nav.css";
import NavbarCustom from "../../components/desktop/navbar-custom";
import HomeMobile from "./main-nav-mobile";
import React, { useEffect, useState, useRef, useCallback } from "react";
import path_vector_left from "../../../public/home/path-left.svg";
import path_vector_right from "../../../public/home/path-right.svg";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import kfupm from '../../../public/home/kfupm.jpeg';

export default function Home() {
  const [isMobile, setMobile] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const handleResize = useCallback(() => {
    setMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {isMobile ? (
        <HomeMobile />
      ) : (
        <div
          className="main-nav po"
          style={{
            backgroundImage: `url(${kfupm.src})`,
            minHeight: '100%',
            minWidth: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginRight: '1rem'
          }}
        >
          <nav className="position-fixed w-100 z-10">
            <NavbarCustom />
          </nav>
          <main className="main-section">
            <section className="left-section-vector flex justify-start w-fit position-relative z-0">
              <Image src={path_vector_left} alt={"path_vector"} />
            </section>
            <section className="middle-section flex-col justify-center align-middle">
              <h1
                ref={h1Ref}
                className="leading-normal tracking-wide text-center font-extrabold text-6xl text-white"
              >
                KFUPM Chemical Engineering
                <br />
                Club
              </h1>
              <p className="text-xl font-light text-center text-white tracking-wide mb-3">
                Empowering tomorrow's chemical engineers with knowledge and
                innovation
              </p>
              <div className="primary-btns flex justify-center">
                <Button
                  radius="full"
                  className="btn-1 m-3 text-center bg-white h-16 w-64 text-lg font-bold d-inline-block align-items-center position-relative"
                >
                  <span>View Resources</span>
                </Button>
                <Button
                  radius="full"
                  className="btn-2 m-3 text-center bg-white h-16 w-64 text-lg font-bold d-inline-block align-items-center position-relative"
                >
                  <span>View Events</span>
                </Button>
              </div>
            </section>
            <section className="right-section-vector flex justify-end z-0 w-100">
              <Image src={path_vector_right} alt={"path_vector"} />
            </section>
          </main>
        </div>
      )}
    </>
  );
}