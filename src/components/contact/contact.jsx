import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaSkype, FaViber } from "react-icons/fa";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  useEffect(() => window.scroll(0, 0), []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    console.log("Service ID: ", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID: ", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public API Key: ", process.env.REACT_APP_EMAILJS_PUBLIC_API);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_API
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email, please try again later.');
        }
      );

    e.target.reset();
  };

  return (
    <main id="contact">
      <section className="upper-section container margin-main">
        <div className="contact-info">
          <div className="row">
            <div className="contact-box col col-xs-12">
              <div className="pavlina-contact">
                <h3><FontAwesomeIcon icon={faLocationDot} /> 380 Rector Pl., New York, NY 10280</h3>
                <h3><FaViber /> <FontAwesomeIcon icon={faSquareWhatsapp} />  +1 (212)799-0009</h3>
                <h3><FaSkype />Resen51</h3>
                <h3><FontAwesomeIcon icon={faEnvelope} /> pavlinaltd@gmail.com</h3>
              </div>

              <div className="row sub-heading">
                <div className="col">
                  <h2 className="mb-1 mt-1">Macedonian Arts Council Inc.</h2>
                  <h4 className="contact-email">info@macedonianarts.org</h4>
                </div>
                <div className="col col-xs-12">
                  <h2 className="mb-1 mt-1">FilmsZaNas d.o.o.e.l</h2>
                  <h4 className="contact-email">filmszanas@gmail.com</h4>
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
                  <input name="from_name" placeholder="Name" type="text" required />
                </div>
                <div className="mb-1">
                  <input name="from_email" placeholder="Email" type="email" required />
                </div>
                <div className="mb-1">
                  <input name="contactNumber" placeholder="Contact No." type="text" />
                </div>

                <div className="mb-1 textarea">
                  <textarea
                    placeholder="Message"
                    name="message"
                    form="contact-form"
                    className="w-100 p-0"
                    required
                    rows="4"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-start justify-content-md-end">
                  <input
                    type="submit"
                    className="text-uppercase px-4 py-2"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 margin-main">
        <div className="contact-box">
          <iframe
            className="google-map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6048.809891941106!2d-74.02033102409119!3d40.70910123779322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1023900001%3A0xf4d277c50c6d89ae!2sPavlina%20Ltd!5e0!3m2!1sen!2sus!4v1716094613572!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;
