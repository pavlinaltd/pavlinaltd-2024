import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/my-heart-is-no-longer-an-orphan.png";
import ImdbIcon from "../../../assets/common/imdbna.png";

const Orphan = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="main-margin">
      <div style={{ marginBottom : "60px"}}>
        {/* <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0"
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
          
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

        </section> */}
           <div style={{ display : "flex" , flexDirection :"column", alignItems : "center"}}>
            <div style={{ width : "100%"}}>
            <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/q4R1JfTIOpQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                   
                 
                </div>
           
                
          
              
            </div>
            <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt0093473/?ref_=nm_flmg_c_7_prd" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{ objectFit : "fill", maxHeight : "50px", maxWidth: "100px"}}/>
                </a>
                
              </div>
           
            </div>
           
        </div>
        <br></br>
        <br></br>

          <section className="margin-main">
            <div className="orphan-info" style={{ gap : "40px"}}>
              
              <div className="fw-35">  
                <img src={Poster} alt="" className="img-fluid rounded-4" style={{ height : "100%"}} />
              </div>


              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5 orphan-desc fw-60" style={{  lineHeight : "1.2em", display :"flex", flexDirection : "column", justifyContent :"space-between", textAlign : "justify"}}>
                <p >
                  In March of 1969, she was seventeen and he twenty years old,
                  when they met at a poetry read in a city in Macedonia, then
                  part of a country known as the jewel of the Balkans.
                </p>
                <br></br>
                <p>
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

                <br></br>

                <p>
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
    </main>
  );
};

export default Orphan;
