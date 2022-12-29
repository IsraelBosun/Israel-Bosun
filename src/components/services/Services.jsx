import React from 'react'
import "./services.css"
import {BsCheck} from "react-icons/bs"

const Services = () => {
  return (
    <div className='section' id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>  
        </article>
        {/* END OF Web Development */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </div>
  )
}

export default Services