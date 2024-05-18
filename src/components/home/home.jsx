import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import TheMagicSnowmanRedux from "../../assets/films/posters/the-magic-snowman-redux.png";
import MyHeartIsNoLongerAnOrphan from "../../assets/films/posters/my-heart-is-no-longer-an-orphan.png";
import GustellaDances from "../../assets/films/posters/gustella-dances.png";
import BetweenTwoWorlds from "../../assets/books/BetweenTwoWorlds.png";
// import TheMagicSnowmanAudiobook from "../../assets/films/posters/the-magic-snowman-audiobook.png";
import TheMagicSnowmanAudiobook from "../../assets/books/magicSnowman.jpg";
import BordersInHeaven from "../../assets/films/posters/borders in heaven.jpg";
import Keratza from "../../assets/films/posters/keratza-poster.jpeg";
import TheMagicSnowmanReturns from "../../assets/films/posters/The-Magic-Snowman-Returns.JPG";
import RiceMilk from "../../assets/films/R_M_Stilettos.jpg";
// import AudioImg from "../../assets/common/audio.png";

import magicAudio from "../../assets/audio/The_Magic_Snowman.wav";

import header from "../../assets/brand/banner-new.jpg";

// function AudioPlayer({ magicAudio }) {
//   const audioRef = useRef(null);

//   const play = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pause = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef}>
//         <source src={magicAudio} type="audio/wav" />
//         Your browser does not support the audio element.
//       </audio>
//       <button onClick={play}>Play</button>
//       <button onClick={pause}>Pause</button>
//     </>
//   );
// }


const Home = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main>
      <div className="container-fluid">
        <section id="header-container" className="row p-0">
          <div className="header col-12 p-0 m-0">
            <img src={header} alt="Placeholder" />
          </div>
        </section>
      </div>
      <div className="container mx-auto p-0 m-0">
        <section id="quote-container">
          <div className="intro col-12 p-3 p-xl-5 px-xl-0 m-0">
            <h3 className="p-0 px-xl-0">
              “Press on. Nothing in the world can take the place of persistence.
              Talent will not: nothing is more common than unrewarded talent.
              Education alone will not: the world is full of educated failures.
              Persistence alone is omnipotent.”{" "}
              <span className="float-end">Calvin Coolidge</span>
            </h3>
            {/* <p className="p-0 px-xl-5 text-end">Calvin Coolidge</p> */}
          </div>
        </section>

        <section className="home-section-padding">
          <div
            className="book-centered-div"
          >
            <h2 className="book-title">ACTIVE PRODUCTIONS</h2>
          </div>


          <div className="book-image-row">
          <div style={{display : "flex" , flex : 2,  gap: "20px"}}>
            <div className="book-image">
              <Link to="/the-magic-snowman-redux">
                <img
                  src={TheMagicSnowmanRedux}
                  className="img-fluid rounded-3"
                  alt="The Magic Snowman Redux"

                />
              </Link>
            </div>
            <div className="book-image">
              <Link to="/my-heart-is-no-longer-an-orphan">
                <img
                  src={MyHeartIsNoLongerAnOrphan}
                  className="img-fluid rounded-3"
                  alt="My Heart Is No Longer An Orphan"

                />
              </Link>
            </div>
            </div>
            <div style={{display : "flex" , flex : 1,  gap: "20px"}}>
            <div className="book-image">
              <Link to="/gustella-dances">
                <img
                  src={GustellaDances}
                  className="img-fluid rounded-3"
                  alt="Gustella Dances"

                />
              </Link>
            </div>
            </div>
          </div>
        </section>

        <section className="home-section-padding">

          <div className="home-media">
            <div
              className="book-centered-div home-media-wid"
            >
              <h2 className="book-title">MEDIA PROJECTS</h2>
            </div>
            <div className="two-book-boxes">
              <Link className="two-book-boxes-item-left" style={{ backgroundColor: "#ADD8E6", textDecoration : "none", color: "inherit" }} to="/between-two-worlds" >


                <div style={{ flex: 1 }}>
                  {/* <Link to="/between-two-worlds"> */}

                    <img
                      src={BetweenTwoWorlds}
                      alt="Between Two Worlds"
                      width="120%"
                      style={{}}
                    />

                  {/* </Link> */}


                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "end", marginTop: "50%", marginBottom: "30px" }}>
                  {/* <div>
                    <h3 className="pb-md-2 pb-2 mt-lg-2" style={{ fontWeight : "bold"}}>Between Two Worlds</h3>
                    </div> */}




                  <div>
                    <p className="text-center my-2">Poetry read by</p>
                    <p className="text-center my-2">Lily Talevski</p>
                    <p className="text-center my-2">Toni Naumovski</p>
                    <p className="text-center my-2">Francis Dumaurier</p>
                  </div>
                </div>
              </Link>
              <div className="two-book-boxes-item ">

                <div >
                  {/* <Link to="/the-magic-snowman-book"> */}

                    <img
                      src={TheMagicSnowmanAudiobook}

                      alt="TheMagic Snowman Audiobook"
                      width="100%"

                    />

                  {/* </Link> */}
                  <div className="snowman-dist">
                    <div style={{}}>distributed by  <span style={{ fontStyle: "italic" }}> Authors Republic</span></div>
                    <div style={{ textAlign : "right"}}> 
                      {/* <a href="www.google.com" target="_blank"> 
                      </a>*/}
                      <audio controls controlsList="nodownload noplaybackrate">
  <source src={magicAudio} type="audio/wav" />
  Your browser does not support the audio element.
</audio>
{/* <AudioPlayer magicAudio={magicAudio}></AudioPlayer> */}
                    {/* <img
                      src={AudioImg}
                      alt="audio button"
                      width="18px"
                      height="18px"
                    /> */}
                     </div>
                  </div>

                </div>

              </div>



            </div>
          </div>
        </section>

        <section className="home-section-padding">

          <div style={{ marginTop: "60px" }}>

            <div
              className="book-centered-div"
            >
              <h2 className="book-title">IN DEVELOPMENT</h2>
            </div>
          </div>

          <div className="book-image-row">
            <div style={{display : "flex" , flex : 1,  gap: "20px"}}>
            <div className="book-image">
              <Link to="/in-development#borders-in-heaven">
                <img
                  src={BordersInHeaven}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image">
              <Link to="/in-development#keratza">
                <img
                  src={Keratza}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            </div>
            <div style={{display : "flex", flex : 1,  gap: "20px"}}>
            <div className="book-image">
              <Link to="/in-development#the-magic-snowman-returns">
                <img
                  src={TheMagicSnowmanReturns}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            <div className="book-image">
              <Link to="/in-development#rice">
                <img
                  src={RiceMilk}
                  className="img-fluid rounded-3"
                  alt="In Development"
                />
              </Link>
            </div>
            </div>
          </div>

        </section>
        <section
          className="home-section-padding"
          style={{ marginTop: "40px", marginBottom : "20px" }}
        >
          <div className="intro col-12 p-0 py-md-4 pt-xl-0 px-xl-0 m-0">
            <h2 className="p-0">
              <span className="fst-italic">Pavlina Ltd.</span> is a New York
              based independent production company engaged in the development
              and production of feature films and documentaries.{" "}
              <span className="fst-italic">FilmsZaNas d.o.o.e.l.</span> is the
              co-producing partner in the Republic of Macedonia.
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
