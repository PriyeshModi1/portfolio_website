import React from 'react'
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // From EmailJs Library of React
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74sff3s', 'template_lbn9kg6', form.current, 'wMhtOZ5ZTm0w6_KYM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
// over
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact_option">
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>support@priyeshmodi.com</h5>
                <a href="mailto:priyeshmodi2002@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
            </article>
            <article className="contact_option">
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>Priyesh Modi</h5>
                <a href="https://www.messenger.com/t/100034061430603" rel="noreferrer" target='_blank'>Send a message</a>
            </article>
            <article className="contact_option">
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+91 123-456-789</h5>
                <a href="https://api.whatsapp.com/send?phone=918850463803&text=hi%20Priyesh%20Modi" rel="noreferrer" target='_blank'>Send a message</a>
            </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact  