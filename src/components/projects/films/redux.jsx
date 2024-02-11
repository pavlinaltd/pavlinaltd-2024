import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-magic-snowman-redux.png";
import FaceGallery from "../../../assets/films/posters/faceGallery.jpg";
const Redux = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container">
        <div className="row">
          <div className = 'col-xs-12 col-lg-6'>
            <h1 className="mb-2">The Magic Snowman REDUX</h1>
            <p className="mb-3">
                  THEN: Lumiukko, the magic snowman was the voice of Roger Moore
                  and adored by children worldwide. But he did not smile, wink
                  or frown. He was too lazy for that!
                </p>
                <p className="mb-3 ">
                  In the 2022 reduxed version of this perennial children's film,
                  Lumiukko will get visibly angry, sad, concerned, and often,
                  annoyed.
                </p>
                <p className="mb-3 ">
                  With his myriad of emotions, he will engage the children more
                  than ever before and ultimately teaches them to believe in
                  themselves and the choices they have to make.
                </p>
                <p>
                  Through the wonderful possibilities offered by CGI and by
                  adding a fresh new score and a sound mix, the re-edited
                  version of this evergreen staple will give the new generation
                  of children a fresh look at a film their parents grew up with.
            </p>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className="">
            <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/hUMfTop4K-g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                   
                 
                </div>
            </div>
          </div>

        </div>
        <br>
        </br>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light mt-5">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 px-xl-5 m-0">
              
              <div className="col-12 col-md-4 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex" id='myHeart'> 
                <img src={Poster} alt="" className="img-fluid rounded-4" />
              </div>


              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
              <img src={FaceGallery} alt="" className="img rounded-4" />
              </div>
            </div>
          </section>
        </div>





      </div>
    </main>
  );
};

export default Redux;
