import React, { useState } from "react"
import Slider from "react-slick";

const Carousel = () => {
   const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

return(
    <Slider {...settings}>
    <div>
        <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/05/31/14/23/organizer-791939_960_720.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">インド</div>
                   </div>
              </div>
          </div>
    </div>

    <div>
        <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://wonderfour.se/wp-content/uploads/2017/02/sulkysport-1900x1280.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">中国</div>
                   </div>
              </div>
          </div>
    </div>
    <div>
        <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/05/31/14/23/organizer-791939_960_720.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">シンガポール</div>
                   </div>
              </div>
          </div>
    </div>
    <div>
        <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://wonderfour.se/wp-content/uploads/2017/02/sulkysport-1900x1280.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">マレーシア</div>
                   </div>
              </div>
          </div>
    </div>
    <div>
         <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2020/03/09/17/33/roots-4916519_960_720.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">インドネシア</div>
                   </div>
              </div>
          </div>
    </div>
    <div>
         <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/05/31/14/23/organizer-791939_960_720.jpg")`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold">タイ</div>
                   </div>
              </div>
          </div>
    </div>
  </Slider>
  )
}

export default Carousel

export const data1 = graphql`
query myQueryAndMyQuery {
  sanpei: cloudinaryMedia(public_id: {eq: "gallery/snp_hjtfvh"}) {
    secure_url
  }
  
  akb: cloudinaryMedia(public_id: {eq: "gallery/akb_ttww5z"}) {
    secure_url
  }

  logo: cloudinaryMedia(public_id: {eq: "gallery/companyLogo_kc0kis"}) {
    secure_url
  }
}`

