import React from 'react'
import CV from '../../assets/cv.pdf'
import CV1 from '../../assets/PriyeshModi_CV.pdf'

function CTA () {
  return (
    <div className="cta">
        <a href={CV1} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA