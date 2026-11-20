import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/gustella-new.png";
import Image from "../../../assets/films/gustella-castle.webp";
import ImdbIcon from "../../../assets/common/imdbna.png";
import gustellaVideo from "../../../assets/films/gustella.mov";
import gustellaScript from "../../../assets/films/gustella_script.jpg";

const Gustella = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main-margin">
      <div>
        {/* <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0"
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
          
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div className="ratio ratio-16x9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1LAN_RWFCV4?si=X-Pr7lclFjppE0NL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "600",
                borderRadius: "12px",
              }}
            >
              <div style={{ marginRight: "10px", color: "black" }}>Visit</div>
              <a
                href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_c_7_prd"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ImdbIcon}
                  alt=""
                  className="img hoverable-img"
                  style={{
                    objectFit: "fill",
                    maxWidth: "100px",
                    maxHeight: "50px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <section className="bg-light margin-main">
          <div className="orphan-info">
            <div className="col-12 col-md-5 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center">
              <img
                src={Poster}
                alt=""
                className="img-fluid rounded-4"
                style={{ objectFit: "fill", height: "100%" }}
              />
            </div>
            <div className="col-12 col-md-5 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center fw-60">
              <img
                src={gustellaScript}
                alt=""
                className="img-fluid rounded-4"
                style={{ objectFit: "fill", height: "100%" }}
              />
            </div>
            {/* <div className="orphan-desc" style={{ display: "flex", flexDirection: "column" }}>
                <p className="mb-3 mb-lg-4">
                  A snowed 15th century castle where only the spirits of knights dead long ago reign. Them, and TWO MAGICAL CREATURES made of ice and snow, a gift of planet Earth to all living creatures.  They are LUMIUKO AND GUSTELLA.
                </p>
                <p className="mb-3 mb-lg-4">
                  Lumiuko is shaped as an old man, but in fact, he is a boy trapped in a snowy suit for 500 years.  He is all sculptured ice, with a few icicles that adorn his right shoulder.                 </p>
                <p className="mb-3 mb-lg-4">
                  GUSTELLA is the ageless wind, the travel companion who carries him from place to place.  She is made of streaks of loosely joined snowflakes that can only be held together by transparent patches of ice that joins them.  Her hair is made of effervescent lumpy snowflakes and a halo adorns her head.                </p>
                <div style={{ textAlign: "right" }}>

                  CUT TO

                </div>
                <br></br>
                <p className="mb-3 mb-lg-4" style={{ marginTop: "20px" }}>
                  EXT. LATE MORNING - CASTLE
                </p>
                <p className="mb-3 mb-lg-4">
                  Lumiuko sleeps in this wonderland dreaming of becoming a knight in his next life.
                </p>
                <p className="mb-3 mb-lg-4">
                  ANGLE ON - A sudden swirl of wind swoops up to him as GUSTELLA is trying to wake him.
                </p>
                <p className="text-center">GUSTELLA</p>
                <p className="text-right" style={{ margin: "0 auto" }}>
                  Wake up! Wake up! I am so bored!
                  <br></br>
                  Let us play!
                </p>
                <br></br>
                <p className="mb-3 mb-lg-4">
                  There is no reaction from Lumiuko.  Gustella blows a little harder.
                </p>
                <p className="text-center">GUSTELLA (CONT'D)</p>
                <p className="mb-3 mb-lg-4" style={{ margin: "0 auto" }}>
                  Wake up, wake up you heavy sack of <br></br>potatoes.
                </p>
                <p>This gets a reaction from Lumi.  He is startled awake.</p>
              </div> */}
          </div>
        </section>

        <div className="p-0 px-3 px-xl-5 pb-md-5 mt-4">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div className="row m-0 py-4 py-md-0 px-md-5 px-md-0 px-xl-5 m-0 mx-auto">
              <img src={Image} alt="" className="img-fluid" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Gustella;
