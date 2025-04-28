"use client";
import React, { useState, useEffect } from "react";
import background from "../../../public/resources/background.svg";
import Footer from "@/app/components/desktop/footer";
import FooterMobile from "@/app/components/mobile/footer-mobile";

interface ResourcesLayoutProps {
  children: React.ReactNode;
}

const ResourcesLayout: React.FC<ResourcesLayoutProps> = ({ children }) => {
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
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <footer>{isMobile ? <FooterMobile /> : <Footer />}</footer>
    </div>
  );
};

export default ResourcesLayout;
