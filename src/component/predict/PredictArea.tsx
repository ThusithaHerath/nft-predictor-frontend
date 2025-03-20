
import ContactForm2 from "../forms/ContactForm2"




const PredictArea = () => {
   return (
      <section className="contact-area pt-140 pb-140">
         <div className="container">
            <div className="contact-form-wrap">
               <div className="row g-0">
                     <div className="contact-form">
                        <h4 className="title">Send a message</h4>
                        <ContactForm2 />
                     </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PredictArea
