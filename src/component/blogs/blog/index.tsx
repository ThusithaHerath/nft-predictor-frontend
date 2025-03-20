import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import Breadcrumb from "../../common/Breadcrumb";
import DocumentArea from "../../common/DocumentArea";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <main>
      <HeaderThree />
      <Breadcrumb title="Our Blog" />
      <BlogArea />
      <DocumentArea />
      <FooterThree />
    </main>
  )
}

export default Blog;
