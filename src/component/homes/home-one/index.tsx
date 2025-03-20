import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"

import ChooseArea from "./ChooseArea"

import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"

import RoadMap from "./RoadMap"


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
