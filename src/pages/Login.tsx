import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Login from '../component/login';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Login NFT Predictor'} />
         <Login />
      </Wrapper>
   );
};

export default Home;