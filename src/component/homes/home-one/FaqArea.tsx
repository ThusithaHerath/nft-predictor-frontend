import { useEffect, useState } from "react";
import faq_data from "../../../data/FaqData";

interface faqItem {
    id: number;
    page: string;
    title: string;
    desc: string;
    showAnswer: boolean;
}[];

const FaqArea = () => {
    const filteredFaqData = faq_data.filter((item) => item.page === "home_1");

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
        <div className="pt-140 pb-140 overflow-hidden">
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-xl-4 text-xl-start">
                        <div className="section-title mb-50">
                            <h2 className="title style2">Frequently Asked Questions</h2>
                            <p className="sec-text">DO have any kind Of questions? We&apos;re here to help.</p>
                        </div>
                        <div className="faq-thumb mt-60">
                            <img src="/assets/img/update/normal/faq_1-1.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faqData.map((item, index) => (
                                <div key={item.id} className={`accordion-card ${item.showAnswer ? "active" : ""} `}>
                                    <div className="accordion-header" id={`heading-${item.id}`}>
                                        <button
                                            className={`accordion-button  ${item.showAnswer ? "collapsed" : ""}`}
                                            type="button" onClick={() => toggleAnswer(index)}
                                        >
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
    );
};

export default FaqArea;
