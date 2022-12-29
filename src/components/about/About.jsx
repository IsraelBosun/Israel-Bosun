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
              <small>3+ Years Working epx</small>
          </article>

          <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>300+ Worldwide</small>
          </article>

          <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nemo officia ratione sunt nesciunt, suscipit obcaecati sint quo. Repudiandae reiciendis deleniti aut suscipit tempore. Excepturi neque nulla explicabo maiores qui?
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </div>
  )
}

export default About