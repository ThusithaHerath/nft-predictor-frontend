import { Link } from "react-router-dom";
import ContactForm2 from "../forms/ContactForm2"

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 2,
      icon: "fas fa-phone-alt",
      title: "Contact",
      info: (<><Link to="tel:0123456789">+94 71 140 72 61</Link> <br /></>),
   },
   {
      id: 3,
      icon: "fas fa-envelope",
      title: "Email",
      info: (<><Link to="mailto:xeco.@example.com">nftpredictor@predict.com</Link></>),
   },
]

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
