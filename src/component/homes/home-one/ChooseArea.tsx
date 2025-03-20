interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: string;
   title: string;
   price?: string;
   desc: string;
}[];

const amount_data: DataType[] = [
   {
      id: 1,
      title: "Projected NFT Price Growth",
      price: "1.25 ETH",
      skill: "85%",
      value: "10,000",
      value_2: "500,000",
   },
   {
      id: 2,
      title: "Predicted Market Engagement",
      price: "1.75 ETH",
      skill: "75%",
      value: "8,500",
      value_2: "420,000",
   },
   {
      id: 3,
      title: "Success Probability Score",
      price: "90%",
      skill: "90%",
      value: "12,000",
      value_2: "600,000",
   },
];

const choose_data: DataType2[] = [
   {
      id: 1,
      icon: "/assets/img/update/icon/feature-icon1-1.svg",
      title: "Predicted Value of Your NFT Collection",
      price: "180,000",
      desc: "Based on AI-driven analytics and historical trends.",
   },
   {
      id: 2,
      icon: "/assets/img/update/icon/feature-icon1-2.svg",
      title: "Engagement Score & Sentiment Analysis",
      desc: "Community activity & public perception impact NFT success.",
   },
   {
      id: 3,
      icon: "/assets/img/update/icon/feature-icon1-3.svg",
      title: "Recommended Marketing Investment",
      price: "5,000",
      desc: "Optimal marketing spend for maximum NFT exposure & success.",
   },
]

const ChooseArea = () => {
   return (
      <div id="featureone" className="wcu-area-1 pt-130 pb-140 position-relative">
         <div className="bg-gradient-1">
         <img src="/assets/img/update/bg/bg-gradient1-1.jpg" alt="img" />
         </div>
         <div className="container">
            <div className="mb-25">
               <div className="row gy-5">
                  <div className="col-lg-7">
                     <div className="section-title mb-0">
                        <h2 className="title style2">Why Choose NFT Predictor for Predicting NFT Success?</h2>
                        <p className="sec-text">
                           Gain real-time insights into your NFT's potential success.
                           Analyze price trends, engagement metrics, and AI-driven marketing strategies
                           to maximize impact.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-5">
                  <div className="wcu-thumb text-center alltuchtopdown">
                        <img src="/assets/img/update/normal/why_1-1.png" alt="img" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-5 justify-content-between">
               <div className="col-lg-5">
                  <div className="wcu-amount-quantity">
                     <div className="amount">
                        <h5 className="title">Estimated Initial NFT Price</h5>
                        <p className="price">0.85 ETH</p>
                     </div>
                     <div className="quantity">
                        <h5 className="title">Projected Buyers</h5>
                        <p className="price">5,000+</p>
                     </div>
                  </div>
                  <ul className="wcu-price-progress-wrap">
                     {amount_data.map((item) => (
                        <li key={item.id}>
                           <h6 className="progress-wrap-title">{item.title}</h6>
                           <p className="progress-wrap-text">{item.price}</p>
                           <div className="skill-feature">
                              <div className="progress">
                                 <div className="progress-bar" style={{ width: item.skill }}>
                                 </div>
                              </div>
                              <div className="progress-value">
                                 <span>{item.value} Active Users</span>
                                 <span>{item.value_2} Total Market Engagement</span>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-6">
                  {choose_data.map((item) => (
                     <div key={item.id} className="feature-card">
                        <div className="feature-card-icon">
                           <img src={item.icon} alt="img" />
                        </div>
                        <div className="feature-card-details">
                           <h4 className="feature-card-title">{item.title}</h4>
                           {item.price && <p className="feature-card-text">{item.price} $</p>}
                           <p className="feature-card-text">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChooseArea;
