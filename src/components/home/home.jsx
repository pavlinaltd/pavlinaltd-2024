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



import header from "../../assets/brand/banner.jpg";

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
        <section id="quote-container" className="row p-3 py-4 p-lg-0 px-lg-3">
          <div className="intro col-12 p-3 py-md-4 p-xl-5 px-xl-0 m-0">
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
        {/* <section
          id="active-films-container"
          className="row p-3 py-md-4 p-md-5 m-0"
        >
          <div className="col-12 p-3 py-md-4 p-xl-5 m-0">
            <h2 className="p-0 py-md-4 p-xl-5 py-xl-3 text-center">
              Active Films & Media Projects
            </h2>
            <ActiveProject
              picture={TheMagicSnowmanRedux}
              to="/magic-snowman-redux"
              title="The Magic Snowman Redux"
              synopsis={[
                "Lumiukko, the magic snowman was the voice of Roger Moore and adored by children worldwide. But he did not smile, wink or frown. He was too lazy for that!",
                <br />,
                <br />,
                "Through the wonderful possibilities offered by CGI and by adding a fresh new score and a sound mix, the re-edited version of this evergreen staple will give the new generation of children a fresh look at a film their parents grew up with.",
              ]}
              alt="The Magic Snowman Redux"
            />

            <ActiveProject
              picture={MyHeartIsNoLongerAnOrphan}
              to="/my-heart-is-no-longer-an-orphan"
              title="My Heart Is No Longer An Orphan"
              synopsis={[
                "In March of 1969, she was seventeen and he twenty years old, when they met at a poetry read in a city in Macedonia, then part of a country known as the jewel of the Balkans.",
                <br />,
                <br />,
                "He was more of a poet than she was, always brooding and sad even when he was happy. She was a bubbly tomboy who liked his attention and was tickled by the nickname he gave her, Paola.",
              ]}
              alt="My Heart Is No Longer An Orphan"
              order="order-0 order-sm-5"
            />

            <ActiveProject
              picture={GustellaDances}
              to="/gustela-dances"
              title="Gustella Dances"
              synopsis={[
                "A snowed 15th-century castle where only the spirits of knights dead long ago reign. Them, and two magical creatures made of ice and snow, a gift of planet Earth to all living creatures. They are Lumiukko and Gustella.",
                <br />,
                <br />,
                "Lumiukko is shaped as an old man, but in fact, he is a boy trapped in a snowy suit for 500 years. Gustella is the ageless wind, the travel companion who carries him from place to place.",
              ]}
              alt="Gustella Dances"
            />

            <div className="col-12 m-0 p-0 mt-5 py-0 px-xl-5">
              <hr className="mx-xl-5" />
            </div>

            <ActiveProject
              picture={BetweenTwoWorlds}
              to="/between-two-worlds"
              title="Between Two Worlds"
              synopsis={[
                "Between Two Worlds is a collection of poems written by the Montenegrin-born poet Miodrag Miloshević, whose life is the inspiration for a short film, My Heart Is No Longer An Orphan.",
                <br />,
                <br />,
                "It was the poet's wish that the English and French translations be interpretations and not direct translations. In his words, 'it should be the privilege of the readers to experience the verses mirroring their own feelings.'",
              ]}
              order="order-0 order-sm-5"
            />

            <ActiveProject
              picture={TheMagicSnowmanAudiobook}
              to="/the-magic-snowman-audiobook"
              title="The Magic Snowman"
              synopsis={[
                "Based on the feature film The Magic Snowman. With Sir Roger Moore as the voice of the magic snowman.",
                <br />,
                <br />,
                "Narrated by Lily Talevski",
                <br />,
                "Music by Ben Boian B. Goss",
                <br />,
                "Mixed by Canyon Silliman",
                <br />,
                "Sound effects by Dirk Eggermont",
              ]}
            />
          </div>
        </section> */}
        <section>
          <div>

            <div
              className="book-centered-div"
            >
              <h2 className="book-title">Active Productions</h2>
            </div>

          </div>

          <div class="book-image-row">
  <div class="book-image">
  <Link to="/the-magic-snowman-redux">
                  <img
                    src={TheMagicSnowmanRedux}
                    className="img-fluid rounded-3"
                    alt="The Magic Snowman Redux"
                  />
                </Link>
  </div>
  <div class="book-image">
  <Link to="/my-heart-is-no-longer-an-orphan">
                  <img
                    src={MyHeartIsNoLongerAnOrphan}
                    className="img-fluid rounded-3"
                    alt="My Heart Is No Longer An Orphan"
                  />
                </Link>
  </div>
  <div class="book-image">
  <Link to="/gustella-dances">
                  <img
                    src={GustellaDances}
                    className="img-fluid rounded-3"
                    alt="Gustella Dances"
                  />
                </Link>
  </div>
</div>
</section>

          {/* <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row p-0 pb-4 p-xl-0 py-xl-3">
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4 mt-lg-0">
                <Link to="/the-magic-snowman-redux">
                  <img
                    src={TheMagicSnowmanRedux}
                    className="img-fluid rounded-3"
                    alt="The Magic Snowman Redux"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4">
                <Link to="/my-heart-is-no-longer-an-orphan">
                  <img
                    src={MyHeartIsNoLongerAnOrphan}
                    className="img-fluid rounded-3"
                    alt="My Heart Is No Longer An Orphan"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4">
                <Link to="/gustella-dances">
                  <img
                    src={GustellaDances}
                    className="img-fluid rounded-3"
                    alt="Gustella Dances"
                  />
                </Link>
              </div>
            </div>
          </div> */}

<section>

          <div style={{marginTop : "80px"}}>
            <div
              className="book-centered-div"
            >
              <h2 className="book-title">Media Projects</h2>
            </div>
            <div className="two-book-boxes">
              <div className="two-book-boxes-item-left" style={{ backgroundColor : "#FFC72C" }} >
                  
          
                  <div style={{flex : 1}}> 
                  <Link to="/between-two-worlds">
          
                    <img
                      src={BetweenTwoWorlds}
                      alt="Between Two Worlds"
                      width="100%"
                      
                    />
                    
                  </Link>
          
         
                </div>
                <div style={{flex : 1}}>
                    <h3 className="pb-md-2 pb-2 mt-lg-2" style={{ fontWeight : "bold"}}>Between Two Worlds</h3>
                    <p>Written by Мишeko</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    
                      <br></br>
                      <p class="text-center my-2">Poetry read by Lily Talevski</p>
                      <p class="text-center my-2">Tori Naumovski</p>
                      <p class="text-center my-2">Francis Dumaurier</p>
                </div>
              </div>
              <div className="two-book-boxes-item" style={{ backgroundColor : "#33C9FF" }} >
      
                  <div>
                  <Link to="/between-two-worlds">
                
                    <img
                      src={TheMagicSnowmanAudiobook}
                      className=""
                      alt="TheMagic Snowman Audiobook"
                      width="100%"
                   
                    />
                  </Link>
                  <p className="caption">  distributed by  <span style={{fontStyle: "italic"}}> Authors Republic</span></p>
                  </div>
              </div>
            


            </div>
          </div>
          </section>

          <section>
          {/* 
          <div className=" d-sm-none small-screen-media-projects">
           <div className="row mb-4">
          
              <div
                className="col-12 d-flex align-items-center justify-content-center p-3 py-md-4 p-xl-5 pb-xl-0 px-xl-0 m-0 rounded text-center"
                style={{ backgroundColor: "#f0f0f0", minHeight: "50px" }}
              >
                <h2 className="my-0">Media Projects</h2>
              </div>
      

            </div>
            
            <div className="row  small-blue-box align-items-center">
              
                <div className="col-6 mt-3">
                  <Link to="/between-two-worlds" className="">
                      <img
                          src={BetweenTwoWorlds}
                          className=""
                          alt="Between Two Worlds"
                          width="100%"
                          height= "90%"
                      />
                  </Link>
                
                </div>
                <div className="col-6 mt-3 " id="book-box-text-smallest">
                  <div className="col" >
                    <h3>Poetry read by Lily Talevski</h3>
                    <br></br>
                    <h3>Tori Naumovski</h3>
                    <br></br>
                    <h3>Francis Dumaurier</h3>
                  </div>
                </div>

              
            </div>
            </div>
            <div className=" d-sm-none small-screen-media-projects">
            <div className="row  small-yellow-box align-items-center">
              
                <div className="col-6 mt-3">
                  <Link to="/the-magic-snowman-book" className="book">
                        <img
                          src={TheMagicSnowmanAudiobook}
                          className=""
                          alt="Between Two Worlds"
                          width="95%"
                          height= "100%"
                        />
                  </Link>
                
                </div>
                <div className="col-6 mt-3 " id="book-box-text-small">
                  <div className="col" >
                      <h3 >With Sir Roger Moore as the voice of The Magic Snowman</h3>
                      <br></br>
                      <h3>Narrated by Lilly Talevski</h3>
                      <br></br>
                      <h3>Music by ben Boian B. Goss</h3>
                      <br></br>
                      <h3>Sound Design by Mason Ryan</h3>
                  </div>
                </div>

              
            </div>
          </div> */}






  
          <div style={{ marginTop : "60px"}}>

            <div
              className="book-centered-div"
            >
              <h2 className="book-title">In Development</h2>
            </div>


          </div>

          <div class="book-image-row">
          <div class="book-image">
          <Link to="/in-development#borders-in-heaven">
                  <img
                    src={BordersInHeaven}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
          </div>
          <div class="book-image">
          <Link to="/in-development#keratza">
                  <img
                    src={Keratza}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
          </div>
          <div class="book-image">
          <Link exact to="/in-development#the-magic-snowman-returns">
                  <img
                    src={TheMagicSnowmanReturns}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
          </div>
          <div class="book-image">
          <Link to="/in-development#rice">
                  <img
                    src={RiceMilk}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
          </div>
        </div>


          {/* <div className="w-100 p-0 p-xl-0 py-xl-3 d-flex justify-content-center mt-2">
            <div className="film-poster row mt-lg-0 h-100">
              <div className="col-6 col-md-3">
                <Link to="/in-development#borders-in-heaven">
                  <img
                    src={BordersInHeaven}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
              </div>
              <div className="col-6 col-md-3">
                <Link to="/in-development#keratza">
                  <img
                    src={Keratza}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
              </div>
              <div className="col-6 col-md-3">
                <Link exact to="/in-development#the-magic-snowman-returns">
                  <img
                    src={TheMagicSnowmanReturns}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
              </div>
              <div className="col-6 col-md-3">
                <Link to="/in-development#rice">
                  <img
                    src={RiceMilk}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
              </div>
            </div>
          </div> */}
        </section>
        <section
          id="intro-container"
          className="row p-3 pt-0 py-md-4 px-md-0 m-0 bg-light,"
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
