import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./portfolio.css"

import { staggerContainer } from "../data.js"
import { data } from '../../data/Data'
import App from '../../App'



const Portfolio = () => {

  const [all, setAll] = useState(true);
  const [web, setWeb] = useState(false);
  const [app, setApp] = useState(false);

  const webbing = () =>{
    setWeb(true);
    setApp(false);
    setAll(false)
  };

  const apping = () =>{
    setApp(true);
    setWeb(false);
    setAll(false)
  }

  const alling = () =>{
    setApp(false);
    setWeb(false);
    setAll(true)
  }

  return (
    <motion.div 
    variants = {staggerContainer}
    initial = "hidden"
    whileInView= "show"
    viewport={{once: "false", amount: 1}}
    className='section' 
    id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container rat flex items-center justify-around   py-1 rounded-lg  ">
        <p className={`text-xl bg-blue-600 px-5 py-3 rounded-md text-xs sm:text-lg hover:bg-white hover:text-blue-600 cursor-pointer transition`} onClick = {alling}>All</p>
        <p className='text-xl bg-blue-600 px-5 py-3 rounded-md text-xs sm:text-lg hover:bg-white hover:text-blue-600 cursor-pointer transition' onClick = {webbing}>Web App</p>
        <p className='text-xl bg-blue-600 px-5 py-3 rounded-md text-xs sm:text-lg hover:bg-white hover:text-blue-600 cursor-pointer transition' onClick = {apping}>Mobile App</p>
      </div>

      {
        web &&
      <div className="container portfolio__container transform translate-y-9 transition-transform duration-500 ease-in-out slide-down">
      {
        data.filter(cat => cat.holla == "web").map(({id, imaage, title, Github, demo}) => {
          return (
            <article key={id} className = "portfolio__item">
          <div className="portfolio__item-image">
            <img src={imaage} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
      }
      
      {
        app &&
      <div className="container portfolio__container ">
      {
        data.filter(cat => cat.holla == "app").map(({id, imaage, title, Github, demo}) => {
          return (
            <article key={id} className = "portfolio__item">
          <div className="portfolio__item-image">
            <img src={imaage} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Download Apk</a>
          </div>
            <a href={""} className='btn btn-primary ' target="_blank">Can't Download? Watch Demo</a>
        </article>
          )
        })
      }
      </div>
      }


    {
        all &&
      <div className="container portfolio__container ">
      {
        data.map(({id, imaage, title, Github, demo}) => {
          return (
            <article key={id} className = "portfolio__item">
          <div className="portfolio__item-image">
            <img src={imaage} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
      }
    </motion.div>
  )
}

export default Portfolio

