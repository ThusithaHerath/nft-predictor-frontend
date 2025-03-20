import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import Breadcrumb from "../../common/Breadcrumb";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Our Blog" />
      <BlogArea />
      <FooterThree />
    </main>
  )
}

export default Blog;
