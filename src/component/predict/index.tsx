import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import DocumentArea from "../common/DocumentArea"
import PredictArea from "./PredictArea"

const Contact = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Contact" />
         <PredictArea />
         <DocumentArea />
         <FooterThree />
      </main>
   )
}

export default Contact
