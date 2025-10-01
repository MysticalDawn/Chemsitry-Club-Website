"use client";

import React, { useState, useEffect } from "react";
import IntroSection from "./first-part/intro-section";
import IntroSectionMobile from "./first-part/intro-section-mobile";
import CoreValues from "./second-part/core-values";
//import CoreValuesMobile from "./second-part/core-values-mobile";
import MissionSection from "./third-part/mission-section";
import MissionSectionMobile from "./third-part/mission-section-mobile";
import OrgChart from "./fourth-part/org-chart";
import MemberCards from "./fourth-part/member-cards";
import Footer from "@/app/components/desktop/footer";
import FooterMobile from "@/app/components/mobile/footer-mobile";

export default function AboutUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      {isMobile ? <IntroSectionMobile /> : <IntroSection />}
      <CoreValues />
      {isMobile ? <MissionSectionMobile /> : <MissionSection />}
      <OrgChart />
      <MemberCards />
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
}
