"use client";
import { Container } from "react-bootstrap";
import "../../ui/home/offer-section.css";
import Image from "next/image";
import calender_svg from "../../../public/home/calendar.svg";
import fireworks_svg from "../../../public/home/fireworks.svg";
import learning_svg from "../../../public/home/learning.svg";
import { useEffect } from "react";

export default function OfferSection() {
  useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback);
    const items = document.querySelectorAll(".items");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <Container className="m-0 p-5 min-vw-100 offer-container">
      <main className="flex align-content-center align-items-center">
        <section className="left-section z-10 flex-col align-content-center align-items-center w-75 items">
          <p className="text-white font-light text-base m-0">-Our Services</p>
          <h2 className="text-black font-bold text-5xl overflow-y-hidden">
            What We Offer
          </h2>
          <p className="text-black font-light text-base m-0 w-100">
            Discover the key benefits of joining the KFUPM Chemical Engineering
            Club. We provide valuable opportunities to enhance your academic and
            professional journey.
          </p>
        </section>
        <section className="offer-cards flex-col justify-start align-content-center align-items-center w-100 items">
          <div className="card-1 mb-4">
            <div className="flex w-100 align-content-center align-items-center z-10">
              <div
                className="rounded-full border p-3"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={calender_svg}
                  alt="calendar"
                  width={40.54}
                  height={40.5}
                />
              </div>
              <div className="flex-col ml-5">
                <h3 className="text-white text-2xl font-bold m-0 overflow-y-hidden">
                  Calendar & Upcoming Events
                </h3>
                <p className="text-black font-light text-base m-0">
                  Check our calendar for upcoming events and important dates.
                </p>
              </div>
            </div>
          </div>
          <div className="card-2 mb-4">
            <div className="flex w-100 align-content-center align-items-center">
              <div
                className="rounded-full border p-3"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={fireworks_svg}
                  alt="calendar"
                  width={40.54}
                  height={37.5}
                />
              </div>
              <div className="flex-col ml-5">
                <h3 className="text-white text-2xl font-bold m-0 overflow-y-hidden">
                  Latest Events & Announcements
                </h3>
                <p className="text-black font-light text-base m-0">
                  Stay updated with the latest events and important
                  announcements.
                </p>
              </div>
            </div>
          </div>
          <div className="card-3 ">
            <div className="flex w-100 align-content-center align-items-center">
              <div
                className="rounded-full border p-3"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={learning_svg}
                  alt="calendar"
                  width={40.54}
                  height={37.5}
                />
              </div>
              <div className="flex-col ml-5">
                <h3 className="text-white text-2xl font-bold m-0 overflow-y-hidden">
                  Comprehensive Resources
                </h3>
                <p className="text-black font-light text-base m-0">
                  Access courses, flowcharts, and extra study materials.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
