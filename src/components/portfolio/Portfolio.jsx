import React from 'react'
import "./portfolio.css"
import IMGj from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

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
    title: "Portfolio Website for myself",
    Github: "https://github.com/IsraelBosun/testing",
    demo: "https://testing-eight-lyart.vercel.app/"
  },
  {
    id: 4,
    imaage: IMG4,
    title: "GPT-3 OpenAI Landing Page (Ongoing)",
    Github: "https://github.com/IsraelBosun/gpt-3-israel",
    demo: "https://gpt-3-israel.vercel.app/"
  },
  {
    id: 5,
    imaage: IMG5,
    title: "School Website for Royal Diadem School (Ongoing)",
    Github: "https://github.com/IsraelBosun/Royal-Diadem-School",
    demo: "https://israelbosun.github.io/Royal-Diadem-School/"
  },
  // {
  //   id: 6,
  //   imaage: IMG6,
  //   title: "Cryptocurrency Dashboard & Financial Visualization",
  //   Github: "https://github.com/IsraelBosun/Royal-Diadem-School",
  //   demo: "https://israelbosun.github.io/Royal-Diadem-School/"
  // }
]

const Portfolio = () => {
  return (
    <div className='section' id='portfolio'>
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
    </div>
  )
}

export default Portfolio