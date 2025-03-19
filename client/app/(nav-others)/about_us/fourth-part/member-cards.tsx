// member-cards.tsx (or MemberCards.tsx)
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { membersData } from "./membersData";

// Define the responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MemberCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Carousel
          responsive={responsive}
          showDots={false}
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          rewind
          shouldResetAutoplay
          slidesToSlide={1}
          swipeable
          partialVisible
        >
          {membersData.map((item) => (
            <div className="card mx-2 p-4" key={item.id}>
              <div className="flex flex-col items-center">
                {/* Circular image */}
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden z-10">
                    <Image
                      src={item.image}
                      alt={`${item.name} Photo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"
                    />
                  </div>
                </div>

                {/* Role title in orange */}
                <h2 className="text-center text-orange-500 text-xl font-bold mb-1">
                  {item.role}
                </h2>

                {/* Name in gray */}
                <p className="text-center text-gray-500 mb-4">{item.name}</p>

                {/* Social icons */}
                <div className="flex justify-center gap-2">
                  <a
                    href={item.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-orange-500" />
                  </a>
                  <a
                    href={`tel:${item.phone}`}
                    className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-md"
                  >
                    <FaPhoneAlt className="text-orange-500" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
