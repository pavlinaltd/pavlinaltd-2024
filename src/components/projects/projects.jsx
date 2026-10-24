import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

import TheMagicSnowman from "../../assets/films/posters/the-magic-snowman.png";
import HappyHellNight from "../../assets/films/posters/happy-hell-night.png";
import ThePromiseOfPerfume from "../../assets/films/posters/Promise_of_perfume_poster.jpg";
import MyAmericanPilgrimage from "../../assets/films/posters/my-american-pilgrimage.jpg";
import TheColorsOfMacedonia from "../../assets/films/posters/the-colors-of-macedonia.png";
import Gotse from "../../assets/films/posters/gotse.png";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="projects" className="text-uppercase main-margin">
      {/* <div className="container p-0"> */}
      <section
        id="previous-films"
        className="margin-main projects-section"
        style={{ marginBottom: "60px" }}
      >
        <div className="col-12 p-xl-0 pb-xl-0 m-0">
          <h2 className="p-0">Features</h2>
        </div>

        <div className="book-image-row">
          <div style={{ display: "flex", flex: 1, gap: "20px" }}>
            <div className="book-image book-image-partial">
              <Link to="/the-magic-snowman">
                <img
                  src={TheMagicSnowman}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image book-image-partial">
              <Link to="/happy-hell-night">
                <img
                  src={HappyHellNight}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-sep" />
      <section className="margin-main projects-section">
        <div className="col-12 p-xl-0 pb-xl-0 m-0">
          <h2 className="p-0">Documentaries</h2>
        </div>
        <div className="book-image-row">
          <div style={{ display: "flex", flex: 1, gap: "20px" }}>
            <div className="book-image book-image-partial">
              <Link to="/promise-of-perfume">
                <img
                  src={ThePromiseOfPerfume}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image book-image-partial">
              <Link to="/my-american-pilgrimage">
                <img
                  src={MyAmericanPilgrimage}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
          </div>
          {/* <div style={{display : "flex" , flex : 1,  gap: "20px"}}>
            <div className="book-image">
              <Link to="/colors-of-macedonia">
                <img
                  src={TheColorsOfMacedonia}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image">
              <Link to="/gotse">
                <img
                  src={Gotse}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            </div> */}
        </div>
      </section>
      <hr className="hr-sep" />
      <section className="margin-main projects-section">
        <div className="col-12 p-xl-0 pb-xl-0 m-0">
          <h2 className="p-0">Short Films</h2>
        </div>
        <div className="book-image-row">
          <div style={{ display: "flex", flex: 1, gap: "20px" }}>
            <div className="book-image book-image-partial">
              <Link to="/colors-of-macedonia">
                <img
                  src={TheColorsOfMacedonia}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image book-image-partial">
              <Link to="/gotse">
                <img
                  src={Gotse}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </main>
  );
};

export default Projects;
