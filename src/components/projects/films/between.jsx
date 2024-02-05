import React, { useEffect } from "react";
import "./films.css";

//import Poster from "../../../assets/films/posters/between-two-worlds.png";
import Poem from "../../../assets/films/between-poem.png";
import Review from "../../../assets/films/between-review.png";
import BetweenTwoWorlds from "../../../assets/books/BetweenTwoWorlds.png";
import EnglishPoem from "../../../assets/audio/Sun_English_Mastered.wav";
import FrenchPoem from "../../../assets/audio/Sun_French_Mastered.wav";
import SerbianPoem from "../../../assets/audio/Sun_Serbian_Mastered.wav";
const Between = () => {
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
   
         
              <section className="synopsis container p-3 py-4 py-md-0 m-0">
                <div className="between-desc-section">
                 
                  <div style={{ flex : 1}}>
                    <img src={BetweenTwoWorlds } alt="BetweenTwoWorlds" />
                  </div>

                  <div style={{ flex : 2 , display : "flex", flexDirection : "column", justifyContent : "space-evenly" , fontSize : "20px", marginTop : "20px", marginBottom : "20px"}} >
                    <p >
                      Between Two Worlds is a collection of poems written by the
                      Montenegrin-born poet Miodrag Miloshević, whose life is
                      the inspiration for a short film, My Heart Is No Longer An
                      Orphan. 
                    </p>
                    <p>
                      The film tells the story of two young poets who fall in
                      love at a poetry festival in Macedonia, in 1969 where they
                      spend three days that will mark them for the rest of their
                      lives. Separated by a series of events that will keep them
                      apart for the next fifty years, the poet, now 70-years old
                      finds the girl. The poems in the book reflect his search
                      and longing for something that he lost half a century ago.
                    </p>
                    <p >
                      It was the poet's wish that the English and French
                      translations be interpretations and not direct
                      translations. In his words, "it should be the privilege of
                      the readers to experience the verses mirroring their own
                      feelings."
                    </p>
                    <p>
                      The illustrations by Kathi Ha add a palpable feeling to
                      the words on the page and allows the reader to catch a
                      glimpse of the poet's dark and longing heart.
                    </p>
                    <p >Available on Amazon Books</p>
                  </div>

                </div>
                </section>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <section style={{marginTop : "60px"}}>
                <div className="row poem-heading mb-2">
                  <h1>Hear the Poems</h1>
                </div>

              
                <div className="col-12 col-md-11 mx-auto" style={{  position: "relative" }}>
                      <img src={Poem} alt="Poem" className="img-fluid" />
                          <div className="between-overlay-sonce">
                     
                      {/* <div className="col-2">
                      Sonce
                        </div> */}
                        <div className="col-3">
                        <audio controls='controls'>
                        <source src={SerbianPoem} type="audio/wav"/>
                        </audio>
                        </div>
                    </div>

                    <div className="between-overlay-soleil">
                  {/* <div className="col-2">
                     Soleil
                    </div> */}
                    <div className="col-3">
                    <audio controls='controls'>
                    <source src={FrenchPoem} type="audio/wav"/>
                    </audio>
                    </div>
                </div>

                <div className="between-overlay-sun">
                  {/* <div className="col-2">
                    Sun
                  </div> */}
                  <div className="col-3">
                  <audio controls='controls'>
                  <source src={EnglishPoem} type="audio/wav"/>
                  </audio>
                  </div>

                  
                </div>

                </div>

              </section>
            </div>
          </div>
        </section>
        <div className="row m-0 p-0 pb-4 px-3 p-xl-5">
         
          <div className="col-12 col-md-11 ">
            <img src={Review} alt="Review" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Between;
