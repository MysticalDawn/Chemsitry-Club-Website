"use client";
import Home from "./first-part/main-nav";
import OfferSection from "./second-part/offer-section";
import OfferSectionMobile from "./second-part/offer-section-mobile";
import { Container } from "react-bootstrap";
import Footer from "../components/desktop/footer";
import FooterMobile from "../components/mobile/footer-mobile";
import Events from "./third-part/events";
import EventsMobile from "./third-part/events-card-mobile";
import { useEffect, useState } from "react";
import NavbarCustomMobile from "../components/mobile/navbar-mobile";
import NavbarCustom from "../components/desktop/navbar-custom";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };
    // Initial check
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="m-0 p-0 w-100 h-100 min-vw-100">
      {isMobile ? <NavbarCustomMobile /> : <NavbarCustom />}
      <Home />
      {isMobile ? <OfferSectionMobile /> : <OfferSection />}
      {isMobile ? <EventsMobile /> : <Events />}
      {isMobile ? <FooterMobile /> : <Footer />}
    </Container>
  );
}
