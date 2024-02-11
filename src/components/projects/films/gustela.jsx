import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/gustella-dances.png";
import Image from "../../../assets/films/gustella-castle.webp";

const Gustella = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <main className="film">
      <div className="container p-0">
        <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0"
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-5">Gustella Dances</h1>
              </div>
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
        </section>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 px-xl-5 m-0">
              <div className="col-12 col-md-4 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center">
                <img src={Poster} alt="" className="img-fluid rounded-4" />
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  A snowed 15th-century castle where only the spirits of knights
                  dead long ago reign. Them, and TWO MAGICAL CREATURES made of
                  ice and snow, a gift of planet Earth to all living creatures.
                  They are LUMIUKKO AND GUSTELLA.
                </p>
                <p className="mb-3 mb-lg-4">
                  Lumiukko is shaped as an old man, but in fact, he is a boy
                  trapped in a snowy suit for 500 years. He is all sculptured
                  ice, with a few icicles that adorn his right shoulder.
                </p>
                <p className="mb-3 mb-lg-4">
                  GUSTELLA is the ageless wind, the travel companion who carries
                  him from place to place. She is made of streaks of loosely
                  joined snowflakes that can only be held together by
                  transparent patches of ice that join them. Her hair is made of
                  effervescent lumpy snowflakes and a halo adorns her head.
                </p>
                <p className="text-center mb-3 mb-lg-4">
                  CUT TO EXT. LATE MORNING - CASTLE
                </p>
                <p className="mb-3 mb-lg-4">
                  Lumiukko sleeps in this wonderland dreaming of becoming a
                  knight in his next life.
                </p>
                <p className="mb-3 mb-lg-4">
                  ANGLE ON - A sudden swirl of wind swoops up to him as GUSTELLA
                  is trying to wake him.
                </p>
                <p className="text-center">GUSTELLA</p>
                <p className="text-center mb-3 mb-lg-4">
                  Wake up! Wake up! I am so bored! Let us play!
                </p>
                <p className="mb-3 mb-lg-4">
                  There is no reaction from Lumiukko. Gustella blows a little
                  harder.
                </p>
                <p className="text-center">GUSTELLA (CONT'D)</p>
                <p className="text-center mb-3 mb-lg-4">
                  Wake up, wake up, you heavy sack of potatoes.
                </p>
                <p>This gets a reaction from Lumi. He is startled awake.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="p-0 px-3 px-xl-5 pb-md-5">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div className="row w-75 m-0 py-4 py-md-0 px-md-5 px-md-0 px-xl-5 m-0 mx-auto">
              <img src={Image} alt="" className="img-fluid" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Gustella;
