import React, { useEffect } from "react";
import "./films.css";

import MagicSnowmanImg from "../../../assets/films/the_magic_snowman.jpg";
import Poster from "../../../assets/films/SnowmanPoster.jpg";
import Languages from "../../../assets/films/languages.png";
import ImdbIcon from "../../../assets/common/imdbna.png";

const MagicSnowman = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="main-margin">
      <div>
        {/* <section className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
               <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center" >
                  <img src={MagicSnowmanImg} alt="" className="img" />
                </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/aE3pq0ygwjo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section> */}
                <section style={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}>
  <div className="hnn-trailer">
    <div style={{ flex: "2" , display : "flex" }}>
      <img
        src={MagicSnowmanImg}
        alt="Magic Snowman Poster"
        style={{ width: "100%", height: "100%", borderRadius: "12px",  objectFit: "fill" }}
      />
    </div>
    <div className="hnn-iframe" style={{ flex: "3", width: "100%" }}>
      <div className="ratio ratio-16x9" style={{ width: "100%", height: "100%" }}>
        <iframe
          src="https://www.youtube.com/embed/aE3pq0ygwjo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  </div>
</section>
<div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_t_7_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{objectFit : "fill", maxHeight : "50px"}}/>
                </a>
                
              </div>
           
            </div>

        <section className="mb-5">
          <div>
          <div className="col-12 col-md-12 mt-12 mt-md-0 d-flex align-items-center" >
                  <img src={Languages} alt="" className="img" width={"100%"} />
              </div>
              <div style={{ width : "100%", textAlign : "center", paddingLeft : "20px", paddingRight : "20px"}}>
            <h3 style={{ fontWeight : "800"}}>  “PRACTICING LANGUAGES WITH SIR ROGER MOORE” - VICTORINE STUDIOS, NICE 1990</h3>  
            {/* <h3 style={{ fontWeight : "800", marginTop : "10px"}}> VICTORINE STUDIOS, NICE 1990</h3> */}
          </div>
          </div>

        </section>
        <section className="mt-4 mb-4">
     
            <div className="image-desc-flex" style={{ gap : "60px"}}>
              <div className="fw-30" >
       
                  <img src={Poster} alt="Magic Snowman poster" style={{ width : "100%"}} />
               
              
              </div>
              <div className="fw-70 orphan-desc" style={{ textAlign : "justify", display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
                <p className="">
                  The Magic Snowman was produced in 1988 by Pavlina Ltd. in a
                  co-production with FIT a production company based in
                  Yugoslavia. The film was dedicated to UNICEF which received a
                  portion of the producer's revenue. The film carries a powerful
                  message in the context of a wonderful storyline featuring the
                  character of Lumiukko, the magical snowman. Lumiukko travels
                  the world with the help of his friend and lifelong companion,
                  Gustella the wind, in order to help children by teaching them
                  valuable lessons about honesty, integrity, and determination.
                  All future magic snowman movies embrace and explicate such
                  themes.
                </p>
                <br></br>
                <p>
                  Over the past ten years, The Magic Snowman has aired on The
                  Disney Channel more than 38 times in children’s prime time
                  slots. It is estimated that twenty million children have seen
                  the film in the United States alone. Miramax Films has
                  worldwide distribution rights to the original film. The video
                  rights are with Artisan Entertainment and the film was
                  re-released for Christmas 1999 even though sell-through on the
                  film began in June 1995. Other major distributors who have
                  acquired the original film are The Sky Channel in the UK,
                  Italy's RAI Uno, and Spain's Television Española. The film has
                  been sold worldwide in over thirty international markets. The
                  Magic Snowman was a seasonal staple among children's
                  television programs for seventeen years.
                </p>
              </div>
            </div>
      
          </section>
        
      </div>
    </main>
  );
};

export default MagicSnowman;
