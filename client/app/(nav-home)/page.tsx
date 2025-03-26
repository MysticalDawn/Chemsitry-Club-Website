import Home from "./first-part/main-nav";
import HomeMobile from "./first-part/main-nav-mobile";
import OfferSection from "./second-part/offer-section";
import OfferSectionMobile from "./second-part/offer-section-mobile";
import { Container } from "react-bootstrap";
import EventsCard from "./third-part/events";
import EventsCardMobile from "./third-part/events-card-mobile";
import Footer from "../components/desktop/footer";
import Events from "./third-part/events";
export default function Page() {
  return (
    <Container className="m-0 p-0 w-100 h-100 min-vw-100">
      <Home />
      <OfferSection />
      <Events />
      <Footer />
      {/* {isMobile ? <HomeMobile /> : <Home />}
      {isMobile ? <OfferSectionMobile /> : <OfferSection />}
      {isMobile ? <EventsCardMobile /> : <EventsCard />} */}
    </Container>
  );
}
