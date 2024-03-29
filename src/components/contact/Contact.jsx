import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsTwitter} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent successfully")


    emailjs.sendForm( 'service_70ecq3h', 'template_ljijo1b', form.current, 'vtJwh4TyMc1j8cA32')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section className='section' id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className ="contact__option flex flex-col items-center">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className = "small__mail">israelbosun@gmail.com</h5>
            <a href="mailto:israelbosun@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option flex flex-col items-center">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@BosunIsrael</h5>
            <a href="https://twitter.com/BosunIsrael" target="_blank">Follow Me</a>
          </article>

          <article className="contact__option flex flex-col items-center">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+234 906 386 3042</h5>
            <a href="https://wa.me/qr/HFIUQ5G24T7GB1" target="_blank">Send a message</a>
          </article>

            <article className="contact__option flex flex-col items-center">
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>@israel-bosun</h5>
            <a href="https://www.linkedin.com/in/israel-bosun/" target="_blank">Let's Connect</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit ={sendEmail}>
          <input className="p-5" type="text" name='name' placeholder='Your Full Name' required />
          <input className="p-5" type="email" name='email' placeholder='Your Email' required />
          <textarea className="p-5" name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type = "submit" className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact