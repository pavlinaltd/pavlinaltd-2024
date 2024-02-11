import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/my-heart-is-no-longer-an-orphan.png";

const Orphan = () => {
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
              <div className="col-12 col-md-6">
                <h1 className="mb-5">My Heart is No Longer an Orphan</h1>
                <h2>Screenplay by</h2>
                <p className="mb-3 mb-lg-4">Pavlina Proevska</p>
                <h2>Director</h2>
                <p className="mb-3 mb-lg-4">Pavlina Proevska</p>
                <h2>Cinematographer</h2>
                <p className="mb-3 mb-lg-4">Dejan Dimeski</p>
                <h2>Choreographer</h2>
                <p className="mb-3 mb-lg-4">Gianni Santucci</p>
                <h2>Composer</h2>
                <p className="mb-3 mb-lg-4">Ben B. Goss</p>
                <h2>Producer</h2>
                <p className="mb-3 mb-lg-4">FilmsZaNas d.o.o.e.l.</p>
                <h2>Co-producers</h2>
                <p>Kaval Films d.o.o.e.l.</p>
                <p className="mb-3 mb-lg-4">Roundabout d.o.o.e.l.</p>
                <h2>Screenplay by</h2>
                <p className="mb-3 mb-lg-4">Pavlina Proevska</p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/q4R1JfTIOpQ"
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
              
              <div className="col-12 col-md-4 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex" id='myHeart'> 
                <img src={Poster} alt="" className="img-fluid rounded-4" />
              </div>


              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  In March of 1969, she was seventeen and he twenty years old,
                  when they met at a poetry read in a city in Macedonia, then
                  part of a country known as the jewel of the Balkans.
                </p>
                <p className="mb-3 mb-lg-4">
                  He was more of a poet than she was, always brooding and sad
                  even when he was happy. She was a bubbly tomboy who liked his
                  attention and was tickled by the nickname he gave her, Paola.
                  Salvatore Adamo's Paola Dolce Paola played on every radio
                  station in Europe and the thought that he could compare her to
                  the real princess amused her. He claimed his Paola was just as
                  pretty and as personable as the real Paola Margherita
                  Giuseppina Maria Antonia Consiglia. They had three days
                  together and he left the festival convinced that the other
                  half of his heart was now filled. She was molded by the sun,
                  he said, and she was the one.
                </p>



                <p className="mb-3 mb-lg-4">
                  That August, they would miss each other, at yet another poetry
                  festival, in the world famous city of Struga, in Macedonia.
                  She arrives two hours after he leaves to go back to his native
                  Montenegro. Shortly after, Paola leaves for the US, erasing
                  the memory of him. For the next fifty years, as if to punish
                  himself for his early departure, he would revisit often her
                  last letter in which she cries out, "Where are you?" The cry
                  has now become his quest, as he searched to find her, and
                  does, in 2019. The brooding young man is now a melancholy
                  seventy years old, and the tomboy, a strong-willed and
                  independent woman living on her own in New York City. Will
                  they recapture the sunrays of their youth? We only know half
                  the ending, as it is much too late for the land. But maybe not
                  for the distant rays of the magic hour to shine upon the two
                  of them once more.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Orphan;
