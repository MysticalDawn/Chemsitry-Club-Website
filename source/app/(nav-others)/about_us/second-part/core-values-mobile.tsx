import React from "react";

const coreValues = [
  { title: "Envision", description: "Create the future", icon: "/icons/envision.svg" },
  { title: "Engage", description: "Build relationships", icon: "/icons/engage.svg" },
  { title: "Empower", description: "Inspire others", icon: "/icons/empower.svg" },
  { title: "Enable", description: "Build capability", icon: "/icons/enable.svg" },
  { title: "Execute", description: "Deliver results", icon: "/icons/execute.svg" },
];

export default function CoreValuesMobile() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        Core Values
      </h2>
      <div className="flex flex-col gap-4 px-4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={value.icon}
              alt={value.title}
              className="w-12 h-12 mx-auto mb-2"
            />
            <h3 className="text-lg font-medium">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
