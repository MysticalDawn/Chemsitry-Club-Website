import { Container } from "react-bootstrap";
import "../../ui/home/offer-section.css";
import offerVector from "../../../public/home/offer-vector.svg";
import Image from "next/image";
import calender_svg from "../../../public/home/calendar.svg";
import fireworks_svg from "../../../public/home/fireworks.svg";
import learning_svg from "../../../public/home/learning.svg";
export default function OfferSection() {
  return (
    <Container className="m-0 p-5 h-100 min-vw-100 offer-container flex-col justify-center align-content-center align-items-center">
      {/* <div className="w-75 z-10 flex-col justify-start position-relative opacity-25 offer-vector">
        <Image src={offerVector} alt="Offer vector" loading="lazy" height={535.55} width={1459} />
      </div> */}
      <main className="flex">
        <section className="z-10 flex-col align-content-center align-items-center w-100">
          <p className="text-white font-light text-base m-0">-Our Services</p>
          <h2 className="text-black font-bold text-5xl overflow-y-hidden">
            What We Offer
          </h2>
          <p className="text-black font-light text-base m-0 w-100">
            Discover the key benefits of joining the KFUPM Chemical Engineering
            Club. We provide valuable opportunities to enhance your academic and
            professional journey.
          </p>
        </section>
        <section className="offer-cards flex-col justify-start align-content-center align-items-center w-100">
          <div className="card-1 flex w-100 align-content-center align-items-center">
            <div
              className="rounded-full border p-3"
              style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
            >
              <Image
                src={calender_svg}
                alt="calendar"
                width={40.54}
                height={40.5}
              />
            </div>
            <div className="flex-col ml-5">
              <h3 className="text-white text-2xl font-bold m-0">
                Calendar & Upcoming Events
              </h3>
              <p className="text-black font-light text-base m-0">
                Check our calendar for upcoming events and important dates.
              </p>
            </div>
          </div>
          <div className="card-2 flex w-100 align-content-center align-items-center">
            <div
              className="rounded-full border p-3"
              style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
            >
              <Image
                src={fireworks_svg}
                alt="calendar"
                width={40.54}
                height={37.5}
                className="rounded-full"
              />
            </div>
            <div className="flex-col ml-5">
              <h3 className="text-white text-2xl font-bold m-0">
                Calendar & Upcoming Events
              </h3>
              <p className="text-black font-light text-base m-0">
                Check our calendar for upcoming events and important dates.
              </p>
            </div>
          </div>
          <div className="card-3 flex w-100 align-content-center align-items-center">
            <div
              className="rounded-full border p-3"
              style={{ borderColor: "#F35000", backgroundColor: "#F35000" }}
            >
              <Image
                src={learning_svg}
                alt="calendar"
                width={40.54}
                height={37.5}
                className="rounded-full"
              />
            </div>
            <div className="flex-col ml-5">
              <h3 className="text-white text-2xl font-bold m-0">
                Calendar & Upcoming Events
              </h3>
              <p className="text-black font-light text-base m-0">
                Check our calendar for upcoming events and important dates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}