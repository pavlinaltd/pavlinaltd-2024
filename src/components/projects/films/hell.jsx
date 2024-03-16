import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/happy-hell-night.png";
import Reel from "../../../assets/films/hhnreel.jpg";
import header from "../../../assets/films/hhnposter.webp";
import ImdbIcon from "../../../assets/common/imdbna.png";
const Hell = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main>
       <div className="container-fluid">
        <section id="header-container" className="row p-0">
          <div className="col-12 p-0 m-0">
            <img src={header} alt="Placeholder" className="hnn-banner" />
          </div>
        </section>
      </div>
      <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt0236283/?ref_=nm_knf_t_4" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{objectFit : "fill", maxHeight : "50px"}}/>
                </a>
                
              </div>
           
            </div>
        {/* <img src={header} alt="Happy Hell Night" style={{ width : "100%", height : "50%"}} /> */}
      <div className="main-margin">
    
        <section className="mt-3" >
          <div >
            <div className="hnn-poster">

              {/* <div style={{ display : "flex", flexDirection : "column", width : "64%", textAlign : "center" }}>
             
              <img
                  src={Reel}
                  alt="Happy Hell Night"
                  width={"100%"}
                  style={{borderRadius : "12px"}}
                />
              </div> */}
             
              <div className="hnn-img">
              <img
                  src={Poster}
                  alt="Happy Hell Night"
          
                  style={{borderRadius : "12px", width : "100%", height : "100%"}}
                />
              </div>
              <div className="hnn-desc">
                <p >
                  Twenty-five years ago at Winfield College, psycho-priest
                  Zachary Malius murdered seven frat boys.
                </p>
                <br></br>
                <p>
                  Malius is waiting, secretly locked in Winfield Insane Asylum.
                  Now, he's just a myth; the local boogie man, the sick joke
                  used to scare children. Malius is not afraid to die; living
                  has cured him of that. Sonny Collins, a star freshman student
                  at Winfield College has nerves of steel and a taste for the
                  heroics. He faces the ultimate Phi Delta Kappa hazing:
                  photograph the mythical, monstrous Malius.
                </p>
                <br></br>
                <p>
                  Harry Collins, Sonny's brother, is already a Phi Delta Kappa.
                  In a jealous rage and caught in a love triangle with Sonny's
                  girl, Harry would like to even the score. He wants to scare
                  his brother.
                </p>
                <br></br>
                <p >
                  But when Sonny finds Malius something goes wrong, Malius
                  escapes. The horrors of his rampage, the mutilation of the Phi
                  Delta Kappa brothers is recreated. But Malius is more than a
                  psychotic killer, he is the devil's henchman brought back from
                  the dead by Sonny and his father, Henry Collins (played by
                  Darren Mc Gavin).
                </p>
                <br></br>
                <p>
                  Henry Collins tells his sons the truth; he sold his soul. He
                  must prepare to help them outlive him.
                </p>
              </div>
           
             
            </div>
          </div>
        </section>
        <section style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}>
  <div className="hnn-trailer">
    <div style={{ flex: "2" , display : "flex" }}>
      <img
        src={Reel}
        alt="Happy Hell Night"
        style={{ width: "100%", height: "100%", borderRadius: "12px",  objectFit: "fill" }}
      />
    </div>
    <div className="hnn-iframe" style={{ flex: "3", width: "100%" }}>
      <div className="ratio ratio-16x9" style={{ width: "100%", height: "100%" }}>
        <iframe
          src="https://www.youtube.com/embed/k_X7EnLEjNM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  </div>
</section>
       
      </div>
    </main>
  );
};

export default Hell;
