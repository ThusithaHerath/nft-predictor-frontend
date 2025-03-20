import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import ResetPassword from '../component/reset-password';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Reset Password NFT Predictor'} />
         <ResetPassword />
      </Wrapper>
   );
};

export default Home;