import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "I hired Priyesh for a project and was blown away by their attention to detail and creative approach. Their work exceeded all of my expectations and I would highly recommend them to anyone in need of building great web applications."
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: "Working with Priyesh was an absolute pleasure. He took the time to understand my needs and delivered a final product that was better than I could have imagined. I appreciate their professionalism and would definitely work with them again in the future."
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: "I had the privilege of working with Priyesh on a recent project and can say without a doubt that he is one of the most talented and dedicated professionals I have had the pleasure of working with. He went above and beyond to make sure the project was a success and I would highly recommend them to anyone looking for All the services he offers."
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: "I was impressed by Priyesh's ability to bring my vision to life. He listened to my ideas and provided valuable input, leading to a truly collaborative process. The end result was a stunning website that I am proud to share with my audience."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({index, avatar, name, review}) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="cilent__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials  