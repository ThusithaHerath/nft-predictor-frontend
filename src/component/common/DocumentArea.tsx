import GoogleMapComponent from "../maps/GoogleMapComponent"

interface LocationSuccessRate {
   latitude: number;
   longitude: number;
   location: string;
   success_rate: string;
}

interface PredictionResponse {
   success_probability: string;
   risk_level: string;
   location_success_rates: LocationSuccessRate[];
   recommended_marketing_strategies: string[];
   strategy_explanation: string[];
}

const DocumentArea = ({ predictionData }: { predictionData: PredictionResponse | null }) => {
   if (!predictionData) {
      return (
         <section className="document-area">
            <div className="container">
               <div className="document-inner-wrap mt-40">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="section-title text-center mb-60 mt-20">
                           <h2 className="title">Your Results will be displayed here</h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="document-shape">
               <img src="/assets/img/images/document_shape.png" alt="" className="alltuchtopdown" />
            </div>
         </section>
      );
   }

   return (
      <section className="document-area">
         <div className="container">
            <div className="document-inner-wrap mt-40">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-60 mt-20">
                        <h2 className="title">Prediction Results</h2>
                     </div>
                  </div>
               </div>

               <div className="row mt-20">
                  <div className="row-lg-8">
                     <div className="document-form-wrap">
                        <p><strong>Success Probability:</strong> {predictionData.success_probability}</p>
                        <p><strong>Risk Level:</strong> {predictionData.risk_level}</p>

                        <h4>📍 Best Locations:</h4>
                        <ul>
                           {predictionData.location_success_rates.map((location, index) => (
                              <li key={index}>
                                 <strong>{location.location}:</strong> {location.success_rate} 
                                 (Lat: {location.latitude}, Long: {location.longitude})
                              </li>
                           ))}
                        </ul>
                        <h4>🌍 Google Maps View:</h4>
                        <GoogleMapComponent locations={predictionData.location_success_rates} />
                        
                        <h4>📢 Recommended Marketing Strategies:</h4>
                        <ul>
                           {predictionData.recommended_marketing_strategies.map((strategy, index) => (
                              <li key={index}>{strategy}</li>
                           ))}
                        </ul>

                        <h4>📌 Strategy Explanation:</h4>
                        <ul>
                           {predictionData.strategy_explanation.map((explanation, index) => (
                              <li key={index}>{explanation}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="document-shape">
            <img src="/assets/img/images/document_shape.png" alt="" className="alltuchtopdown" />
         </div>
      </section>
   );
};

export default DocumentArea;

