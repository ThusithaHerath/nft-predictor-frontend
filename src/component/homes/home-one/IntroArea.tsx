interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Who We Are",
      desc: (
         <>
            NFT Predictor is an AI-powered platform that predicts NFT success rates, 
            provides data-driven marketing strategies, and helps creators avoid failed launches. 
            Our advanced machine learning models analyze NFT trends, sentiment, and market factors 
            to offer actionable insights for NFT creators, investors, and marketers.
         </>
      ),   },
   {
      id: 2,
      title: "Why NFT Success Matters?",
      desc: (
         <>
            The NFT market is volatile—over 90% of NFT collections fail due to poor marketing, 
            low engagement, or wrong timing. NFT Predictor uses AI models to help you make 
            data-driven decisions by predicting success rates, analyzing audience sentiment, 
            and recommending optimized marketing strategies to maximize impact.
         </>
      ),   },
   {
      id: 3,
      title: "How We Help?",
      desc: (
         <>
            Using real-time analytics, we provide:
            <ul>
               <li>📈 Success probability predictions for new & existing NFT collections</li>
               <li>🛠 AI-driven marketing strategies to boost reach & engagement</li>
               <li>🌍 Location-based insights on best regions to promote NFTs</li>
               <li>🔍 Sentiment analysis to measure NFT popularity on Twitter & Discord</li>
            </ul>
            NFT Predictor empowers creators to launch & grow NFTs successfully with precision.
         </>
      ),   },
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                  <h2 className="title style2">Introducing NFT Predictor</h2>
                  <p className="sec-text">AI-powered insights for NFT success prediction & marketing optimization</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        <p className="intro-wrap-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <img src="/assets/img/update/normal/intro_1-1.png" alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Our Mission & Vision</h6>
                     <p className="intro-wrap-text">
                        At NFT Predictor, our mission is to empower NFT creators & investors 
                        with data-driven insights to reduce risk and optimize success.  
                     </p>
                     <p className="intro-wrap-text mt-40">
                        Through AI-powered analytics, we provide market intelligence, audience insights, 
                        and growth strategies to help you make informed NFT decisions.
                     </p>
                     <p className="intro-wrap-text mt-40">
                        Whether you’re launching a new NFT collection or analyzing an existing one, 
                        NFT Predictor helps you predict success, improve marketing, and expand reach.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
