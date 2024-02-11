import React, { useEffect } from "react";
import "./films.css";

import MagicSnowmanImg from "../../../assets/films/the_magic_snowman.jpg";
import Poster from "../../../assets/films/SnowmanPoster.jpg";

const MagicSnowman = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-5">The Magic Snowman</h1>
                <p className="mb-3 mb-lg-4 fw-bold">You can hear him speak if you believe...</p>
                <h2>Distributed by</h2>
                <p className="mb-3 mb-lg-4">BVI/Miramax</p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/aE3pq0ygwjo"
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
                <div className="col-12">
                  <img src={Poster} alt="" className="img" />
                </div>
                <div className="col-12">
                  <img src={MagicSnowmanImg} alt="" className="img" />
                </div>
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  The Magic Snowman was produced in 1988 by Pavlina Ltd. in a
                  co-production with FIT a production company based in
                  Yugoslavia. The film was dedicated to UNICEF which received a
                  portion of the producer's revenue. The film carries a powerful
                  message in the context of a wonderful storyline featuring the
                  character of Lumiukko, the magical snowman. Lumiukko travels
                  the world with the help of his friend and lifelong companion,
                  Gustella the wind, in order to help children by teaching them
                  valuable lessons about honesty, integrity, and determination.
                  All future magic snowman movies embrace and explicate such
                  themes.
                </p>
                <p>
                  Over the past ten years, The Magic Snowman has aired on The
                  Disney Channel more than 38 times in children’s prime time
                  slots. It is estimated that twenty million children have seen
                  the film in the United States alone. Miramax Films has
                  worldwide distribution rights to the original film. The video
                  rights are with Artisan Entertainment and the film was
                  re-released for Christmas 1999 even though sell-through on the
                  film began in June 1995. Other major distributors who have
                  acquired the original film are The Sky Channel in the UK,
                  Italy's RAI Uno, and Spain's Television Española. The film has
                  been sold worldwide in over thirty international markets. The
                  Magic Snowman was a seasonal staple among children's
                  television programs for seventeen years.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default MagicSnowman;
