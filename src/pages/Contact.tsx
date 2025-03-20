import Wrapper from '../layouts/Wrapper';
import SEO from '../component/SEO';
import Contact from '../component/contact';

const Home = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact NFT Predictor'} />
         <Contact />
      </Wrapper>
   );
};

export default Home;