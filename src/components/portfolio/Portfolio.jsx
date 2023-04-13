import React from 'react'
import { motion } from "framer-motion"
import "./portfolio.css"
import IMGj from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"
import IMG7 from "../../assets/portfolio7.png"
import IMG8 from "../../assets/portfolio8.png"
import { staggerContainer } from "../data.js"

const data = [
  {
    id: 1,
    imaage: IMGj,
    title: "Metaverse Of Madness",
    Github: "https://github.com/IsraelBosun/meta",
    demo: "https://meta-xtqq.vercel.app/"
  },
  {
    id: 2,
    imaage: IMG2,
    title: "Omicron Gadgets E-commerce website",
    Github: "https://github.com/IsraelBosun/omicron-gadgets",
    demo: "https://israelbosun.github.io/omicron-gadgets/"
  },
  {
    id: 3,
    imaage: IMG3,
    title: "A real estate app showing details of all apartment listings",
    Github: "https://github.com/IsraelBosun/real-estate-app",
    demo: "https://real-estate-app-alpha-two.vercel.app/"
  },
  {
    id: 4,
    imaage: IMG4,
    title: "GPT-3 OpenAI Landing Page",
    Github: "https://github.com/IsraelBosun/gpt-3-israel",
    demo: "https://gpt-3-israel.vercel.app/"
  },
  {
    id: 5,
    imaage: IMG5,
    title: "Made an online Economics class website for a friend (Ongoing)",
    Github: "https://github.com/IsraelBosun/school-website",
    demo: "https://school-website-sigma.vercel.app/"
  },
  {
    id: 6,
    imaage: IMG6,
    title: "I made a chatGPT clone using OpenAI's API, I called it AfroGPT (this is no longer active as I have used up my free OpenAI credit )",
    Github: "https://github.com/IsraelBosun/Afro-gpt",
    demo: "https://afro-gpt.vercel.app/"
  },
  {
    id: 7,
    imaage: IMG7,
    title: "This is a website for a gym, do check it out",
    Github: "https://github.com/IsraelBosun/gyming",
    demo: "https://gyming.vercel.app/"
  },
  {
    id: 8,
    imaage: IMG8,
    title: "I made an ecommerce website using Nextjs and sanity as the headless CMS for the backend, then I integrated it with Paystack to accept payments",
    Github: "https://github.com/IsraelBosun/ecommerce-stripe",
    demo: "https://ecommerce-stripe-git-main-israelbosun.vercel.app/"
  }
]

const Portfolio = () => {

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

      <div className="container portfolio__container">
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
    </motion.div>
  )
}

export default Portfolio

