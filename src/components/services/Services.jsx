import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list_icon'/>
            <p>Website design</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Mobile app design</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>User research/testing</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Wireframing/prototyping</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Design system development</p>
            </li>
          </ul>
          <div className="service__head">
            <h3>$50</h3>
          </div>
        </article>

        {/* END OF UI/UX  */}
        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list_icon'/>
            <p>Website development and design</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>E-commerce website creation</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Custom web application development</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Website maintenance and updates</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Responsive website optimization</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Website hosting and domain management</p>
            </li>
          </ul>
          <div className="service__head">
            <h3>$100</h3>
          </div>
        </article>

        {/* END OF WEB DEVELOPMENT  */}
        
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list_icon'/>
            <p>Blog post writing and editing</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Social media content creation</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Email newsletter design and writing</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Product descriptions and copywriting</p>
            </li>
            <li><BiCheck className='service__list_icon'/>
            <p>Landing page copy and optimization</p>
            </li>
          </ul>
          <div className="service__head">
            <h3>$75</h3>
          </div>
        </article>

        {/* END OF CONTENT CREATION  */}
      
      </div>
    </section>
  )
}

export default Services  