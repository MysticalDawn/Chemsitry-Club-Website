"use client";
import "../../ui/home/main-nav.css";
import NavbarCustom from "../../components/desktop/navbar-custom";
import HomeMobile from "./main-nav-mobile";
import React, { useEffect, useRef, useState } from "react";
import path_vector_left from "../../../public/home/path-left.svg";
import path_vector_right from "../../../public/home/path-right.svg";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import kfupm from "../../../public/home/kfupm.jpeg";
import { redirect } from "next/navigation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  const handleViewResourcesClick = () => {
    redirect("/resources");
  };

  const handleViewEventsClick = () => {};

  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div
      className="main-nav po"
      style={{
        backgroundImage: `url(${kfupm.src})`,
        minHeight: "100%",
        minWidth: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginRight: "1rem",
      }}
    >
      <nav className="position-fixed w-100 z-10">
        <NavbarCustom />
      </nav>
      <main className="main-section">
        <section className="left-section-vector flex justify-start w-75 position-relative z-0">
          <Image
            src={path_vector_left}
            alt={"path_vector"}
            width={1371.49}
            height={503.44}
            priority
          />
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
              href="resources"
              className="btn-1 m-3 text-center bg-white h-16 w-64 text-lg font-bold d-inline-block align-items-center position-relative"
              onPress={handleViewResourcesClick}
            >
              View Resources
            </Button>
            <Button
              radius="full"
              href="events"
              className="btn-2 m-3 text-center bg-white h-16 w-64 text-lg font-bold d-inline-block align-items-center position-relative"
              onPress={handleViewEventsClick}
            >
              View Events
            </Button>
          </div>
        </section>
        <section className="right-section-vector flex justify-end z-0 w-100 position-relative">
          <Image
          className="w-75"
            src={path_vector_right}
            alt={"path_vector"}
            width={1371.49}
            height={503.44}
            priority
          />
        </section>
      </main>
    </div>
  );
}
