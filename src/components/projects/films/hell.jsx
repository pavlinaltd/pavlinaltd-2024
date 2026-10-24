import React, { useEffect, useState } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/happy-hell-night.png";
import Reel from "../../../assets/films/congress_fix.png";
import header from "../../../assets/films/hhnposter.webp";
import ImdbIcon from "../../../assets/common/imdbna.png";
import AudioImg from "../../../assets/common/podcasts.png";
import Modal from "react-bootstrap/Modal";

const Hell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isMRS, setIsMRS] = useState(false);

  const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
    return (
      <Modal
        show={isOpen}
        onHide={closeModal}
        centered
        dialogClassName="modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="d-flex align-items-center modal-flex">
            <div style={{ flex: "1", textAlign: "center" }}>
              <img
                src={Poster}
                alt="The Magic Snowman Returns"
                className="future-film-img"
                style={{ width: "80%" }}
              />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <main>
      <div className="container-fluid">
        <section id="header-container" className="row p-0 main-margin">
          <div className="col-12 p-0 m-0">
            <img src={header} alt="Placeholder" className="hnn-banner" />
          </div>
        </section>
      </div>
      <div
        className="hnn-button"
        style={{ textAlign: "center", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            borderRadius: "12px",
          }}
        >
          <div style={{ marginRight: "10px", color: "black" }}>Visit</div>
          <a
            href="https://www.imdb.com/title/tt0236283/?ref_=nm_knf_t_4"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ImdbIcon}
              alt=""
              className="img hoverable-img"
              style={{ objectFit: "fill", maxHeight: "50px" }}
            />
          </a>
        </div>
        <div
          className="hnn-listen"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            borderRadius: "12px",
          }}
        >
          <div style={{ marginRight: "10px", color: "black" }}>
            START LISTENING FROM 1:21:00 ONWARD
          </div>
          <div>
            <a
              href="https://podcasts.apple.com/us/podcast/movie-melt-podcast-psychotronic-and-outsider-cinema/id1458025439?i=1000495807992"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={AudioImg}
                alt=""
                className="img hoverable-img"
                style={{ objectFit: "contain", maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* <img src={header} alt="Happy Hell Night" style={{ width : "100%", height : "50%"}} /> */}
      <div className="main-margin">
        <section className="mt-3 margin-main">
          <div>
            <div className="hnn-poster" style={{ gap: "10px" }}>
              {/* <div style={{ display : "flex", flexDirection : "column", width : "64%", textAlign : "center" }}>
             
              <img
                  src={Reel}
                  alt="Happy Hell Night"
                  width={"100%"}
                  style={{borderRadius : "12px"}}
                />
              </div> */}

              <div className="hnn-img fw-30">
                <img
                  src={Poster}
                  alt="Happy Hell Night"
                  style={{
                    borderRadius: "12px",
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsMRS(true)}
                />
              </div>
              <div className="hnn-desc">
                <p>
                  Twenty-five years ago at Winfield College, psycho-priest
                  Zachary Malius murdered seven frat boys.
                </p>
                <br></br>
                <p>
                  Malius is waiting, secretly locked in Winfield Insane Asylum.
                  Now, he's just a myth; the local boogie man, the sick joke
                  used to scare children. Malius is not afraid to die; living
                  has cured him of that. Sonny Collins, a star freshman student
                  at Winfield College has nerves of steel and a taste for the
                  heroics. He faces the ultimate Phi Delta Kappa hazing:
                  photograph the mythical, monstrous Malius.
                </p>
                <br></br>
                <p>
                  Harry Collins, Sonny's brother, is already a Phi Delta Kappa.
                  In a jealous rage and caught in a love triangle with Sonny's
                  girl, Harry would like to even the score. He wants to scare
                  his brother.
                </p>
                <br></br>
                <p>
                  But when Sonny finds Malius something goes wrong, Malius
                  escapes. The horrors of his rampage, the mutilation of the Phi
                  Delta Kappa brothers is recreated. But Malius is more than a
                  psychotic killer, he is the devil's henchman brought back from
                  the dead by Sonny and his father, Henry Collins (played by
                  Darren Mc Gavin).
                </p>
                <br></br>
                <p>
                  Henry Collins tells his sons the truth; he sold his soul. He
                  must prepare to help them outlive him.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="margin-main mb-5" style={{ marginTop: "40px" }}>
          <div className="hnn-trailer">
            <div className="fw-30">
              <img
                src={Reel}
                alt="Happy Hell Night"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "fill",
                }}
              />
            </div>
            <div className="hnn-iframe" style={{ flex: "3", width: "100%" }}>
              <div
                className="ratio ratio-16x9"
                style={{ width: "100%", height: "100%" }}
              >
                {/* <iframe
          src="https://youtu.be/n3ecJJ7jiFI?si=ShHkXZQU4c5iQlW2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        ></iframe> */}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/n3ecJJ7jiFI?si=ivwsVdWxG23xS7km"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {isMRS && (
          <div>
            <FutureFilmRiceModal
              isOpen={isMRS}
              closeModal={() => setIsMRS(false)}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Hell;
