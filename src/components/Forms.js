import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css"



const Forms = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbg5q8e',
      'template_uyo8jlf',
      form.current,
      'BTYpjUKAi0ewDltjO')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
        console.log(error.text);
      });
  };





  return (
    <div>
      <form ref={form} onSubmit={sendEmail} >
        <label>Dein Name</label>
        <label className='error'>  </label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <label className='error'>  </label>
        <input type="email" name="user_email" />
        <label>Nachricht</label>
        <label className='error' > </label>
        <textarea name="message" rows="6" placeholder='Tippe hier deine Nachricht ein' />
        <input type="submit" value="Senden" className='btn' />
      </form>

    </div>
  )




};

export default Forms;