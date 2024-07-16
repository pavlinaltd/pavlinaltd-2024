import React, { useEffect, useState } from "react";
import "./films.css";

import MagicSnowmanImg from "../../../assets/films/the_magic_snowman.jpg";
import Poster from "../../../assets/films/SnowmanPoster.jpg";
// import Languages from "../../../assets/films/languages.png";
import ImdbIcon from "../../../assets/common/imdbna.png";
import LanguagesVideo from "../../../assets/films/learning.mp4";
import LanguagesThumbnail from "../../../assets/films/practice.png";
import Modal from "react-bootstrap/Modal";


const MagicSnowman = () => {
  useEffect(() => window.scroll(0, 0));
  const [isMRS, setIsMRS] = useState(false);

  const FutureFilmRiceModal = ({ isOpen, closeModal }) => {
    return (
      <Modal show={isOpen} onHide={closeModal} centered  dialogClassName="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="d-flex align-items-center modal-flex">
            <div style={{ flex: "1", textAlign : "center" }}>
              <img src={Poster} alt="The Magic Snowman Returns" className="future-film-img" style={{ width : "80%"}} />
            </div>
          </section>
        </Modal.Body>
      </Modal>
    );
  };


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

        {/* <section className="mb-5">
          <div>
          <div className="col-12 col-md-12 mt-12 mt-md-0 d-flex align-items-center" >
                  <img src={Languages} alt="" className="img" width={"100%"} />
              </div>
              <div style={{ width : "100%", textAlign : "center", paddingLeft : "20px", paddingRight : "20px"}}>
            <h3 style={{ fontWeight : "800"}}>  “PRACTICING LANGUAGES WITH SIR ROGER MOORE” - VICTORINE STUDIOS, NICE 1990</h3>  
          </div>
          </div>

        </section> */}
        {/* <section className="mt-4 mb-4">
     
            <div className="image-desc-flex" style={{ gap : "40px" }}>
              <div style={{ flex : 1,  padding : "20px", background : "#b9b3b3" }} >
       
                  <img src={Poster} alt="Magic Snowman poster" style={{ width : "100%"}} />
               
              
              </div>
              <div className="orphan-desc" style={{ flex : 1, textAlign : "justify", display : "flex", flexDirection : "column", justifyContent : "space-between",   fontSize : "1.1vw",
  lineHeight : "1.1em"}}>
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
              <div style={{ flex : 1, display : "flex", flexDirection : "column"}}>
       
              <video
                controls
                title="Local Video Player"
                allowFullScreen
              >
                <source src={LanguagesVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
  
              {/* <div>
            <h3 style={{ fontWeight : "800"}}>  “PRACTICING LANGUAGES WITH SIR ROGER MOORE” - VICTORINE STUDIOS, NICE 1990</h3>  
         
          </div> 
            </div>
            </div>
      
        </section> */}
        <section className="mt-4 mb-4 margin-main">
  <div className="image-desc-flex" style={{ display: 'flex', gap: '20px' }}>
    <div style={{ flex: 1.5, padding: '5px', background: '#b9b3b3' ,justifyContent: 'center'}}>
      <img src={Poster} alt="Magic Snowman poster" style={{ width: '100%', height: 'auto', alignContent : "center", cursor : "pointer"}}  onClick={() => setIsMRS(true)}/>
    </div>
    <div style={{ flex: 1, padding: '5px', display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
      <video
        controls
        style={{ width: '100%', height: 'auto' }} // This makes the video responsive
        title="PRACTICING LANGUAGES WITH SIR ROGER MOORE"
        poster={LanguagesThumbnail}
        allowFullScreen
      >
        <source src={LanguagesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Other contents */}
      <div style={{ marginTop : "20px", textAlign : "center"}}>
            <div className="snowman-text">  “CONQUERING LANGUAGES <br></br>WITH SIR ROGER MOORE” <br></br> VICTORINE STUDIOS – NICE 1990</div>  
         
          </div> 
    </div>
    <div className="snowman-details">
       <p className="">
                  <span style={{ fontWeight : "bold",  color : "#94211d", fontStyle : "italic"}}> The Magic Snowman</span> was produced in 1988 by Pavlina Ltd. in a co-production with FIT, a film production company based in the former Yugoslavia. Dedicated to the World’s children, the film was endorsed by UNICEF which received a portion of the film's revenues throughout its distribution life.  The film’s storyline featuring the character of the magical snowman Lumi Ukko, caries a powerful message for children. Lumi Ukko travels the world with the help of his friend and lifelong companion, Gustella the wind, and teaches children valuable lessons about honesty, integrity, and determination. He teaches them to believe in themselves.
                </p>
              <br></br>
                <p>
                Over a period of twelve years,  <span style={{ fontStyle : "italic"}}> The Magic Snowman </span> has aired on The Disney Channel more than 38 times in children’s prime time slots. It is estimated that about twenty million children have seen the film in the United States alone. Miramax Films had worldwide TV distribution rights while the video rights were acquired by Artisan Entertainment.  Among the major distributors who acquired the original film were  <span style={{ fontStyle : "italic"}}>The Sky Channel</span> in the UK, Italy's  <span style={{ fontStyle : "italic"}}>RAI Uno </span>, and Spain's  <span style={{ fontStyle : "italic"}}>Television Española.</span>  Sold worldwide in over thirty international markets, the film was a seasonal staple among children's television programs for seventeen years.
                </p>
    </div>
   
  </div>
</section>
{isMRS && (
        
        <div>
   
             <FutureFilmRiceModal
       isOpen={isMRS}
       closeModal={() => setIsMRS(false)}
     />
        </div>
     )}
      </div>
    </main>
  );
};

export default MagicSnowman;
