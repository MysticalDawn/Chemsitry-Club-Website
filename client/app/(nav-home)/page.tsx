"use client";
import React, { useState, useEffect } from "react";
import Home from "./first-part/main-nav";
import HomeMobile from "./first-part/main-nav-mobile";
import OfferSection from "./second-part/offer-section";
import OfferSectionMobile from "./second-part/offer-section-mobile";
import { Container } from "react-bootstrap";
import EventsCard from "./third-part/events-card";
import EventsCardMobile from "./third-part/events-card-mobile";
export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <Container className="m-0 p-0 w-100 h-100 min-vw-100">
      <Home />
      <OfferSection />
      <EventsCard />
            {/* {isMobile ? <HomeMobile /> : <Home />}
      {isMobile ? <OfferSectionMobile /> : <OfferSection />}
      {isMobile ? <EventsCardMobile /> : <EventsCard />} */}
    </Container>
  );
}
