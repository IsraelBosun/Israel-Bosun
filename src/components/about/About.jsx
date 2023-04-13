import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiFillFolderOpen} from "react-icons/ai"

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
        <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>9 Months Working Experience</small>
          </article>

          <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>3 Clients</small>
          </article>

          <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>9+ Completed Projects</small>
          </article>
        </div>

        <p>
        I am a web developer with 9 months of experience creating functional and responsive websites with a focus on aesthetics and user experience. Check out my portfolio for examples of my work. I am committed to delivering high-quality results to my clients.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </div>
  )
}

export default About

