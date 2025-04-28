import React from "react";

export default function MissionSectionMobile() {
  return (
    <section className="py-12 px-4 text-center bg-white">
      <h2 className="text-2xl font-bold text-center mb-2">Our Mission</h2>
      <blockquote className="italic text-base max-w-xl mx-auto">
        "Our mission is to support every chemical engineering student at KFUPM
        in their academic, personal, and career growth. We are dedicated to
        providing a mentoring and diverse atmosphere that promotes ethical
        behavior and prepares students to become leaders capable of addressing
        significant global challenges."
      </blockquote>
      <p className="mt-4 font-bold text-base">Dr. Saed Al-Baharna</p>
      <p className="text-gray-500">Club Advisor</p>
    </section>
  );
}
