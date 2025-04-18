
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   thumb: string;
   title: string;
   designasion: string
}[];

const founder_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/update/team/founder-1-1.png",
      title: "Thusitha Herath",
      designasion: "Researcher, Software Engineer",
   }
]

const TeamFounder = () => {
   return (
      <div className="pb-110">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Founder</h2>
            </div>
            <div className="row gy-4 justify-content-center">
               {founder_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="founder-card">
                        <div className="founder-card-img">
                           <img src={item.thumb} alt="img" />
                        </div>
                        <div className="founder-card-details">
                           <h3 className="founder-card-title">{item.title}</h3>
                           <p className="founder-card-desig">{item.designasion}</p>
                           <div className="social-btn">
                              <Link to="https://www.linkedin.com/">
                                 <i className="fab fa-linkedin"></i>
                              </Link>
                              <Link to="#">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                       d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                       fill="currentColor"></path>
                                 </svg>
                              </Link>
                              <Link to="https://youtube.com/">
                                 <i className="fab fa-youtube"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TeamFounder
