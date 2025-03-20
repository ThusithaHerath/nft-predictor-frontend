import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import HomeMain from '../component/homes/home-two';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Two NFT Predictor'} />
         <HomeMain />
      </Wrapper>
   );
};

export default Home;