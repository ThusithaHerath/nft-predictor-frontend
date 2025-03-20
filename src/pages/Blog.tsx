import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Blog from '../component/blogs/blog';

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog NFT Predictor'} />
      <Blog />
    </Wrapper>
  );
};

export default Home;