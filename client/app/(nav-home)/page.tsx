import Home from "./first-part/main-nav";
import OfferSection from "./second-part/offer-section";
import { Container } from "react-bootstrap";
import Footer from "../components/desktop/footer";
import Events from "./third-part/events";
export default function Page() {
  return (
    <Container className="m-0 p-0 w-100 h-100 min-vw-100">
      <Home />
      <OfferSection />
      <Events />
      <Footer />
    </Container>
  );
}
