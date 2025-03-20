import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import Brand from "./Brand"
import ChooseArea from "./ChooseArea"
import EventArea from "./EventArea"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"
import InvestArea from "./InvestArea"
import PartnerArea from "./PartnerArea"
import RoadMap from "./RoadMap"
import Team from "./Team"

const HomeOne = () => {
  return (
    <div className="home-purple-gradient">
      <HeaderOne />
      <Hero />
      {/* <Brand /> */}
      <ChooseArea />
      <IntroArea />
      <RoadMap />
      {/* <InvestArea /> */}
      {/* <Team /> */}
      {/* <PartnerArea /> */}
      {/* <EventArea /> */}
      <FaqArea />
      <FooterOne />
    </div>
  )
}

export default HomeOne
