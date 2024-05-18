import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/gotse-poster.jpg";
// import GotseBanner from "../../../assets/films/gotse_banner.png";

const Gotse = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="main-margin">
      <div className="">
        <section className="mb-4">
          <div className="">
            <div className="image-desc-flex">
              <div style={{ width : "100%", height : "100%"}}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/mphudxyW08c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ height : "100%"}}                  ></iframe>
                </div>
              </div>
              <div className="orphan-desc fw-30" style={{ textAlign : "center", display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
                <h1 className="color-theme style-bold" style={{ fontWeight : "bold"}}>GOTSE (ГОЦЕ)</h1>
              <br></br>
                <div>
                <h2  className="color-theme style-bold">Produced by</h2>
                <p className="">The Macedonian Arts Council</p>
                </div>
                <br></br>
                <div>
                <h2 className="color-theme style-bold">Producers</h2>
                <p>Pavlina Proevska</p>
                <p className="">Mile Arsovski</p>
                </div>
                <br></br>
                <div>
                <h2 className="color-theme style-bold">Director</h2>
                <p className="">Ivan Mitevski - Kopola</p>
                </div>
                <br></br>
                <div>
                <h2 className="color-theme style-bold">Written by</h2>
                <p className="">Goran Stefanovski</p>
                </div>
                <br></br>
                <div>
                <h2 className="color-theme style-bold">Starring</h2>
                <p>Nenad Stojanovski as <span style={{ fontStyle : "italic" }}>Gotse</span></p>
                <p className="">His Eminence <span style={{ fontStyle : "italic" }}> Bishop Kiril </span> </p>
                </div>
                <br></br>
                <div>
                <h2 className="color-theme style-bold">Shooting Locations</h2>
                <p>Skopje, Ohrid, Vevchani</p>
                <p className="">The Republic of Macedonia</p>
                <p> © 2007</p>
                </div>
              </div>
            </div>
          </div>
        </section >
   
          <section className="mt-4 mb-4 margin-main">
            <div style={{ marginTop : "40px", display : "flex", flexDirection : "column", gap : "20px"}}>
            {/* <div className="fw-30 orphan-desc" style={{  display : "flex" , flexDirection : "column" , justifyContent : "space-between"}}>
               
             
              </div> */}
               <div className="orphan-desc" style={{  lineHeight : "1.2em", textAlign :"justify"}}>
              <p >
                This short film was commissioned by the Canadian-Macedonian Foundation on the occasion of a multimedia concert entitled Oro Makedonsko-Our Kanada at the Toronto Convention Center in the spring of 1994 organized to celebrate the independent Republic of Macedonia.
                </p>
                </div>
              <div className="" >
                <img
                  src={Poster}
                  alt="Gotse"
                  className="img-fluid"
                  style={{ objectFit : "fill", borderRadius : "12px", width : "100%"}}
                />
              </div>
             <div className="orphan-desc" style={{  lineHeight : "1.2em", textAlign :"justify"}}>
                <p>
                One of the show's components was a short live drama about the last five minutes in the life of Goce Delchev (ГОЦЕ ДЕЛЧЕВ), a Macedonian national hero who is considered the father of modern Macedonia. The ten-minute short preceded the live segment.
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
