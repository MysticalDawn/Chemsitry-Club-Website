import React from "react";
import Image from "next/image";

export default function CoreValues() {
  return (
    <section className="bg-gray-100 py-4"> {/* Reduced vertical padding */}
      <div className="my-8 relative w-full max-w-6xl mx-auto aspect-[16/9]">
        <Image
          src="/home/CoreValChe.png"
          alt="Core Values Chart"
          layout="fill"
          objectFit="contain"
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}
