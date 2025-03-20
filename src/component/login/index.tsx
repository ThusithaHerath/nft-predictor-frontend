import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const Login = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Login" />
         <LogingArea style={false} />
         <FooterThree />
      </main>
   )
}

export default Login
