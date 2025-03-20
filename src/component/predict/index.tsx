import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import PredictArea from "./PredictArea"



const Contact = () => {

   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Predict" />
         <PredictArea />
         <FooterThree />
      </main>
   )
}

export default Contact
