import Breadcrumb from "../common/Breadcrumb"
import ForgotForm from "../forms/ForgotForm"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const ResetPassWord = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Reset PassWord" />
         <ForgotForm />
         <FooterThree />
      </main>
   )
}

export default ResetPassWord
