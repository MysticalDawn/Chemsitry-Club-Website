import { Container } from "react-bootstrap";
import "../../ui/home/offer-section.css";
import offerVector from "../../../public/home/offer-vector.svg";
import Image from "next/image";
export default function OfferSection() {
  return (
    <Container className="m-0 p-0 offer-container w-100 h-100">
      <div className="bg-img-vector z-0 position-absolute w-100">
        <Image src={offerVector} alt="Offer vector" />
      </div>
      <main className="flex justify-center align-content-center align-items-center w-100 h-100 position-absolute">
        <section className="z-10 flex-col">
          <p>Our Services</p>
        </section>
        <section className="z-10 flex-col"></section>
      </main>
    </Container>
  );
}
