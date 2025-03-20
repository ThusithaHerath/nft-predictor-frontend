import FooterThree from "../../../layouts/footers/FooterThree"
import HeaderThree from "../../../layouts/headers/HeaderThree"
import Breadcrumb from "../../common/Breadcrumb"
import DocumentArea from "../../common/DocumentArea"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Blog Details" />
      <BlogDetailsArea />
      <DocumentArea />
      <FooterThree />
    </main>
  )
}

export default BlogDetails
