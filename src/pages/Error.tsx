import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Error from '../component/error/Index';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'404 || NFT Predictor'} />
         <Error />
      </Wrapper>
   );
};

export default Home;