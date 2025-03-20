import Slider from "react-slick";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: string;
   desc: JSX.Element;
}[];

const partner_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/update/client/client-1-4.svg",
      desc: (<>Stable crypto currency and an important part of the UniFox ecosystem</>),
   },
   {
      id: 2,
      icon: "/assets/img/update/client/client-1-2.svg",
      desc: (<>Online exchanger, specializing in the exchange of private individuals</>),
   },
   {
      id: 3,
      icon: "/assets/img/update/client/client-1-5.svg",
      desc: (<>A company that provides all IT services within the ecosystem of UniFox</>),
   },
   {
      id: 4,
      icon: "/assets/img/update/client/client-1-4.svg",
      desc: (<>Stable crypto currency and an important part of the UniFox ecosystem</>),
   },
   {
      id: 5,
      icon: "/assets/img/update/client/client-1-4.svg",
      desc: (<>Online exchanger, specializing in the exchange of private individuals</>),
   },
   {
      id: 6,
      icon: "/assets/img/update/client/client-1-5.svg",
      desc: (<>A company that provides all IT services within the ecosystem of UniFox</>),
   },
];

const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   autoplay: true,
   spaceBetween: 30,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}


const PartnerArea = () => {
   return (
      <div className="pt-130 bg-black2 pb-20">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Our partners</h2>
            </div>
            <div className="slider-area">
               <Slider {...settings} className="row partner-slider1">
                  {partner_data.map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="partner-card">
                           <div className="partner-card-img">
                              <img src={item.icon} alt="img" />
                           </div>
                           <p className="partner-card-text">{item.desc}</p>
                           <Link className="btn btn3" to="/blog">EXPLORE</Link>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default PartnerArea
