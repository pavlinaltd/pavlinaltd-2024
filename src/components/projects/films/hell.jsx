import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/happy-hell-night.png";
import header from "../../../assets/films/hhnposter.webp";

const Hell = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-4">Happy Hell Night</h1>
                {/* <p className="mb-3 mb-lg-4 fw-bold">
                  Now on Digital, 4K Ultra HD™, Blu-ray™ and DVD
                </p> */}
                <img className="header" src={header} alt="Happy Hell Night" />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/k_X7EnLEjNM"
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
                  alt="Happy Hell Night"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  Twenty-five years ago at Winfield College, psycho-priest
                  Zachary Malius murdered seven frat boys.
                </p>
                <p className="mb-3 mb-lg-4">
                  Malius is waiting, secretly locked in Winfield Insane Asylum.
                  Now, he's just a myth; the local boogie man, the sick joke
                  used to scare children. Malius is not afraid to die; living
                  has cured him of that. Sonny Collins, a star freshman student
                  at Winfield College has nerves of steel and a taste for the
                  heroics. He faces the ultimate Phi Delta Kappa hazing:
                  photograph the mythical, monstrous Malius.
                </p>
                <p className="mb-3 mb-lg-4">
                  Harry Collins, Sonny's brother, is already a Phi Delta Kappa.
                  In a jealous rage and caught in a love triangle with Sonny's
                  girl, Harry would like to even the score. He wants to scare
                  his brother.
                </p>
                <p className="mb-3 mb-lg-4">
                  But when Sonny finds Malius something goes wrong, Malius
                  escapes. The horrors of his rampage, the mutilation of the Phi
                  Delta Kappa brothers is recreated. But Malius is more than a
                  psychotic killer, he is the devil's henchman brought back from
                  the dead by Sonny and his father, Henry Collins (played by
                  Darren Mc Gavin).
                </p>
                <p>
                  Henry Collins tells his sons the truth; he sold his soul. He
                  must prepare to help them outlive him.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hell;
