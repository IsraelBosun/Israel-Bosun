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
            <p>Skilled in Adobe Illustrator and Photoshop</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Proficient in designing banners, logos, and web graphics</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Experienced in creating project prototypes with Figma</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Knowledgeable in color balance and selection, and apply this expertise in my UI/UX designs.</p>
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
            <p>Proficient in replicating simple to complex Figma designs</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Skilled in creating functional and responsive websites</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Demonstrates speed and accuracy in project delivery</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Aptitude for learning new technologies and incorporating them into projects</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Possesses a keen eye for detail.</p>
          </li>
        </ul>
        </article>
        {/* END OF Web Dev */}

        

        <article className='service'>
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Strong communication skills, both written and verbal</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Ability to collaborate effectively in a team environment</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Flexibility and adaptability to evolving project requirements and timelines</p>
          </li>
          <li>
            <BsCheck className='sercice__list-icon' />
            <p>Strong problem-solving abilities to tackle complex issues and provide innovative solutions.</p>
          </li>
          
        </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </div>
  )
}

export default Services