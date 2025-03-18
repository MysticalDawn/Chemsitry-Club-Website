import React from "react";
import Image from "next/image";

export default function OrgChart() {
  return (
    <section className="py-16 bg-gray-100 ">
      <h5 className="text-1xl font-bold text-center text-amber-600">-Members</h5>
      <h2 className="text-3xl font-bold text-center mb-8">Club 2023/2024</h2>
      <div className="flex justify-center mb-8">
        <Image
          src="/home/MemChart.png"
          alt="KFUPM Chemical Engineering Club Organizational Chart"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
