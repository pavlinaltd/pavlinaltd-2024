import React, { useEffect } from "react";
// import emailjs from "emailjs-com";

import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
//import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaSkype } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
 // FaVimeoSquare,
  FaImdb,
  // BsFacebook,
  // FaViber,
  // FaWhatsapp,


} from "react-icons/fa";

// import { BsFillArrowUpCircleFill } from "react-icons/bs";

import footerLogo from "../../assets/brand/logo-banner-white.png";

const Footer = () => {
  useEffect(() => window.scroll(0, 0));
  return (
    <footer className="text-light custom-bg-color px-3 pt-5 pb-2 p-md-4 mt-auto ">

      <div className="bottom-container">
        <div>
        <img src={footerLogo} height="36" alt="Pavlina Ltd. Logo" />
        <div style={{ fontSize : "12px"}}>©2024 PAVLINA LTD. ALL RIGHTS RESERVED</div>
        </div>
        <div className="bottom-links" style={{marginTop : "20px"}}>
          <h3><FontAwesomeIcon icon={faLocationDot} />  380 Rector Pl., New York, NY 10280</h3>
          <h3> <FontAwesomeIcon icon={faSquareWhatsapp}></FontAwesomeIcon>    (212)799-0009</h3>
          <h3> <FaSkype /> Resen51</h3>

          <h3><FontAwesomeIcon icon={faEnvelope} />  pavlinaltd@gmail.com</h3>
          <br></br>

        </div>

      </div>

      <hr></hr>
      <div className="bottom-icons">
        <div>
          <a
            href="https://www.facebook.com/pproevska"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare color='white' size={30} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/pavlina-proevska-533773169/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color='white' size={30} />
          </a>
        </div>


        <a
          href="https://twitter.com/Info_MacArts"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare color='white' size={30} />
        </a>
        <a
          href="https://www.youtube.com/user/PavlinaLTD/videos"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutubeSquare color='white' size={30} />
        </a>
        <a
          href="https://www.imdb.com/name/nm0698464/"
          target="_blank"
          rel="noreferrer"
        >
          <FaImdb color='white' size={30} />
        </a>
      </div>
   <div style={{ textAlign : "center", paddingTop:'15px'}}>
   
    <p style={{fontSize:'13px', fontFamily:'serif'}}>
    Built by{" "} 
    <a href="https://kewalkishangokuldas.com"  target="_blank" rel="noreferrer" style={{ textDecoration : "none", color: "inherit", fontStyle :"italic"}}>
    Kewal Kishan Gokuldas
    </a>
  
    <span> & </span>

    <a href="https://www.linkedin.com/in/teodora-krstevska-3475611b9/"  target="_blank" rel="noreferrer" style={{ textDecoration : "none", color: "inherit", fontStyle :"italic"}}>
    Tea Krstevska
    </a>
    </p>
   </div>










    </footer>
  );
};

export default Footer;
