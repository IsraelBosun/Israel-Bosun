import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaReact} from "react-icons/fa"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"

const About = () => {
  return (
    <div className='section' id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
    

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image" className = "image2" />
          </div>
        </div>
      <div className="about__content">
        <div className='stack'>Tech Stack</div>
        <div className="about__cards">
          <article className='about__card'>
              <FaReact className='about__icon'/>
              <h5>ReactJs</h5>
              {/* <small>9 Months Working Experience</small> */}
          </article>

          <article className='about__card'>
              <TbBrandNextjs className='about__icon'/>
              <h5>NextJs</h5>
              {/* <small>3 Clients</small> */}
          </article>

          <article className='about__card'>
              <SiMongodb className='about__icon'/>
              <h5>MongoDB</h5>
              {/* <small>9+ Completed Projects</small> */}
          </article>
        </div>

        <p>
       I am an experienced React developer. Crafting elegant websites with fluid design and seamless interactions. Let's join forces and forge a remarkable online presence together.       </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </div>
  )
}

export default About

