"use client";
import { Container } from "react-bootstrap";
import "../../ui/home/event-card.css";
import { Button } from "@nextui-org/button";
import { useState, useEffect } from "react";
import next_arrow from "../../../public/home/arrow-vector-next.svg";
import back_arrow from "../../../public/home/arrow-vector-back.svg";
import Image from "next/image";
import EventCard from "@/app/lib/home/event-card";

export default function EventsMobile() {
  const [eventCounter, setEventCounter] = useState(1);

  interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    barcode: string;
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://chem-website-server.vercel.app/get_events`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch event data");
        }
        const { data } = await response.json();
        setEvents(data); // Store the fetched events in state
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData();
  }, []); // Empty dependency array ensures this runs only once

  // Update the animation and event data when the eventCounter changes
  useEffect(() => {
    if (events.length > 0) {
      setAnimationClass("fade-out"); // Trigger fade-out animation
      const timeout = setTimeout(() => {
        setAnimationClass("fade-in"); // Trigger fade-in animation
      }, 300); // Match the duration of the fade-out animation
      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [eventCounter, events]);

  const increment = (flag: boolean) => {
    if (eventCounter === 1 && !flag) {
      setEventCounter(1);
    } else if (eventCounter === events.length && flag) {
      setEventCounter(1);
    } else if (flag) {
      setEventCounter(eventCounter + 1);
    } else {
      setEventCounter(eventCounter - 1);
    }
  };

  return (
    <Container className="p-3 min-vw-100 event-container-mobile flex flex-col bg-white">
      <section className="flex flex-col w-full mb-4">
        <p className="font-light text-sm m-0 latest-event-text">
          -latest events
        </p>
        <h2 className="text-black font-bold text-2xl overflow-y-hidden">
          Here are some of our latest events
        </h2>
        <p className="text-black font-light text-sm m-0">
          {eventCounter}/{events.length || 0}
        </p>
        <div className="arrow-btns flex items-center mt-2">
          <Button
            className="back-arrow-btn flex items-center justify-center p-2 text-center mr-2"
            onPress={() => increment(false)}
          >
            <Image src={back_arrow} alt="back-arrow" width={15} height={15} />
          </Button>
          <Button
            className="next-arrow-btn flex items-center justify-center p-2 text-center"
            onPress={() => increment(true)}
          >
            <Image src={next_arrow} alt="next-arrow" width={15} height={15} />
          </Button>
        </div>
      </section>

      <div className={`w-full ${animationClass} event-card-mobile-wrapper`}>
        <EventCard
          title={events[eventCounter - 1]?.title || ""}
          date={events[eventCounter - 1]?.date || ""}
          time={events[eventCounter - 1]?.time || ""}
          location={events[eventCounter - 1]?.location || ""}
          barcode={events[eventCounter - 1]?.barcode || ""}
        />
      </div>
    </Container>
  );
}
