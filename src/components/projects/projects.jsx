import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

import TheMagicSnowman from "../../assets/films/posters/the-magic-snowman.png";
import HappyHellNight from "../../assets/films/posters/happy-hell-night.png";
import ThePromiseOfPerfume from "../../assets/films/posters/the-promise-of-perfume.png";
import MyAmericanPilgrimage from "../../assets/films/posters/my-american-pilgrimage.png";
import TheColorsOfMacedonia from "../../assets/films/posters/the-colors-of-macedonia.png";
import Gotse from "../../assets/films/posters/gotse.png";

const Projects = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main id="projects" className="text-uppercase">
      <div className="container p-0">
        <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 px-md-0 m-0 mx-auto"
        >
          <div className="col-12 p-3 py-4 p-xl-0 pb-xl-0 m-0">
            <h2 className="p-0">Completed Features</h2>
          </div>
          <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-0 py-xl-3">
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4 mt-lg-0">
                <Link to="/the-magic-snowman">
                  <img
                    src={TheMagicSnowman}
                    className="img-fluid rounded-3"
                    alt="The Magic Snowman"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4">
                <Link to="/happy-hell-night">
                  <img
                    src={HappyHellNight}
                    className="img-fluid rounded-3"
                    alt="Happy Hell Night"
                  />
                </Link>
              </div>
            </div>
          </div>
          </section>


            <hr />
        <section style={{ marginTop : "60px"}}>
          <div className="col-12 p-3 py-4 p-xl-0 pb-xl-0 m-0" >
            <h2 className="p-0">Completed Documentaries and Short Films</h2>
          </div>
          <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-0 py-xl-3">
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4 mt-lg-0">
                <Link to="/promise-of-perfume">
                  <img
                    src={ThePromiseOfPerfume}
                    className="img-fluid rounded-3"
                    alt="The Promise of Perfume"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4">
                <Link to="/my-american-pilgrimage">
                  <img
                    src={MyAmericanPilgrimage}
                    className="img-fluid rounded-3"
                    alt="My American Pilgrimage"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4">
                <Link to="/colors-of-macedonia">
                  <img
                    src={TheColorsOfMacedonia}
                    className="img-fluid rounded-3"
                    alt="The Colors of Macedonia"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col-lg-3 col-md-4 col-6 pt-lg-4">
                <Link to="/gotse">
                  <img
                    src={Gotse}
                    className="img-fluid rounded-3"
                    alt="Gotse"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
