/* eslint-disable @typescript-eslint/no-explicit-any */
import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Breadcrumb from '../component/common/Breadcrumb';
import BlogDetailsArea from '../component/blogs/blog-details/BlogDetailsArea';
import { useParams } from 'react-router-dom';
import useBlogs from '../hooks/UseBlog';
import HeaderThree from '../layouts/headers/HeaderThree';
import FooterThree from '../layouts/footers/FooterThree';

const DynamicBlogDeatils = () => {

   const { id } = useParams();
   const { blogs } = useBlogs();
   const blog = blogs.find(blog => Number(blog.id) === Number(id));
   return (
      <Wrapper>
         <SEO pageTitle={'Blog Deatils NFT Predictor'} />
         <HeaderThree />
         <Breadcrumb title="Blog Details" />
         <BlogDetailsArea blog={blog} />
         <FooterThree />
      </Wrapper>
   );
};

export default DynamicBlogDeatils;