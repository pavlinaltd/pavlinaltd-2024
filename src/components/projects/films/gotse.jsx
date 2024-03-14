import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/gotse.png";
// import GotseBanner from "../../../assets/films/gotse_banner.png";

const Gotse = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6" style={{ fontSize : "1vw", lineHeight : "1.2em"}}>
                <h1 className="mb-4">Gotse</h1>
                <h2>Produced by</h2>
                <p className="mb-3 mb-lg-4">Macedonian Arts Council</p>
                <h2>Producers</h2>
                <p>Pavlina Proevska</p>
                <p className="mb-3 mb-lg-4">Mile Arsovski</p>
                <h2>Director</h2>
                <p className="mb-3 mb-lg-4">Ivan Mitevski - Kopola</p>
                <h2>Written by</h2>
                <p className="mb-3 mb-lg-4">Goran Stefanovski</p>
                <h2>Starring</h2>
                <p>Nenad Stojanovski as Gotse</p>
                <p className="mb-3 mb-lg-4">His Eminence Bishop Kiril</p>
                <h2>Shooting Locations</h2>
                <p>Skopje, Ohrid, and the village of Vevchani</p>
                <p className="mb-3 mb-lg-4">The Republic of Macedonia</p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/JFaPLtBNQSg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div style={{ display : "flex", flexDirection : "row" , gap : "40px"}}>
              <div style={{ width : "20%" }} >
                <img
                  src={Poster}
                  alt="Gotse"
                  className="img-fluid"
                  style={{ objectFit : "fill", borderRadius : "12px"}}
                />
              </div>
              <div style={{ fontSize : "1vw", lineHeight : "1.2em", display : "flex", justifyContent : "space-between", flexDirection : "column", width : "50%"}}>
                <p >
                This short film was commissioned by the Canadian-Macedonian Foundation on the occasion of a multimedia concert entitled Oro Makedonsko-Our Kanada at the Toronto Convention Center in the spring of 1994 organized to celebrate the independent Republic of Macedonia.
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
      </div>
    </main>
  );
};

export default Gotse;
