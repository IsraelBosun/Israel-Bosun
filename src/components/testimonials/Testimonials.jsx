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
    name: "Mark Walberg",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem fugit amet autem culpa! Consectetur molestias iure porro laborum perferendis mollitia blanditiis incidunt dignissimos natus eveniet modi, a unde facilis."
  },
  {
    avatar: AVTR2,
    name: "Jessica Adetoun",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem fugit amet autem culpa! Consectetur molestias iure porro laborum perferendis mollitia blanditiis incidunt dignissimos natus eveniet modi, a unde facilis."
  },
  {
    avatar: AVTR3,
    name: "Roger Stone",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem fugit amet autem culpa! Consectetur molestias iure porro laborum perferendis mollitia blanditiis incidunt dignissimos natus eveniet modi, a unde facilis."
  },
  {
    avatar: AVTR4,
    name: "Adeyemi Adekunle",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorem fugit amet autem culpa! Consectetur molestias iure porro laborum perferendis mollitia blanditiis incidunt dignissimos natus eveniet modi, a unde facilis."
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