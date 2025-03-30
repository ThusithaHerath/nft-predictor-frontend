import ContactForm2 from "../forms/ContactForm2"
import DocumentArea from "../common/DocumentArea"
import { useState } from "react";


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

const PredictArea = () => {
   const [predictionData, setPredictionData] = useState<PredictionResponse | null>(null);

   return (
      <section className="contact-area pt-140 pb-140">
         <div className="container">
            <div className="contact-form-wrap">
               <div className="row g-0">
                     <div className="contact-form">
                        <h4 className="title">Get your predictions</h4>
                        <ContactForm2 setPredictionData={setPredictionData}/>
                     </div>
                     <div className="contact-form">
                        <DocumentArea  predictionData={predictionData}/>
                     </div>
       
               </div>
            </div>
         </div>
      </section>
   )
}

export default PredictArea
