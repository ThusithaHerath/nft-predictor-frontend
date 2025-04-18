

// interface DataType {
//    id: number;
//    class_name: string;
//    title: string;
//    footer_link: {
//       link: string;
//       link_title: string;
//    }[]
// }

// const footer_data: DataType[] = [
//    {
//       id: 1,
//       class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
//       title: "Usefull Links",
//       footer_link: [{ link: "/contact", link_title: "Contact us" }, { link: "/contact", link_title: "How it Works" }, { link: "/contact", link_title: "Create" }, { link: "/contact", link_title: "Explore" }, { link: "/contact", link_title: "Terms & Services" },]
//    },
//    {
//       id: 2,
//       class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
//       title: "SOLUTIONS",
//       footer_link: [{ link: "/contact", link_title: "Token Suite" }, { link: "/contact", link_title: "Ecosystem" }, { link: "/contact", link_title: "Investment" }, { link: "/contact", link_title: "Portal" }, { link: "/contact", link_title: "Tokenization" },]
//    },
//    {
//       id: 3,
//       class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
//       title: "Usefull Links",
//       footer_link: [{ link: "/contact", link_title: "Help Center" }, { link: "/contact", link_title: "Partners" }, { link: "/contact", link_title: "Suggestions" }, { link: "/blog", link_title: "Blog" }, { link: "/contact", link_title: "Newsletters" },]
//    },
// ]

const FooterThree = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
            <div className="container">
               {/* <div className="footer-top">
                  <div className="row">
                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link to={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-3 col-lg-4 col-sm-8">
                        <div className="footer-widget">
                           <h4 className="fw-title">Subscribe Newsletter</h4>
                           <div className="footer-newsletter">
                              <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                              <NewsletterForm />
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}

               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2025 NFT-Predictor. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <img src="/assets/img/images/footer_shape01.png" alt="" className="alltuchtopdown" />
               <img src="/assets/img/images/footer_shape02.png" alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default FooterThree;
