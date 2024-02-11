import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/my-american-pilgrimage.png";

const Pilgrimage = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-4">My American Pilgrimage</h1>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/aHsLfMjUwSg"
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
                  alt="My American Pilgrimage"
                  className="img"
                />
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  This narrative documentary chronicles the Americanization of
                  Stoyan Christowe, a distinguished journalist, author, and a
                  two-term Vermont state senator. An authentic American hero,
                  Christowe's immigrant experience is not unlike many others,
                  his achievements are. A century after his birth, his views,
                  values and experiences offer native-born Americans and
                  immigrants alike, inspiration and direction.
                </p>
                <p className="mb-3 mb-lg-4">
                  The life of Stoyan Christowe is a quintessentially American
                  story. Born in Ottoman Macedonia in 1898, he immigrated to the
                  US in 1911, at the age of 13, and sought to meld his
                  Macedonian roots with his American life. His was the journey
                  of a determined boy who dreamed of something beyond his
                  understanding, but not beyond his reach. This peasant boy from
                  Macedonia became a renowned American writer and a statesman
                  who was an introspective and relentless seeker for his own
                  truth - his own identity.
                </p>
                <div className="quote">
                  <p className="mb-3 mb-lg-4 text-center">
                    ❝ In my life I had two mothers: Macedonia who gave me
                    birth,and America who adopted me. ❞
                  </p>
                  <p className="text-end">- Stoyan Christowe, 1924</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Pilgrimage;
