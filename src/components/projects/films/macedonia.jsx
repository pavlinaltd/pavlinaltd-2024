import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-colors-of-macedonia.png";
import Header from "../../../assets/films/new_koce.png";

const Macedonia = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-4">The Colors of Macedonia</h1>
                <h2>Written, Directed and Produced by</h2>
                <p className="mb-3 mb-lg-4">Peter Murphy</p>
                <h2>Executive Producers</h2>
                <p>Macedonian Arts Council</p>
                <p>Mike Zafirovski</p>
                <p>George Atanasoski</p>
                <p>Edited at KOCE-TV</p>
                <p className="mb-3 mb-lg-4">Camera - Peter Murphy</p>
                <h2>Macedonian Production Crew</h2>
                <p>Stalin Lozanovski</p>
                <p>Violeta Shindil</p>
                <p>Marija Kostovska</p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/gfp1DZpn5yU"
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
            <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 px-xl-5 m-0">
              <div className="col-12 col-md-4 row ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center">
                <img
                  src={Poster}
                  alt="The Colors of Macedonia"
                  className="img"
                />
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5 d-flex flex-column justify-content-between">
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
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Macedonia;
