import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/gotse.png";
// import GotseBanner from "../../../assets/films/gotse_banner.png";

const Gotse = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="main-margin">
      <div className="">
        <section className="">
          <div className="">
            <div className="image-desc-flex">
              <div style={{ width : "100%"}}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/mphudxyW08c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="orphan-desc" style={{ textAlign : "center"}}>
                <h1 className="mb-4 color-theme style-bold">Gotse</h1>
                <h2  className="color-theme style-bold">Produced by</h2>
                <p className="mb-3 mb-lg-4">Macedonian Arts Council</p>
                <h2 className="color-theme style-bold">Producers</h2>
                <p>Pavlina Proevska</p>
                <p className="mb-3 mb-lg-4">Mile Arsovski</p>
                <h2 className="color-theme style-bold">Director</h2>
                <p className="mb-3 mb-lg-4">Ivan Mitevski - Kopola</p>
                <h2 className="color-theme style-bold">Written by</h2>
                <p className="mb-3 mb-lg-4">Goran Stefanovski</p>
                <h2 className="color-theme style-bold">Starring</h2>
                <p>Nenad Stojanovski as Gotse</p>
                <p className="mb-3 mb-lg-4">His Eminence Bishop Kiril</p>
                <h2 className="color-theme style-bold">Shooting Locations</h2>
                <p>Skopje, Ohrid, and the village of Vevchani</p>
                <p className="mb-3 mb-lg-4">The Republic of Macedonia</p>
              </div>
            </div>
          </div>
        </section >
   
          <section className="mt-4 mb-4" >
            <div className="image-desc-flex">
              <div className="fw-30" >
                <img
                  src={Poster}
                  alt="Gotse"
                  className="img-fluid"
                  style={{ objectFit : "fill", borderRadius : "12px", width : "100%"}}
                />
              </div>
              <div className="fw-70 orphan-desc" style={{  display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
                <p >
                 (ГОЦЕ ДЕЛЧЕВ) This short film was commissioned by the Canadian-Macedonian Foundation on the occasion of a multimedia concert entitled Oro Makedonsko-Our Kanada at the Toronto Convention Center in the spring of 1994 organized to celebrate the independent Republic of Macedonia.
                </p>
                <p>
                One of the show's components was a short live drama about the last five minutes in the life of Goce Delchev, a Macedonian national hero who is considered the father of modern Macedonia. The ten-minute short preceded the live segment.
                </p>
              </div>
              {/* <div>
                <img
                  src={GotseBanner}
                  alt="Gotse"
                  style={{ objectFit : "fill", borderRadius : "12px"}}
                  className="img-fluid"
                />
              </div> */}
            </div>
          </section>
        </div>
 
    </main>
  );
};

export default Gotse;
