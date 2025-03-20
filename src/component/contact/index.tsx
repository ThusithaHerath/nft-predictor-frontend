import FooterThree from "../../layouts/footers/FooterThree"
import HeaderThree from "../../layouts/headers/HeaderThree"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Contact" />
         <ContactArea />
         <FooterThree />
      </main>
   )
}

export default Contact
