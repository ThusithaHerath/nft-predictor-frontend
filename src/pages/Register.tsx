import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Register from '../component/register';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Register NFT Predictor'} />
         <Register />
      </Wrapper>
   );
};

export default Home;