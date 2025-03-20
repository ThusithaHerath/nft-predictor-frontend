import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const Register = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Register" />
         <LogingArea style={true} />
         <FooterThree />
      </main>
   )
}

export default Register
