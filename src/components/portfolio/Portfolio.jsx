import React from 'react'
import "./portfolio.css"
import IM1 from '../../assets/port1.png'
import IM2 from '../../assets/port2.png'
import IM3 from '../../assets/port3.png'
import IM4 from '../../assets/port4.png'
import IM5 from '../../assets/port5.png'
import IM6 from '../../assets/port6.png'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IM1,
    title: 'TinDog',
    github: 'https://github.com/PriyeshModi1/TinDog',
    demo: 'https://priyeshmodi1.github.io/TinDog/'
  },
  {
    id: 2,
    image: IM2,
    title: 'Most Popular Simon Game',
    github: 'https://github.com/PriyeshModi1/simongame',
    demo: 'https://priyeshmodi1.github.io/simongame/'
  },
  {
    id: 3,
    image: IM3,
    title: 'The Boring Dice Game',
    github: 'https://github.com/PriyeshModi1/dicegame',
    demo: 'https://priyeshmodi1.github.io/dicegame/'
  },
  {
    id: 4,
    image: IM4,
    title: 'Musical Drum Kit',
    github: 'https://github.com/PriyeshModi1/DrumKit',
    demo: 'https://priyeshmodi1.github.io/DrumKit/'
  },
  {
    id: 5,
    image: IM5,
    title: 'Time Pass Personal Website',
    github: 'https://github.com/PriyeshModi1/Personal_Website',
    demo: 'https://priyeshmodi1.github.io/Personal_Website/'
  },
  {
    id: 6,
    image: IM6,
    title: 'The Most Useless and Simple CV',
    github: 'https://github.com/PriyeshModi1/Demo_CV',
    demo: 'https://priyeshmodi1.github.io/Demo_CV/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} rel="noreferrer" target='_blank' className='btn'>Github</a>
                <a href={demo} rel="noreferrer" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio  