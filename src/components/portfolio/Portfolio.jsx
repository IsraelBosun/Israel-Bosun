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
    title: "Cryptocurrency Dashboard & Financial Visualization",
    Github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    imaage: IMG2,
    title: "Charts templates & infographic in figma",
    Github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    imaage: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    Github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    imaage: IMG4,
    title: "Maintaining tasks and tracking progress",
    Github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    imaage: IMG5,
    title: "Figma dashboard UI kit for data design web apps",
    Github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    imaage: IMG6,
    title: "Cryptocurrency Dashboard & Financial Visualization",
    Github: "https://github.com",
    demo: "https://github.com"
  }
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