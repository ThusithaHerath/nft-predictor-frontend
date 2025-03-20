import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import BlogDetails from '../component/blogs/blog-details';

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details NFT Predictor'} />
      <BlogDetails />
    </Wrapper>
  );
};

export default Home;