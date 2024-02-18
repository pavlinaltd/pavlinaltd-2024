import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-magic-snowman-redux.png";
import FaceGallery from "../../../assets/films/posters/faceGallery.jpg";
import ImdbIcon from "../../../assets/common/imdbna.png";

const Redux = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container">
        <div style={{ display : "flex" , flexDirection :"column", alignItems : "center"}}>
            <div style={{ width : "100%"}}>
            <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/hUMfTop4K-g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                   
                 
                </div>
           
                
          
              
            </div>
            <div style={{ textAlign : "center" , width : "40%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_c_7_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{objectFit : "fill", height : "50px",  maxWidth: "100px"}}/>
                </a>
                
              </div>
           
            </div>
           
        </div>
        <br>
        </br>
        <br></br>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light">
      
            <div className="redux-info">
              <div className="redux-poster" > 
                <img src={Poster} alt="" className="img-fluid rounded-4"  style={{objectFit : "fill" }}/>
              </div>
              <div className="redux-desc">
              <p >
              THEN: In 1989 Sir Roger Moore lent the voice to the magic snowman Lummi Ukko, and for the next fifteen years he was adored by children worldwide. But he did not smile, wink or frown then. Lumi Ukko was too lazy for that!
                </p>
                <br></br>
                <p>
                In the 2024 REDUX version of this perennial children's film, with the wonderful possibilities CGI offers, Lumi Ukko will get visibly angry, sad, concerned, and often, annoyed.
                </p>
                <br></br>
                <p>
                With his myriad of facial emotions, he will engage the children more than ever before and ultimately teaches them to believe in themselves and the choices they have to make.
                </p>
                <br></br>
                <p>
                A fresh new sound mix and a brand new score, the re-edited version of this evergreen staple will give today’s children a fresh look at this film their parents grew up with and loved.
            </p>
              </div>


              <div >
                <img src={FaceGallery} alt=""  className="img rounded-4" style={{objectFit : "fill", width :"100%" }}/>
              </div>
            </div>

        </div>





      </div>
    </main>
  );
};

export default Redux;
