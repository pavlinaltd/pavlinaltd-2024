import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-magic-snowman-audiobook.png";
import Music from "../../../assets/films/Magic Snowman Audiobook-Web.mp3";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const SnowmanBook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <h1>The Magic Snowman</h1>
              </div>
              <section className="synopsis container p-3 py-4 py-md-0 m-0">
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0">
                  <div className="col-12 col-md-7 col-lg-8 col-xl-8 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      Based on the feature film The Magic Snowman.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      With Sir Roger Moore as the VOICE of
                      <span className="fst-italic"> The Magic Snowman</span>
                    </p>
                    <h2>Narrated by</h2>
                    <p className="mb-3 mb-lg-4">Lily Talevski</p>
                    <h2>Music by</h2>
                    <p className="mb-3 mb-lg-4">Boian B. Goss</p>
                    <h2>Sound Design</h2>
                    <p className="mb-3 mb-lg-4">Mason Ryan</p>
                    <h2>Release Date</h2>
                    <p className="mb-3 mb-lg-4">April 2023</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-4 col-xl-3 pe-0 ps-0 ps-md-5 d-flex flex-column align-items-center">
                    <img src={Poster} alt="" className="img rounded-4" />
                    <AudioPlayer
                      autoPlay
                      src={Music}
                      onPlay={(e) => console.log("onPlay")}
                      // other props here
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SnowmanBook;
