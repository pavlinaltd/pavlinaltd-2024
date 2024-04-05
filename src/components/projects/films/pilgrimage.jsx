import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/my-american-pilgrimage.jpg";
import MFA from "../../../assets/films/posters/mff.png";
import ImdbIcon from "../../../assets/common/imdbna.png";

const Pilgrimage = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="main-margin">
      <div className="">
         
          <section className="" >
          <div className="w-100 p-0" style={{ marginTop : "10px"}}>
            <div className="">
              {/* <div className="col-12 col-md-6">
                <h1 className="mb-4">My American Pilgrimage</h1>
              </div> */}
              <div className="col-12 col-md-12 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/aHsLfMjUwSg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ textAlign : "center", fontWeight : "bold" }}>
          Download and Streaming Coming Soon
          </div> */}
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
     
        <section className="p-3 py-4 py-md-0 px-md-5 m-0">
           <div className="pilgrim-sub">
            <div>
            <div style={{ textAlign : "center"}}>
              <div style={{ fontWeight : "bold" }}>
              CAST
              </div>
              <br></br>
              <div>
                <p>
                Dimitar Ginovski as young Stoyan
                </p>
             <p>
             Senator Stoyan Christowe
             </p>
              
              </div>
           </div>
           <br></br>

           <div style={{ textAlign : "center"}}>
              <div style={{ fontWeight : "bold" }}>
              PRODUCED - WRITTEN - DIRECTED
              </div>
              <div>
                <p>
                Pavlina Proevska
                </p>
           
              
              </div>
           </div>
            </div>
            <div>
            <div className="pilgrim-interview" style={{ textAlign : "center"}}>
              <div style={{ fontWeight : "bold" }}>
              INTERVIEWEES
              </div>
              <br></br>
              <div>
               <p>
                Former Senator Robert T. Gannet
               </p>
               <p>
               John Pollack
               </p>
               <p>
Prof. Andrew Rossos
               </p>
               <p>
               Norman Runnion
               </p>
               <p>
               Gane Todorovski
               </p>
              </div>
           </div>
            </div>
           </div>
           <br></br>
           <br></br>
           <div style={{ textAlign : "center"}}>
              <div style={{ fontWeight : "bold" }}>
              EXECUTIVE PRODUCER
              </div>
              <div>
              THE MACEDONIAN ARTS COUNCIL©
              
              </div>
           </div>
           <br></br>
           <br></br>
           <div style={{ textAlign : "center"}}>
              <div style={{ fontWeight : "bold" }}>
              WITH THE SUPPORT OF
              </div>

            <div style={{ display : "flex", justifyContent :"center", alignContent: "center"}}>
              <div style={{ alignSelf : "center"}}>
              The John M. Bissell Foundation
              <span> - </span>
              
               </div>
       
              <img
                  src={MFA}
                  alt="My American Pilgrimage"
                  className="img"
                  style={{ objectFit : "fill", width : "80px", marginLeft : "10px", marginRight : "10px", marginTop : "10px"}}
                />
              <div style={{ alignSelf : "center"}}>
               The Macedonian Film Fund
              </div>
              </div>
           
              {/* </div> */}
           </div>
        </section>
        <section className="mt-4 mb-4">
            <div className="image-desc-flex">
              <div className="fw-25" style={{ borderRadius : "12px"}}>
                <img
                  src={Poster}
                  alt="My American Pilgrimage"
                  className="img"
                  style={{ objectFit : "fill", borderRadius : "12px", width : "100%"}}
                />
              </div>
             
              <div className="pilgrim-desc fw-75">

              {/* <div className="orphan-desc" style={{ display :"flex", flexDirection : "column", justifyContent :"space-between" ,alignItems : "stretch" }}> */}
               
                <p className="mb-3 mb-lg-4">
                <spam style={{fontStyle : "italic"}}>Stoyan Christowe </spam>was a journalist, author and a politician. Born in Ottoman Macedonia in 1898, he immigrated to the United States in 1911 with a burning desire to be an American's American. He came of age on the Great Plains and went on to be a well-known journalist, critic and lover of the English language. In all, he wrote six books, numerous short stories and articles. He ended his career as a Vermont State Representative and then a Senator.
                </p>
                <p>
                Stoyan Christowe remained passionate about his adopted country throughout his life and is remembered as a staunch defender of the democratic way. His is a quintessential American immigrant story that will be remembered through an endowment fund in support of students of literature and political science, in his native Macedonia and the documentary film  <span style={{ fontStyle : "italic"}}>My American Pilgrimage</span>.
                </p>

              {/* </div> */}
              </div>
            </div>
          </section>
       
      </div>
    </main>
  );
};

export default Pilgrimage;
