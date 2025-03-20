import faq_data from "../../../data/FaqData"
import { useEffect, useState } from "react";

interface faqItem {
   id: number;
   page: string;
   title: string;
   desc: string;
   showAnswer: boolean;
}[];

const FaqArea = () => {

   const filteredFaqData = faq_data.filter((item) => item.page === "home_2");
   const [faqData, setFaqData] = useState<faqItem[]>([]);

   useEffect(() => {
      const initialFaqData: faqItem[] = filteredFaqData.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (index: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="pt-140 pb-140 overflow-hidden position-relative z-index-common">
         <div className="faq-2-shape-1"></div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 text-center">
                  <div className="section-title mb-50">
                     <span className="sub-title">FAQ</span>
                     <h2 className="title style2">Popular questions about blockchain</h2>
                     <p className="sec-text">We’ve worked with over 400 companies to build blockchain solutions for their business, and we are still growing.</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="accordion-area accordion" id="faqAccordion">
                     {faqData.map((item, index) => (
                        <div key={item.id} className={`accordion-card style2 ${item.showAnswer ? "active" : ""} `}>
                           <div className="accordion-header" id={`heading-${item.id}`}>
                              <button
                                 className={`accordion-button  ${item.showAnswer ? "" : "collapsed"}`}
                                 type="button" onClick={() => toggleAnswer(index)}>
                                 <span className="number">{item.id}</span>
                                 {item.title}
                              </button>
                           </div>
                           {item.showAnswer && (
                              <div id="collapseOne" className="accordion-collapse collapse show">
                                 <div className="accordion-body">
                                    <p className="faq-text">{item.desc}</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqArea
