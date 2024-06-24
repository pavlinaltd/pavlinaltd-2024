import React, { useEffect, useRef, useState } from "react";
import "./films.css";

//import Poster from "../../../assets/films/posters/between-two-worlds.png";
import Poem from "../../../assets/films/sun_text.png";
import Review from "../../../assets/films/between-reviewnew.png";
import BetweenTwoWorlds from "../../../assets/books/book_final.png";
import EnglishPoem from "../../../assets/audio/Sun_English_Mastered.wav";
import FrenchPoem from "../../../assets/audio/Sun_French_Mastered.wav";
import SerbianPoem from "../../../assets/audio/Sun_Serbian_Mastered.wav";
import Modal from "react-bootstrap/Modal";
import AudioButton from "../../../assets/common/aud.png";

const Between = () => {

  const serbianPoemRef = useRef(null);
  const frenchPoemRef = useRef(null);
  const englishPoemRef = useRef(null);
  const [isMRS, setIsMRS] = useState(false);
  const [isVisibleEng, setIsVisibleEng] = useState(false); // State to track visibility
  const [isVisibleSun, setIsVisibleSun] = useState(false); 
  const [isVisibleSol, setIsVisibleSol] = useState(false); 

  const toggleVisibilityEng = () => {
    setIsVisibleEng(!isVisibleEng); // Toggle the visibility state
    setIsVisibleSun(false);
    setIsVisibleSol(false);
  };

  const toggleVisibilitySun = () => {
    setIsVisibleEng(false); // Toggle the visibility state
    setIsVisibleSun(!isVisibleSun);
    setIsVisibleSol(false);
  };

  const toggleVisibilitySol = () => {
    setIsVisibleEng(false); // Toggle the visibility state
    setIsVisibleSun(false);
    setIsVisibleSol(!isVisibleSol);
    alert("clicked");
  };



  const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
    return (
      <Modal show={isOpen} onHide={closeModal} centered  dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="d-flex align-items-center modal-flex">
            <div style={{ flex: "1", textAlign : "center" }}>
              <img src={BetweenTwoWorlds} alt="Between two worlds" className="future-film-img" style={{ width : "80%"}} />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    );
  };

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
    <main className="film main-margin">

              <section className="margin-main pb-5"  >
                <div className="between-desc-section" style={{ gap: "30px" }}>

                  <div className="fw-25">
                    <img src={BetweenTwoWorlds} alt="BetweenTwoWorlds" style={{ objectFit: "contain", width : "100%", cursor : "pointer"}}  onClick={() => setIsMRS(true)}/>
                  </div>

                  <div className="fw-75 orphan-desc" >
                    <div >
                      <span style={{ fontStyle: "italic" }}>Between Two Worlds </span> is a collection of poems written by the
                      Montenegrin-born poet Miodrag Milošević, whose life is
                      the inspiration for a short docu/drama,  <span style={{ fontStyle: "italic" }}>My Heart Is No Longer An
                        Orphan</span>.
                    </div>
                    <br></br>
                    <div>
                      The film tells the story of two young poets who fall in
                      love at a poetry festival in Macedonia, in 1969 where they
                      spend three days that will mark them for the rest of their
                      lives. Separated by a series of events that will keep them
                      apart for the next fifty years, the poet, now 70-years old
                      finds the girl. The poems in the book reflect his search
                      and longing for something that he lost half a century ago.
                    </div>
                    <br></br>
                    <div >
                      It was the poet's wish that the English and French
                      translations be interpretations and not direct
                      translations. In his words, "it should be the privilege of
                      the readers to experience the verses mirroring their own
                      feelings."
                    </div>
                    <br></br>
                    <div>
                      The illustrations by Kathi Ha add a palpable feeling to
                      the words on the page allowing the reader to catch a
                      glimpse of the poet's dark and longing heart.
                    </div>
                    <br></br>
                    <div >Available on Amazon Books</div>
                  </div>

                </div>
              </section>
          
              <section className="mt-5 pb-5 margin-main" style={{ marginTop: "60px" }}>
                {/* <div className="row poem-heading mb-2">
                  <h1>Hear the Poems</h1>
                </div> */}


                <div className="" style={{ position: "relative" }}>
                  <img src={Poem} alt="Poem" className="img-fluid" />
                  <div className="between-overlay-sonce">

                  
           
      {/* {isVisibleEng && ( */}
                      <audio controls='controls' ref={serbianPoemRef} style={{visibility: isVisibleEng ? 'visible' : 'hidden' }}>
                        <source src={SerbianPoem} type="audio/wav" />
                      </audio>  
                      {/* )} */}
                      <img
        src={AudioButton} // The image that when clicked will toggle the audio controller
        alt="Toggle Audio"
        onClick={toggleVisibilityEng}
        style={{ cursor: 'pointer', width: '25px', height: '25px'}} // Example styling
      />
                  
                  </div>

                  <div className="between-overlay-soleil audio-mobile">
                    {/* <div className="col-2">
                     Soleil
                    </div> */}
            
         
            {/* {isVisibleSol && ( */}
                      <audio controls='controls' ref={frenchPoemRef}  style={{visibility: isVisibleSol ? 'visible' : 'hidden'}}>
                        <source src={FrenchPoem} type="audio/wav" />
                      </audio> 
                    {/* )} */}
                   
                      <img
        src={AudioButton} // The image that when clicked will toggle the audio controller
        alt="Toggle Audio"
        onClick={toggleVisibilitySol}
        style={{ cursor: 'pointer', width: '25px', height: '25px' }} // Example styling
      />
                 
                  </div>

                  <div className="between-overlay-sun audio-mobile">
                    {/* <div className="col-2">
                    Sun
                  </div> */}
   
                    <img
        src={AudioButton} // The image that when clicked will toggle the audio controller
        alt="Toggle Audio"
        onClick={toggleVisibilitySun}
        style={{ cursor: 'pointer', width: '25px', height: '25px' }} // Example styling
      />
           
                    {/* {isVisibleSun && ( */}
                      <audio controls='controls' ref={englishPoemRef} style={{visibility: isVisibleSun ? 'visible' : 'hidden'}}>
                        <source src={EnglishPoem} type="audio/wav" />
                      </audio> 

                        </div>


               

                </div>

              </section>
        {/* <div className="row m-0 p-0 pb-4 px-3 p-xl-5">
         
          <div className="col-12 col-md-11 ">
            <img src={Review} alt="Review" className="img-fluid" />
          </div>
        </div> */}
        <div className="row mt-5 mb-5 p-0 pb-4 margin-main">
          {/* <div className=""> */}
            <img src={Review} alt="Review" className="img-fluid mx-auto d-block" />
          {/* </div> */}
        </div>
        {isMRS && (
        
        <div>
   
             <FutureFilmRiceModal
       isOpen={isMRS}
       closeModal={() => setIsMRS(false)}
     />
        </div>
     )}
    </main>
  );
};

export default Between;
