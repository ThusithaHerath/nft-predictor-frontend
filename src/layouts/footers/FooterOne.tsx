import { Link } from "react-router-dom";

const FooterOne = () => {
   return (
      <footer className="footer-wrapper footer-layout1 position-relative">
         <div className="bg-gradient-1">
            <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img" />
         </div>
         <div className="container">
            {/* Center footer-menu-area */}
            <div className="footer-menu-area d-flex justify-content-center">
               <div className="row gy-4 align-items-center text-center">
                  <div className="col-12">
                     <div className="social-btn justify-content-center">
                        <Link to="https://www.facebook.com/">
                           <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path
                                 d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                 fill="currentColor"></path>
                           </svg>
                        </Link>
                        <Link to="https://instagram.com/">
                           <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="https://linkedin.com/">
                           <i className="fab fa-linkedin"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Center copyright-wrap */}
         <div className="copyright-wrap text-center">
            <div className="container">
               <div className="row gy-3 justify-content-center">
                  <div className="col-auto">
                     <p className="copyright-text">
                        Copyright © 2025 <Link to="#">NFT-Predictor</Link> All rights reserved.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterOne;
