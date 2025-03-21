import Slider from "react-slick";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   icon: string;
   title: string;
   desc: JSX.Element;
}[];

const cta_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/update/client/press-1-1.svg",
      title: "huffpost.com",
      desc: (<>UniFox seeks to incorporate cryptocurrencies into everyday life through the introduction of their autonomous design.</>),
   },
   {
      id: 2,
      icon: "/assets/img/update/client/press-1-1.svg",
      title: "msnbc.com",
      desc: (<>In excellence from Tether or love another &quot;stable&quot; crippling. Unicash can easily be converted to local currency by special bankers </>),
   },
   {
      id: 3,
      icon: "/assets/img/update/client/press-1-1.svg",
      title: "huffpost.com",
      desc: (<>UniFox seeks to incorporate cryptocurrencies into everyday life through the introduction of their autonomous design.</>),
   },
   {
      id: 4,
      icon: "/assets/img/update/client/press-1-1.svg",
      title: "msnbc.com",
      desc: (<>In excellence from Tether or love another &quot;stable&quot; crippling. Unicash can easily be converted to local currency by special bankers </>),
   },
];

const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 2,
   slidesToScroll: 1,
   adaptiveHeight: true,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
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

const CtaArea = () => {
   return (
      <div className="press-cta-area pt-130">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Press us</h2>
            </div>
            <Slider {...settings} className="cta-slider1 row">
               {cta_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="cta-wrap1">
                        <div className="cta-wrap-details">
                           <img src={item.icon} alt="img" />
                           <h3 className="cta-wrap-title">{item.title}</h3>
                           <p className="cta-wrap-text">{item.desc}</p>
                        </div>
                        <Link className="btn btn4" to="/blog">READ MORE</Link>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default CtaArea;
