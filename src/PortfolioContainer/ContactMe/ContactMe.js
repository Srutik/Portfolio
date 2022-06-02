import { useState } from 'react';
import "./ContactMe.css";
import BackImg from "../../assets/Home/ContactMe.jpg";
import axios from 'axios';

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {name , email, message}

    axios.post('/api/form' ,data)
    .then(request => {
      setSent(true)},resetForm())
    .catch(() => {
      console.log("Message not sent");
    })
  } 

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSent(false)
    },3000)
  }

  return (
    <div className='main-container fade-in' id="ContactMe" style={{ opacity: "5", Transform: "translateY(1px)" }}>
      <div className='heading-container'>
        <div className='screen-heading'>
          <span>Contact Me</span>
        </div>
        <div className='screen-sub-heading'>
          <span>Lets keep in touch</span>
        </div>
        <div className='heading-seperator'>
          <div className='seperator-line'></div>
          <div className='seperator-blob'>
            <div></div>
          </div>
        </div>
      </div>

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
          </h2>
          {/* <a href="https://web.facebook.com/?_rdc=1&amp;_rdr">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                <i class="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i class="fa fa-twitter"></i>
              </a> */}
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={BackImg} alt="Img not found" />
          </div>
          <form onSubmit={handleSubmit}>
            <p></p>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="message">Message</label>
            <textarea type="text" value={message} placeholder='Leave your massage here' onChange={(e) => setMessage(e.target.value)} ></textarea>
            <div className="send-btn">
              <button type="submit">send <i className="fa fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
