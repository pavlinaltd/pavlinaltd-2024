import React, { useEffect } from "react";
import "./films.css";

// import Poster from "../../../assets/films/posters/the-colors-of-macedonia.png";
import Header from "../../../assets/films/new_koce.png";
import ImdbIcon from "../../../assets/common/imdbna.png";
import colorsPoster from "../../../assets/films/colorsofmac.jpg";

const Macedonia = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="film">
      <div className="container">
      <section className="row p-0 px-5">
          <div className="col-12 p-0 m-0">
            <img   src={colorsPoster}
                  alt="The Colors of Macedonia" className="hnn-banner" />
          </div>
          <div className="" style={{ fontSize : "1.4vw", lineHeight : "1.2em"  }}>
                <p className="mb-3 mb-lg-4 mt-3">
                  <span style={{ fontWeight : "bold", color : "#94211d"}}>The Colors of Macedonia</span> is a half-hour documentary film
                  comissioned by the PBS affiliated KOCE-TV from the Macedonian
                  Art council in 2004. The film explores the cultural and
                  spitual riches of Macedonia spanning two thousand years. It
                  premiered on June 4th, 2004 on the PBS member television station KOCE-TV who retained all creative control to this film.
                </p>
                </div>
        </section>

        <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt4952568/?ref_=nm_flmg_t_5_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{ objectFit : "fill", maxHeight : "50px", maxWidth: "100px"}}/>
                </a>
                
              </div>
           
            </div>

        <section className="">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row">
          
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
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
              <div style={{ borderRadius : "12px", width : "50%" }}>
                <img
                  src={Header}
                  alt="The Colors of Macedonia"
                  className="img"
                  style={{ borderRadius : "12px", objectFit : "fill", height : "100%"}}
                />
              </div>


            </div>
          </div>
        </section>
    
        {/* <div className="p-0 pb-4 px-3 p-xl-5 mt-4 bg-light">
          <section className="container">
            <div className="" style={{ display : "flex", flexDirection : "row", gap : "40px"}}>
              <div style={{ borderRadius : "12px", width : "30%" }}>
                <img
                  src={Poster}
                  alt="The Colors of Macedonia"
                  className="img"
                  style={{ borderRadius : "12px", objectFit : "fill"}}
                />
              </div>
              <div className="col-12 col-md-8 d-flex flex-column justify-content-between" style={{ fontSize : "1.4vw", lineHeight : "1.2em"  }}>
                <p className="mb-3 mb-lg-4">
                  The Colors of Macedonia is a half-hour documentary film
                  comissioned by the PBS affiliated KOCE-TV from the Macedonian
                  Art council in 2004. The film explores the cultural and
                  spitual riches of Macedonia spanning two thousand years. It
                  premiered on June 4th, 2004 on KOCE-TV (PBS).
                </p>
                <img
                  src={Header}
                  alt="The Colors of Macedonia"
                  className="img"
                  style={{ borderRadius : "12px", objectFit : "fill"}}
                />
              </div>
            </div>
          </section>
        </div> */}
      </div>
    </main>
  );
};

export default Macedonia;
