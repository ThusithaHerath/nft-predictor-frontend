import { Link } from "react-router-dom";
import ContactForm from "../forms/ContactForm"

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

const ContactArea = () => {
   return (
      <section className="contact-area pt-140 pb-140">
         <div className="container">
            <div className="contact-info-wrap">
               <div className="row justify-content-center">
                  {contact_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="contact-info-item">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h6 className="title">{item.title}</h6>
                              <p>{item.info}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="contact-form-wrap">
               <div className="row g-0">
                  <div className="col-57 order-0 order-lg-2">
                     <div className="contact-form">
                        <h4 className="title">Send a message</h4>
                        <ContactForm />
                        <p className="ajax-response mb-0"></p>
                     </div>
                  </div>
                  <div className="col-43">
                     <div className="contact-map">
                        <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/" allowFullScreen loading="lazy"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
