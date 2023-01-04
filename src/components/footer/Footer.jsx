import React from 'react'
import "./footer.css"
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
import {FaReact} from "react-icons/fa"

const Footer = () => {
  return (
    <div className = "footer" >
      <a href="#" className='footer__logo'>IsraelBosun</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/IsraelBosun" target = "_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/israel-bosun/" target = "_blank"><FaLinkedin/></a>
        <a href="https://twitter.com/BosunIsrael" target = "_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made With React <FaReact className ="reaction"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; By IsraelBosun</small>
      </div>
    </div>
  )
}

export default Footer