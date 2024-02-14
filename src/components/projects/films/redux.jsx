import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-magic-snowman-redux.png";
import FaceGallery from "../../../assets/films/posters/faceGallery.jpg";
import ImdbIcon from "../../../assets/common/imdb.png";

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
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600", background : "black" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "white"}}>
                Read more at  
                </div>
                <a href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_c_7_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img rounded-4 hoverable-img" style={{objectFit : "fill"}}/>
                </a>
                
              </div>
           
            </div>
           
        </div>
        <br>
        </br>
        <br></br>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light">
      
            <div style={{ display : "flex"}}>
              
              <div style={{ width : "75%"}}> 
                <img src={Poster} alt="" className="img-fluid rounded-4" style={{objectFit : "fill" }}/>
              </div>
              <div style={{ display : "flex" , flexDirection : "column", justifyContent : "space-between", paddingLeft : "20px", paddingRight : "20px" , fontSize : "17px"}}>
              <p >
                  THEN: Lumiukko, the magic snowman was the voice of Roger Moore
                  and adored by children worldwide. But he did not smile, wink
                  or frown. He was too lazy for that!
                </p>
                <p>
                  In the 2022 reduxed version of this perennial children's film,
                  Lumiukko will get visibly angry, sad, concerned, and often,
                  annoyed.
                </p>
                <p>
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


              <div>
                <img src={FaceGallery} alt="" className="img rounded-4" style={{objectFit : "fill" }}/>
              </div>
            </div>

        </div>





      </div>
    </main>
  );
};

export default Redux;
