import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






const data = [
  {
    avatar: AVTR1,
    name: "Oluwole Godwin",
    review: "Working with Israel has been an exceptional experience. He developed a website for my online economics tutorial class that exceeded my expectations. The website is not only aesthetically pleasing but also user-friendly. Their attention to detail and dedication to ensuring the website met my requirements was impressive. I highly recommend him to anyone looking for a professional and reliable web developer."
  },
  {
    avatar: AVTR2,
    name: "Oluwole Godwin",
    review: "Working with Israel has been an exceptional experience. He developed a website for my online economics tutorial class that exceeded my expectations. The website is not only aesthetically pleasing but also user-friendly. Their attention to detail and dedication to ensuring the website met my requirements was impressive. I highly recommend him to anyone looking for a professional and reliable web developer."
  },
  {
    avatar: AVTR3,
    name: "Oluwole Godwin",
    review: "Working with Israel has been an exceptional experience. He developed a website for my online economics tutorial class that exceeded my expectations. The website is not only aesthetically pleasing but also user-friendly. Their attention to detail and dedication to ensuring the website met my requirements was impressive. I highly recommend him to anyone looking for a professional and reliable web developer."
  },
  {
    avatar: AVTR4,
    name: "Oluwole Godwin",
    review: "Working with Israel has been an exceptional experience. He developed a website for my online economics tutorial class that exceeded my expectations. The website is not only aesthetically pleasing but also user-friendly. Their attention to detail and dedication to ensuring the website met my requirements was impressive. I highly recommend him to anyone looking for a professional and reliable web developer."
  }
]

const Testimonials = () => {
  return (
    <div className='section' id='tesimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key= {index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt ="" />
          </div>  
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review} </small>
        </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
  )
}

export default Testimonials

// {
//   data.map(({avatar, name, review}, index) => {
//     return(
//       <SwiperSlide key= {index} className='testimonial'>
//     <div className="client__avatar">
//       <img src={avatar} alt ="" />
//     </div>  
//       <h5 className='client__name'>{name}</h5>
//       <small className='client__review'>{review} </small>
//   </SwiperSlide>
//     )
//   })
// }

// {
//   data.map(({avatar, name, review}, index) =>{
//     <SwiperSlide key = {index} className="testimonial">
//       <div className="client__avatar">
//         <img src={avatar} alt="" />
//       </div>
//       <h5 className='client__name' >{name}</h5>
//       <small className='client__review' >{review}</small>
//     </SwiperSlide>
//   })
// }