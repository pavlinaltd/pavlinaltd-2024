import React, { useEffect, useRef } from "react";
import "./films.css";

//import Poster from "../../../assets/films/posters/between-two-worlds.png";
import Poem from "../../../assets/films/sun_text.png";
import Review from "../../../assets/films/between-review.png";
import BetweenTwoWorlds from "../../../assets/books/BetweenTwoWorlds.png";
import EnglishPoem from "../../../assets/audio/Sun_English_Mastered.wav";
import FrenchPoem from "../../../assets/audio/Sun_French_Mastered.wav";
import SerbianPoem from "../../../assets/audio/Sun_Serbian_Mastered.wav";
const Between = () => {

  const serbianPoemRef = useRef(null);
  const frenchPoemRef = useRef(null);
  const englishPoemRef = useRef(null);

  // useEffect(() => window.scrollTo(0, 0));

  useEffect(() => {
    window.scrollTo(0, 0);

    // Function to pause all audios except the one currently playing
    const pauseOtherAudios = (currentAudioRef) => {
      const audios = [serbianPoemRef, frenchPoemRef, englishPoemRef];
      audios.forEach((audioRef) => {
        if (audioRef.current && audioRef !== currentAudioRef) {
          audioRef.current.pause();
        }
      });
    };

    // Adding event listeners to each audio element
    const serbianAudio = serbianPoemRef.current;
    const frenchAudio = frenchPoemRef.current;
    const englishAudio = englishPoemRef.current;

    if (serbianAudio) {
      serbianAudio.addEventListener('play', () => pauseOtherAudios(serbianPoemRef));
    }
    if (frenchAudio) {
      frenchAudio.addEventListener('play', () => pauseOtherAudios(frenchPoemRef));
    }
    if (englishAudio) {
      englishAudio.addEventListener('play', () => pauseOtherAudios(englishPoemRef));
    }

    // Cleanup function to remove event listeners
    return () => {
      if (serbianAudio) {
        serbianAudio.removeEventListener('play', () => pauseOtherAudios(serbianPoemRef));
      }
      if (frenchAudio) {
        frenchAudio.removeEventListener('play', () => pauseOtherAudios(frenchPoemRef));
      }
      if (englishAudio) {
        englishAudio.removeEventListener('play', () => pauseOtherAudios(englishPoemRef));
      }
    };
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
   
         
              <section className="synopsis container p-3 py-4 py-md-0 m-0" >
                <div className="between-desc-section"       style={{ marginLeft : "4vw", marginRight : "4vw"}}>
                 
                  <div className="fw-40">
                    <img src={BetweenTwoWorlds } alt="BetweenTwoWorlds" />
                  </div>

                  <div className="fw-60" style={{ display : "flex", flexDirection : "column", justifyContent : "space-evenly" , fontSize : "1.1vw", lineHeight : "2vw",  marginTop : "20px", marginBottom : "20px"}} >
                    <p >
                      <span style={{ fontStyle : "italic"}}>Between Two Worlds </span> is a collection of poems written by the
                      Montenegrin-born poet Miodrag Milošević, whose life is
                      the inspiration for a short docu/drama,  <span style={{ fontStyle : "italic"}}>My Heart Is No Longer An
                      Orphan</span>. 
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
                      the words on the page allowing the reader to catch a
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
                {/* <div className="row poem-heading mb-2">
                  <h1>Hear the Poems</h1>
                </div> */}

              
                <div className="col-12 col-md-11 mx-auto " style={{  position: "relative" }}>
                      <img src={Poem} alt="Poem" className="img-fluid" />
                          <div className="between-overlay-sonce">
                     
                      {/* <div className="col-2">
                      Sonce
                        </div> */}
                        <div className="col-3">
                        <audio controls='controls'  ref={serbianPoemRef}>
                        <source src={SerbianPoem} type="audio/wav"/>
                        </audio>
                        </div>
                    </div>

                    <div className="between-overlay-soleil">
                  {/* <div className="col-2">
                     Soleil
                    </div> */}
                    <div className="col-3">
                    <audio controls='controls'  ref={frenchPoemRef}>
                    <source src={FrenchPoem} type="audio/wav"/>
                    </audio>
                    </div>
                </div>

                <div className="between-overlay-sun">
                  {/* <div className="col-2">
                    Sun
                  </div> */}
                  <div className="col-3">
                  <audio controls='controls'  ref={englishPoemRef}>
                  <source src={EnglishPoem} type="audio/wav"/>
                  </audio>
                  </div>

                  
                </div>

                </div>

              </section>
            </div>
          </div>
        </section>
        {/* <div className="row m-0 p-0 pb-4 px-3 p-xl-5">
         
          <div className="col-12 col-md-11 ">
            <img src={Review} alt="Review" className="img-fluid" />
          </div>
        </div> */}
        <div className="row m-0 p-0 pb-4 px-3 p-xl-5">
  <div className="col-12 col-md-11 mx-auto">
    <img src={Review} alt="Review" className="img-fluid mx-auto d-block" />
  </div>
</div>
      </div>
    </main>
  );
};

export default Between;
