"use client";
import { Container } from "react-bootstrap";
import "../../ui/home/offer-section.css";
import Image from "next/image";
import calender_svg from "../../../public/home/calendar.svg";
import fireworks_svg from "../../../public/home/fireworks.svg";
import learning_svg from "../../../public/home/learning.svg";
import { useEffect } from "react";

export default function OfferSectionMobile() {
  useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      }
    };

    const observer = new IntersectionObserver(intersectionCallback);
    const items = document.querySelectorAll(".mobile-items");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <Container className="m-0 px-3 py-6 min-vw-100 offer-container">
      <main className="flex flex-col">
        <section className="mb-6 mobile-items">
          <p className="text-white font-light text-sm m-0">-Our Services</p>
          <h2 className="text-black font-bold text-3xl mb-2 overflow-y-hidden">
            What We Offer
          </h2>
          <p className="text-black font-light text-sm m-0">
            Discover the key benefits of joining the KFUPM Chemical Engineering
            Club. We provide valuable opportunities to enhance your academic and
            professional journey.
          </p>
        </section>

        <section className="flex flex-col gap-4 w-full mobile-items">
          <div className="mobile-card shadow-md">
            <div className="flex items-center p-3">
              <div
                className="rounded-full p-2 flex items-center justify-center"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={calender_svg}
                  alt="calendar"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col ml-3">
                <h3 className="text-xl font-bold m-0 overflow-y-hidden">
                  Calendar & Upcoming Events
                </h3>
                <p className="text-black font-light text-sm m-0">
                  Check our calendar for upcoming events and important dates.
                </p>
              </div>
            </div>
          </div>

          <div className="mobile-card shadow-md">
            <div className="flex items-center p-3">
              <div
                className="rounded-full p-2 flex items-center justify-center"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={fireworks_svg}
                  alt="fireworks"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col ml-3">
                <h3 className="text-xl font-bold m-0 overflow-y-hidden">
                  Latest Events & Announcements
                </h3>
                <p className="text-black font-light text-sm m-0">
                  Stay updated with the latest events and important
                  announcements.
                </p>
              </div>
            </div>
          </div>

          <div className="mobile-card shadow-md">
            <div className="flex items-center p-3">
              <div
                className="rounded-full p-2 flex items-center justify-center"
                style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
              >
                <Image
                  src={learning_svg}
                  alt="learning"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col ml-3">
                <h3 className="text-xl font-bold m-0 overflow-y-hidden">
                  Comprehensive Resources
                </h3>
                <p className="text-black font-light text-sm m-0">
                  Access courses, flowcharts, and extra study materials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
