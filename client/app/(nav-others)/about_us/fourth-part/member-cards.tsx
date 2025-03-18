import React from "react";

const members = [
  {
    name: "Mohammed Alqabawi",
    role: "Financial Officer",
    image: "/images/financial-officer.png",
    linkedin: "#",
    phone: "#",
  },
  {
    name: "Mohammed Alqabawi",
    role: "Financial Officer",
    image: "/images/financial-officer.png",
    linkedin: "#",
    phone: "#",
  },
  {
    name: "Mohammed Alqabawi",
    role: "Financial Officer",
    image: "/images/financial-officer.png",
    linkedin: "#",
    phone: "#",
  },
  {
    name: "Mohammed Alqabawi",
    role: "Financial Officer",
    image: "/images/financial-officer.png",
    linkedin: "#",
    phone: "#",
  },
];

export default function MemberCards() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">{member.role}</h3>
            <p className="text-gray-700">{member.name}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href={`tel:${member.phone}`} className="text-red-600">
                <i className="fas fa-phone text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
