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
                  <div className="col-lg-12 text-center">
                     <div className="section-title mb-60 mt-20">
                        <h2 className="title text-success">🚀 Prediction Results</h2>
                     </div>
                  </div>
               </div>

               {/* Success Probability and Risk Level */}
               <div className="row">
                  <div className="col-md-6">
                     <div className="card text-white bg-info shadow-lg p-3">
                        <div className="card-body text-center">
                           <h4 className="card-title">🔮 Success Probability</h4>
                           <h2 className="display-4 fw-bold">{predictionData.success_probability}</h2>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-md-6">
                        <div
                           className={`card text-white shadow-lg p-3 ${
                              predictionData.risk_level === "High"
                              ? "bg-danger"
                              : predictionData.risk_level === "Medium"
                              ? "bg-warning"
                              : "bg-success"
                           }`}
                        >
                           <div className="card-body text-center">
                              <h4 className="card-title">⚠ Risk Level</h4>
                              <h3 className="display-4 fw-bold">{predictionData.risk_level}</h3>
                           </div>
                        </div>
                        </div>



               </div>
               

               {/* Best Locations */}
               <div className="mt-4">
                  <h4 className="text-primary">📍 Best Locations</h4>
                  <ul className="list-group">
                     {predictionData.location_success_rates.map((location, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                           <strong>{location.location}</strong>
                           <span className="badge bg-success rounded-pill">{location.success_rate}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Google Map */}
               <div className="mt-4">
                  <h4 className="text-white text-center">🌍 Google Maps View</h4>
                  <GoogleMapComponent locations={predictionData.location_success_rates} />
               </div>

               {/* Recommended Marketing Strategies */}
               <div className="mt-4">
                  <h4 className="text-white p-3 rounded text-center">📢 Recommended Marketing Strategies</h4>
                  <div className="row">
                     {predictionData.recommended_marketing_strategies.map((strategy, index) => (
                        <div key={index} className="col-md-4 mb-3 ">
                           <div className="card bg-light ">
                              <div className="card-body text-center bg-success">
                                 <p className="text-light fw-bold">✅ {strategy}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>


               {/* Strategy Explanation */}
               <div className="mt-4">
                  <h4 className="text-white bg-indigo-600 p-3 rounded text-center">📌 Strategy Explanation</h4>
                  <ul className="list-group">
                     {predictionData.strategy_explanation.map((explanation, index) => (
                        <li key={index} className="list-group-item bg-purple-100 text-purple-800 d-flex align-items-center">
                           <span className="me-2">🔍</span> 
                           <span className="fw-semibold">{explanation}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               
            </div>
         </div>

         {/* Decorative Image */}
         <div className="document-shape mt-4 text-center">
            <img src="/assets/img/images/document_shape.png" alt="" className="alltuchtopdown img-fluid" />
         </div>
      </section>
   );
};

export default DocumentArea;

