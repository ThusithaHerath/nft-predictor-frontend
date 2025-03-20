import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import HomeTwoMain from '../component/homes/home-one';

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'NFT Predictor'} />
      <HomeTwoMain />
    </Wrapper>
  );
};

export default Home;