"use client";
import { Container } from "react-bootstrap";
import "../../ui/home/event-card.css";
import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";
import next_arrow from "../../../public/home/arrow-vector-next.svg";
import back_arrow from "../../../public/home/arrow-vector-back.svg";
import Image from "next/image";
import EventCard from "@/app/lib/home/event-card";

export default function Events() {
  const [eventCounter, setEventCounter] = useState(1);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    barcode: "",
  });
  const [animationClass, setAnimationClass] = useState("");

  // Function to fetch event data from the server
  const fetchEventData = async (eventId: number) => {
    try {
      const response = await fetch(`/api/events/${eventId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event data");
      }
      const data = await response.json();
      setEventData({
        title: data.title,
        date: data.date,
        time: data.time,
        location: data.location,
        barcode: data.barcode,
      });
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  // Fetch event data whenever the eventCounter changes
  useEffect(() => {
    setAnimationClass("fade-out"); // Trigger fade-out animation
    const timeout = setTimeout(() => {
      fetchEventData(eventCounter);
      setAnimationClass("fade-in"); // Trigger fade-in animation
    }, 300); // Match the duration of the fade-out animation

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [eventCounter]);

  const increment = (flag: boolean) => {
    if (eventCounter === 1 && !flag) {
      setEventCounter(1);
    } else if (eventCounter === 10 && flag) {
      setEventCounter(1);
    } else if (flag) {
      setEventCounter(eventCounter + 1);
    } else {
      setEventCounter(eventCounter - 1);
    }
  };

  return (
    <Container className="p-0 min-vw-100 event-container flex align-content-center align-items-center bg-white justify-center">
      <section className="flex-col align-content-center align-items-center w-75 pl-5 ml-5">
        <p className="font-light text-base m-0 latest-event-text">
          -latest events
        </p>
        <h2 className="text-black font-bold text-5xl overflow-y-hidden">
          Here are some of our latest events
        </h2>
        <p className="text-black font-light text-base m-0 w-100">
          {eventCounter}/10
        </p>
        <div className="arrow-btns flex align-items-center align-content-center justify-start">
          <Button
            className="back-arrow-btn flex align-items-center align-content-center justify-center p-2 text-center mr-2 mt-2"
            onPress={() => increment(false)}
          >
            <Image src={back_arrow} alt="back-arrow" />
          </Button>
          <Button
            className="next-arrow-btn flex align-items-center align-content-center justify-center p-2 text-center mr-2 mt-2"
            onPress={() => increment(true)}
          >
            <Image src={next_arrow} alt="next-arrow" />
          </Button>
        </div>
      </section>
      <div className={`h-100 w-50 ${animationClass}`}>
        <EventCard
          title={eventData.title}
          date={eventData.date}
          time={eventData.time}
          location={eventData.location}
          barcode={eventData.barcode}
        />
      </div>
    </Container>
  );
}