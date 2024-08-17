import React, { useEffect, useState } from "react";
import "./films.css";
import "./future.css";
import { useLocation } from 'react-router-dom';

import Keratza from "../../../assets/films/keraca-visuleva.webp";
import RMS from "../../../assets/films/R_M_Stilettos.jpg";
import SMR from "../../../assets/films/snowmanreturns.jpg";
import Modal from "react-bootstrap/Modal";


const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
  return (
    <Modal show={isOpen} onHide={closeModal} centered  dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Rice, Milk and Stilettos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="d-flex align-items-center modal-flex">
          <div
          className="modal-flex-desc"
            style={{width : "60%" }}
          >
           <p className="future-film-desc">
                      RICE...This short film explores the traumatic effects of
                      the Cultural Revolution on Lee Chen, who in 1951
                      unknowingly participated in mass murder. Chairman Mao's
                      decrees to kill off the birds in order to increase crop
                      yield is at first amusing to a little seven-year old girl
                      who uses pots and pans to scare off the birds to the point
                      that they wall dead to the ground, from the aimless
                      exhausting flutter in the air. In 1951 there were no
                      sparrows left in China, only mosquitoes that brought
                      malaria and death to millions of people. The film is both
                      a period and contemporary tale that shows the degrading
                      nature of fascism on the human spirit.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      MILK...It is the time of the goats when Marshal Tito
                      creates Yugoslavia, on the onset of World War II. It is a
                      country of a handful of intellectuals enamored with
                      communism, and millions of peasants whose meager existence
                      depends on the few farm animals they own, the most popular
                      of them, the goat. But the communist leaders of the
                      Eastern block, namely Stalin and Tito, need workers in the
                      newly formed cooperatives that can be indoctrinated to
                      become the new class. In 1949 a law is passed that calls
                      for the annihilation of the goats under the pretext that
                      the animals are destroying the forests. Those who don’t
                      kill the animals will serve jail time…
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      STILETOS...The Taliban prohibits women from wearing
                      high-heeled shoes because “they attract a man’s attention”
                      which is shameful, and a woman is stoned to death. Her
                      nine-year old daughter watches the men, including her own
                      father, kill her mother. Soon after, an international
                      lawyer rescues her from Afghanistan and helps her get
                      political asylum in the USA…
                    </p>
          </div>
          <div style={{ flex: "1", textAlign : "center" }}>
            <img src={RMS} alt="The Magic Snowman Returns" className="future-film-img" style={{ width : "80%"}} />
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};



const FutureFilmSnowModal = ({ isOpen, closeModal}) => {
  return (
    <Modal show={isOpen} onHide={closeModal} centered dialogClassName="modal-xl">
      <Modal.Header closeButton>
        <Modal.Title>The Magic Snowman Returns</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="d-flex align-items-center modal-flex">
          <div
            className="modal-flex-desc"
            style={{width : "30%"  }}
          >
           <p className="future-film-desc">
                      In a snow covered field somewhere in the world, Lumiukko,
                      the magic snowman, is witnessing spring. All around him
                      are the sounds and signs of the approaching season. His
                      friend Gustella, the Winter Wind, arrives to wake him. "He
                      is cutting it close," says Gustella, "he cannot be here
                      when Siroc, the Summer Wind, arrives." Away the two
                      friends fly... looking for another part of the world where
                      winter is in the air.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      A continent away in the quaint little town of Jensenville,
                      New England is the home of three inseparable friends:
                      Steven Fried and Kim and Tommy Wilson. In this part of the
                      country, Jensenville is famous for the annual Winter
                      Festival and a big ski jumping contest held at the start
                      of the school winter break. Unfortunately, this year the
                      town folks are having a hard time focusing on the Winter
                      Festival, preoccupied by the tricks of the recently
                      arrived Serena Queen who is soon to be married to Steven's
                      father, a local owner of a music store.
                    </p>
          </div>
          <div style={{ flex: "1", textAlign : "center" }}>
            <img src={SMR} alt="The Magic Snowman Returns" className="future-film-img" style={{ width : "80%"}} />
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};

const FutureFilmKeratzaModal = ({ isOpen, closeModal }) => {
  return (
    <Modal show={isOpen} onHide={closeModal} centered dialogClassName="modal-xl">
      <Modal.Header closeButton>
        <Modal.Title>Keratza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="d-flex align-items-center modal-flex">
          <div
            className="modal-flex-desc"
            style={{width : "44%" }}
          >
           <p className="future-film-desc">
                      ...It is 1995 and a truck filled with her paintings stops
                      at the Bulgarian-Macedonian Border. It is 2 am on a cold
                      October night...
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      Often referred as the Frieda Kahlo of the Balkans, Keratza
                      Visulcheva was born in 1910 in a village called Nesram, in
                      the Aegean part of Macedonia, today part of Greece.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      Her story begins as a three-year old when she flees the
                      terror of the Ottoman Turks and with her parents settles
                      in nearby Bulgaria where she will spend most of her adult
                      life.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      But while her travels take her all over Europe and her
                      work is recognized by the European artistic community, she
                      will never rest trying to keep the connection with her
                      homeland open. Through her paintings, during happy times,
                      and when in the midst of a depression.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      “The depression threatened to destroy me. I simply didn't
                      want to paint any more. I started cutting my paintings.
                      Fortunately, on one occasion, a doctor who was also an
                      amateur painter saw my paintings and he encouraged me. I
                      resumed my work. I swore that I will never again reach for
                      the paintings and that I would continue."
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      At the age of 85, Keratza Visulcheva bequeathed her entire
                      artistic opus to Macedonia.
                    </p>
          </div >
          <div style={{ flex: "1", textAlign: "center", display: "flex", justifyContent: "center" }}>
            <img src={Keratza} alt="The Magic Snowman Returns" className="future-film-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};



// import { Lightbox } from "react-modal-image";

const Future = () => {

  const [isSnow, setIsSnow] = useState(false);
  const [isKeratza, setIsKeratza] = useState(false);
  const [isMRS, setIsMRS] = useState(false);
  const location = useLocation();

  // const openModal = (imageSrc) => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <main className="film" id="borders-in-heaven">
      <div className="container p-0">
        <section
          style={{ width : "85%", margin: '0px auto' }}
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3 " >
            <div className="row p-0 pb-4 px-0 px-sm-3 p-xl-5 py-xl-3 mb-5">
              <div className="col-12 col-md-6" >
                <h1 style={{ overflow : "visible"}}>Borders in Heaven</h1>
              </div>
              <section className="container p-3 py-4 py-md-0 m-0">
                <div className="future-film-section-col">
     
                   
                      <iframe
                        src="https://www.youtube.com/embed/1HGMugATEMw"
                        title="YouTube video player"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{flex : 1, border: "none" }}
                      ></iframe>
                    
            


                  <div className="borders-desc">
                    <p className="future-film-desc">
                      <span style={{ fontWeight : "bold" }}> Borders in Heaven </span> is a fish-out-of-water romantic comedy
                      that takes place in a small village in Macedonia called
                      Heaven. The main protagonist, Donna Lee, is a native New
                      Yorker who is sent there to investigate an insurance
                      scheme perpetrated by the locals.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      The tranquil Macedonian countryside is a dramatic change
                      from Donna Lee's fast-paced life in New York. The medieval
                      village is a perfect setting for a clash of two very
                      different ways of life, and an ideal stage for surprises,
                      obstacles and emotional outbursts. Emotional borders and
                      even physical ones are shattered with the help of a
                      village patriarch, a loose-lipped mailman and a deaf and
                      hard of hearing goat herder. A US-educated village doctor
                      is the link between the two worlds and a catalyst for the
                      ripples in Donna Lee's heartbeat. Magical realism through
                      a few other local characters adds a Don Quixotesque
                      atmosphere to the film. The more realistic aspects of the
                      story are reminiscent of notable classics like <span style={
                        {fontStyle : "italic" }
                      }>Cinema
                      Paradiso, Local Hero </span> and <span style={
                        {fontStyle : "italic" }
                      }> Il Postino.</span>
                    </p>
                    {/* <br></br>
                    <p className="future-film-desc">In development</p> */}
                  </div>


                </div>
              </section>
              <hr className="future-separator" id="the-magic-snowman-returns"></hr>
              <section>
                <div className="col-12">
                  <h1 style={{ overflow : "visible"}}>The Magic Snowman Returns</h1>
                </div>
                <div className="future-film-section">
                  <div className="future-film-section-desc">
                    <p className="future-film-desc">
                      In a snow covered field somewhere in the world, Lumi ukko,
                      the magic snowman, is witnessing spring. All around him
                      are the sounds and signs of the approaching season. His
                      friend Gustella, the Winter Wind, arrives to wake him. "He
                      is cutting it close," says Gustella, "he cannot be here
                      when Siroc, the Summer Wind, arrives." Away the two
                      friends fly... looking for another part of the world where
                      winter is in the air.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      A continent away in the quaint little town of Jensenville,
                      New England is the home of three inseparable friends:
                      Steven Fried and Kim and Tommy Wilson. In this part of the
                      country, Jensenville is famous for the annual Winter
                      Festival and a big ski jumping contest held at the start
                      of the school winter break. Unfortunately, this year the
                      town folks are having a hard time focusing on the Winter
                      Festival, preoccupied by the tricks of the recently
                      arrived Serena Queen who is soon to be married to Steven's
                      father, a local owner of a music store.
                    </p>
                  </div>
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-end image-container">
                  <img
                      src={SMR}
                      alt="The Magic Snowman Returns"
                      className="future-film-img"
                      onClick={() => setIsSnow(true)}
                      style={{ cursor: "pointer", objectFit :"fill" }}
                    />
                  </div>
                </div>
              </section>


              <hr className="future-separator" id="keratza"/>
              <section>
                <div className="col-12">
                  <h1 style={{ fontStyle: "italic", overflow : "visible" }} >Keratza</h1>
                </div>
                <div className="future-film-section">
                  <div  className="future-film-section-desc">
                    <p className="future-film-desc">
                      ...It is 1995 and a truck filled with her paintings stops
                      at the Bulgarian-Macedonian Border. It is 2 am on a cold
                      October night...
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      Often referred as the Frieda Kahlo of the Balkans, Keratza
                      Visulcheva was born in 1910 in a village called Nesram, in
                      the Aegean part of Macedonia, today part of Greece.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      Her story begins as a three-year old when she flees the
                      terror of the Ottoman Turks and with her parents settles
                      in nearby Bulgaria where she will spend most of her adult
                      life.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      But while her travels take her all over Europe and her
                      work is recognized by the European artistic community, she
                      will never rest trying to keep the connection with her
                      homeland open. Through her paintings, during happy times,
                      and when in the midst of a depression.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      “The depression threatened to destroy me. I simply didn't
                      want to paint any more. I started cutting my paintings.
                      Fortunately, on one occasion, a doctor who was also an
                      amateur painter saw my paintings and he encouraged me. I
                      resumed my work. I swore that I will never again reach for
                      the paintings and that I would continue."
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      At the age of 85, Keratza Visulcheva bequeathed her entire
                      artistic opus to Macedonia.
                    </p>
                  </div>
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-end">
                    <img src={Keratza} alt="Keratza" className="future-film-img" 
                     onClick={() => setIsKeratza(true)}
                     style={{ cursor: "pointer", objectFit :"fill" }}
                    />
                  </div>
                </div>
              </section>

              <hr className="future-separator" id="rice"/>

              <section>
                <div className="col-12" >
                  <h1 style={{ overflow : "visible"}}>Rice, Milk and Stilettos</h1>
                </div>
                <div className="future-film-section">
                  <div className="future-film-section-desc">
                    <p className="future-film-desc">
                      RICE...This short film explores the traumatic effects of
                      the Cultural Revolution on Lee Chen, who in 1951
                      unknowingly participated in mass murder. Chairman Mao's
                      decrees to kill off the birds in order to increase crop
                      yield is at first amusing to a little seven-year old girl
                      who uses pots and pans to scare off the birds to the point
                      that they wall dead to the ground, from the aimless
                      exhausting flutter in the air. In 1951 there were no
                      sparrows left in China, only mosquitoes that brought
                      malaria and death to millions of people. The film is both
                      a period and contemporary tale that shows the degrading
                      nature of fascism on the human spirit.
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      MILK...It is the time of the goats when Marshal Tito
                      creates Yugoslavia, on the onset of World War II. It is a
                      country of a handful of intellectuals enamored with
                      communism, and millions of peasants whose meager existence
                      depends on the few farm animals they own, the most popular
                      of them, the goat. But the communist leaders of the
                      Eastern block, namely Stalin and Tito, need workers in the
                      newly formed cooperatives that can be indoctrinated to
                      become the new class. In 1949 a law is passed that calls
                      for the annihilation of the goats under the pretext that
                      the animals are destroying the forests. Those who don’t
                      kill the animals will serve jail time…
                    </p>
                    <br></br>
                    <p className="future-film-desc">
                      STILETOS...The Taliban prohibits women from wearing
                      high-heeled shoes because “they attract a man’s attention”
                      which is shameful, and a woman is stoned to death. Her
                      nine-year old daughter watches the men, including her own
                      father, kill her mother. Soon after, an international
                      lawyer rescues her from Afghanistan and helps her get
                      political asylum in the USA…
                    </p>
                  </div>
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-end">
                    <img
                      src={RMS}
                      alt="Rice, Milk and Stilettos"
                      className="future-film-img"
                      onClick={() => setIsMRS(true)}
                      style={{ cursor: "pointer",  objectFit :"fill" }}
                    />
                  </div>
                </div>
              </section>



            </div>
          </div>
        </section>
      </div>
      {/* Modal */}
      {isSnow && (
        
         <div>
    
              <FutureFilmSnowModal
        isOpen={isSnow}
        closeModal={() => setIsSnow(false)}
      />
         </div>
      )}

{isKeratza && (
        
        <div>
   
             <FutureFilmKeratzaModal
       isOpen={isKeratza}
       closeModal={() => setIsKeratza(false)}
     />
        </div>
     )}


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

export default Future;
