import React, { useEffect } from "react";
import "./films.css";

// import Poster from "../../../assets/films/posters/the-colors-of-macedonia.png";
import Header from "../../../assets/films/new_koce.png";
import ImdbIcon from "../../../assets/common/imdbna.png";
import MacIcon from "../../../assets/brand/logo_desktop.png";
import colorsPoster from "../../../assets/films/colorsofmac.jpg";

const Macedonia = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="main-margin">
      <div >
      <section >
          <div>
            <img   src={colorsPoster}
                  alt="The Colors of Macedonia" className="hnn-banner" />
          </div>
          <div className="orphan-desc" style={{textAlign : "justify" }}>
                <p className="mb-3 mb-lg-4 mt-3">
                  <span style={{ fontWeight : "bold", color : "#94211d"}}>The Colors of Macedonia</span> is a half-hour documentary film that explores the cultural and spiritual riches of Macedonia spanning two thousand years.  
It was commissioned from The Macedonian Arts Council in February of 2004 by KOCE-TV, a PBS member television station in Huntington Beach, California who retained all creative control in the making of this film. It premiered on June 4th, 2004.  
                </p>
                </div>
        </section>

        <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px", marginBottom : "50px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt4952568/?ref_=nm_flmg_t_5_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{ objectFit : "fill", maxHeight : "50px", maxWidth: "100px"}}/>
                </a>
                
              </div>
           
            </div>

        <section className="mt-4 mb-4">
          <div className="">
            <div className="image-desc-flex">
          
              <div className="fw-50">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/ZJlqzm6VgXk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* <div style={{ borderRadius : "12px", width : "50%" }}>
                <img
                  src={colorsPoster}
                  alt="The Colors of Macedonia"
                  className="img"
                  style={{ borderRadius : "12px", objectFit : "fill", height : "100%"}}
                />
              </div> */}
              <div className="fw-50" style={{ display : "flex", flexDirection : "column", justifyContent : "space-between"}}>

              <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px", marginBottom : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="http://www.macedonianarts.org/stream.shtml" target="_blank"  rel="noreferrer">
                <img src={MacIcon}  alt="" className="img hoverable-img" style={{ objectFit : "fill", maxHeight : "100px"}}/>
                </a>
                
              </div>
           
            </div>
                <img
                  src={Header}
                  alt="The Colors of Macedonia"
                  className="img"
                  style={{ borderRadius : "12px", objectFit : "fill", width : "100%"}}
                />
              </div>


            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Macedonia;
