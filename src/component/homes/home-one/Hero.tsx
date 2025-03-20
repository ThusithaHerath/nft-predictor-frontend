import { Link } from "react-router-dom";


const Hero = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient"></div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <img src="/assets/img/update/hero/hero-1-1.jpg" alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">
                        Predict NFT Success & Avoid Failures with AI-Powered Insights
                     </h1>
                     <p className="hero-subtitle">
                        Leverage machine learning to analyze NFT trends, predict success, and get tailored marketing strategies to maximize impact.
                     </p>
                     <div className="btn-wrap">
                        <Link to="/predict" className="btn btn2">
                           Start Prediction
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">AI-Powered Insights for Smarter NFT Investments</h2>
               <ul className="skill-feature_list">
                  <li><span>Data-Driven</span> Market Analysis</li>
                  <li><span>Real-Time</span> Success Predictions</li>
                  <li><h4>AI Insights</h4></li>
               </ul>

               <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "85%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">Success Rate: 85%</div>
               </div>

               <ul className="skill-feature_list style2">
                  <li>150+ Collections Analyzed</li>
                  <li>95% AI Accuracy</li>
                  <li>100+ Marketing Strategies</li>
               </ul>

               {/* <div className="banner-countdown-wrap">
                  <h3 className="next-trend-title">Next NFT Market Prediction Update</h3>
                  <div className="coming-time" data-countdown="2024/8/29">
                     <CountdownClock />
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default Hero;
