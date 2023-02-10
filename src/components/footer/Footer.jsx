import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Priyesh Modi</a>

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
        <a href="https://www.facebook.com/profile.php?id=100009334924590" rel="noreferrer" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/_.priyesh.modi._/" rel="noreferrer" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/" rel="noreferrer" target='_blank'><IoLogoTwitter /></a>
        <a href="https://www.linkedin.com/in/priyesh-modi-62b2401bb/" rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/PriyeshModi1" rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href="https://auth.geeksforgeeks.org/user/priyeshmodi2002/" rel="noreferrer" target='_blank'><SiGeeksforgeeks /></a>
        <a href="https://leetcode.com/priyesh_modi/" rel="noreferrer" target='_blank'><SiLeetcode /></a>
        <a href="https://www.codingninjas.com/codestudio/profile/70591e71-5adb-41b2-8a7d-54879c181691" rel="noreferrer" target='_blank'><SiCodingninjas /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Priyesh Modi, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer  