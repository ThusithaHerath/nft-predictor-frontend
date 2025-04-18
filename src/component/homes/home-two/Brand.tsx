import Slider from 'react-slick';

const brand_data = [
   "/assets/img/update/client/client-2-1.svg",
   "/assets/img/update/client/client-2-2.svg",
   "/assets/img/update/client/client-2-3.svg",
   "/assets/img/update/client/client-2-4.svg",
   "/assets/img/update/client/client-2-5.svg",
   "/assets/img/update/client/client-2-1.svg",
   "/assets/img/update/client/client-2-2.svg",
   "/assets/img/update/client/client-2-3.svg"];

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   arrows: false,
   slidesToShow: 5,
   slidesToScroll: 2,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
         }
      },
   ]
}

const Brand = () => {
   return (
      <div className="brand-area3">
         <div className="container">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="brand-title2 text-center">
                     <h6 className="title">Backed by leading Blockchain investors and founders</h6>
                  </div>
               </div>
            </div>
            <div className="brand-item-wrap3">
               <Slider {...settings} className="row g-0 brand-active2">
                  {brand_data.map((item, i) => (
                     <div key={i} className="col-12">
                        <div className="brand-item">
                           <img src={item} alt="img" />
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default Brand
