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
            <h3>UI/UX</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Knowledgable in Adobe Illustrator and Photoshop</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>I can design banners, logos and other graphics for web projects</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>I can also make use of Figma to create prototypes for projects</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Good knowledge of color and color balance</p>
          </li>
         
        </ul>  
        </article>
        {/* END OF UI/UX */}



        <article className='service'>
          <div className="service__head">
            <h3>Web Developemnt</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to replicate simple to complex Figma Designs</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to create responsive and functional websites</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Speed and accuracy when it comes to delivering on a project</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to learn new technologies and apply them to projects</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>keen attention to details.</p>
          </li>
        </ul>
        </article>
        {/* END OF Web Dev */}

        

        <article className='service'>
          <div className="service__head">
            <h3>Relevant Abilities</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to work under pressure.</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Require little supervision once I understand the basics</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>I find easier and efficient ways of solving problems</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to work with others on a project</p>
          </li>
          
        </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </div>
  )
}

export default Services