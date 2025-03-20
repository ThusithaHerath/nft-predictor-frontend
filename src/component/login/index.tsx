import Breadcrumb from "../common/Breadcrumb"
import LogingArea from "../common/LoginArea"
import DocumentArea from "../common/DocumentArea"
import HeaderThree from "../../layouts/headers/HeaderThree"
import FooterThree from "../../layouts/footers/FooterThree"

const Login = () => {
   return (
      <main>
         <HeaderThree />
         <Breadcrumb title="Login" />
         <LogingArea style={false} />
         <DocumentArea />
         <FooterThree />
      </main>
   )
}

export default Login
