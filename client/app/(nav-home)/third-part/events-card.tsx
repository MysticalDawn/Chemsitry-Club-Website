"use client";
import { Container } from "react-bootstrap";
import "../../ui/home/event-card.css";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import next_arrow from "../../../public/home/arrow-vector-next.svg";
import back_arrow from "../../../public/home/arrow-vector-back.svg";
import Image from "next/image";
export default function EventsCard() {
  const [eventCounter, setEventCounter] = useState(1);
  const increment = (flag: boolean) => {
    if (eventCounter == 1 && !flag) {
      setEventCounter(1);
    } else if (eventCounter == 10 && flag) {
      setEventCounter(1);
    } else if (flag) {
      setEventCounter(eventCounter + 1);
    } else {
      setEventCounter(eventCounter - 1);
    }
  };
  return (
    <Container className="p-0 h-100 min-vw-100 event-container flex align-content-center align-items-center bg-white">
      <section className="flex-col align-content-center align-items-center w-50 pl-5 ml-5">
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
      <section className="flex justify-end h-100 w-100 pt-5 pb-5">
        <div className="colored-card w-75 h-100"></div>
      </section>
    </Container>
  );
}
