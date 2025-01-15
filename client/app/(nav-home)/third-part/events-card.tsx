import { Container } from "react-bootstrap";

export default function EventsCard() {
    return(
        <Container className="m-0 p-5 h-100 min-vw-100 event-container flex-col justify-center align-content-center align-items-center">
            <section className="">
            <p className="text-black font-light text-base m-0">-Our Services</p>
          <h2 className="text-black font-bold text-5xl overflow-y-hidden">
            What We Offer
          </h2>
          <p className="text-black font-light text-base m-0 w-100">
            Discover the key benefits of joining the KFUPM Chemical Engineering
            Club. We provide valuable opportunities to enhance your academic and
            professional journey.
          </p>
            </section>
            <section className="">

            </section>
        </Container>
    )
}