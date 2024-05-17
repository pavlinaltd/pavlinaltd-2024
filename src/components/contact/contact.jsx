import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FaSkype} from "react-icons/fa";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

// import SimpleMap from "./map";
import {
  FaViber,
 // FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => window.scroll(0, 0));

  // const location = {
  //   address: "380 Rector Pl., 21E New York, NY 10280, USA",
  //   lat: 40.709341162526115,
  //   lng: -74.01780974617034,
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_API,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <main id="contact">

      
      <section className="upper-section container">
      <div className="row mb-4 ">
      
      </div>
        {/* <div className="px-3 px-xl-5 py-4">
          <h1 className="m-0 ps-xl-5">Get in Touch</h1>
        </div> */}
        <div className="contact-info ">
          <div className="row">
            <div className="contact-box col col-xs-12  ">
              <div className="pavlina-contact">
              
                <h3><FontAwesomeIcon icon={faLocationDot} /> 380 Rector Place, New York, NY, USA, 10280</h3>
                <h3>   <FaViber/> <FontAwesomeIcon icon={faSquareWhatsapp} />   (212)799-0009</h3>
                <h3> <FaSkype/>Resen51</h3>
                <h3><FontAwesomeIcon icon={faEnvelope} /> pavlinaltd@gmail.com</h3>
                
              </div>

            
          
              <div className = 'row sub-heading'>
                <div className="col ">
                    <h2 className="mb-1 mt-1">Macedonian Arts Council Inc.</h2>     
                    <h4 className="mb-1">info@macedonianarts.org</h4>
                    <h4 className="mb-1">212-799-0009</h4>
                  </div>
                <div className="col col-xs-12"> 
                  <h2 className="mb-1 mt-1">FilmsZaNas d.o.o.e.l</h2>
                  <h4 className="mb-1">filmszanas@gmail.com</h4>
                  <h4 className="mb-1">212-799-0009</h4>
                </div>

              </div>

              </div>
             

            
            <div className="contact-box col-md-4 col-xs-12">
              <form
                id="contact-form"
                ref={form}
                onSubmit={sendEmail}
                autoComplete="off"
                className="h-100"
              >
                <div className="ml-5 mb-1">
                  <input name="name" placeholder="Name" type="text" required />
                </div>
                <div className="mb-1">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-1">
                  <input
                    name="contactNumber"
                    placeholder="Contact No."
                    type="text"
                  />
                </div>

                <div className="mb-1 textarea">
                  <textarea
                    placeholder="Message"
                    name="message"
                    form="contact-form"
                    className="w-100 h-100 p-0"
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-start justify-content-md-end mt-3">
                  <input
                    type="submit"
                    className="text-uppercase px-4 py-2"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>


            <div className="row mt-5 pt-5 pb-5  mx-auto" >
            <div className="contact-box row col-md-12 col-xs-12 ">
              <iframe
                className="google-map"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.404149276478!2d-74.02011378453007!3d40.70911877933224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1021509aa5%3A0x875c1c5d6844bf1!2s380%20Rector%20Pl%2C%20New%20York%2C%20NY%2010280%2C%20USA!5e0!3m2!1sen!2sbr!4v1673380162092!5m2!1sen!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
