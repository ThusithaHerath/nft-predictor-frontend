import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Predict from '../component/predict';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact NFT Predictor'} />
         <Predict />
      </Wrapper>
   );
};

export default Home;