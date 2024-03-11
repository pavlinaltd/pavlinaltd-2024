import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-promise-of-perfume.jpg";
import ImdbIcon from "../../../assets/common/imdbna.png";

const Perfume = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section className="">
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-12 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/wHQmgYQYo70"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ textAlign : "center" , width : "100%" , display : "flex", flexDirection : "column", alignContent : "center",  marginTop : "20px"}}>
              <div style={{ display : "flex" , justifyContent: "center", alignItems : "center", textAlign :"center",fontSize : "24px" , fontWeight : "600" , borderRadius : "12px" }}>
                <div style={{ marginRight :"10px", color : "black"}}>
                Visit
                </div>
                <a href="https://www.imdb.com/title/tt0368133/?ref_=nm_knf_t_1" target="_blank"  rel="noreferrer">
                <img src={ImdbIcon}  alt="" className="img hoverable-img" style={{objectFit : "fill", maxHeight : "50px"}}/>
                </a>
                
              </div>
           
            </div>

          <section className="" style={{ textAlign : "justify" }}>
            <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 px-xl-5 m-0 px-sm-0">
              <div className="col-12 col-md-4 row ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center" style={{ borderRadius : "12px"}}>
                <img
                  src={Poster}
                  alt="The Promise of Perfume"
                  style={{ objectFit : "fill", borderRadius : "12px"}}
                />
              </div>
              <div className="col-12 col-md-8 hnn-desc">
                <p className="mb-3 mb-lg-4">
                  The Promise of Perfume is a one-hour documentary shot in
                  Provence, Tunisia, Bulgaria, French Guyana, Paris and New
                  York. Featuring perfume industry notables, including Jacques
                  Polge of Chanel, the five-time FIFI award-winning bottle
                  designer, Marc Rosen, and the perfume critic of the New York
                  Times, Chandler Burr. This is a film about women's love affair
                  with perfume and the lasting power of scent. The tagline
                  reads: Every perfume a woman wears is composed of two
                  ingredients: scent and passion.
                </p>
                <p className="mb-3 mb-lg-4">
                  The film's story line incorporates numerous video clips and
                  perfume ad images that were made available to the producer by
                  Dior, Chanel, Elizabeth Arden, Coty, Victor and Rolf,
                  Givenchy, Guerlain, Gucci, Marc Jacobs, Thierry Mugler,
                  Lancome and much more.
                </p>
                <p className="mb-3 mb-lg-4">
                  Written, directed and produced by Pavlina Proevska under her
                  production banner, Pavlina Ltd. The film is intended for TV
                  distribution worldwide. The US distributor is PBS. La
                  Cinquieme in France and sales companies such as From the Fence
                  in the Netherlands, Beyond Distribution in the UK, RAI in
                  Italy and Content Films in Canada are interested in
                  distribution.
                </p>
                <p>
                  The Promise of Perfume brings the art and science of scent
                  closer to the world audience in a refreshing manner that
                  combines the "how to" of perfume with the poetry of this
                  liquid that has often been called the essence of illusion.
                </p>
              </div>
            </div>
          </section>
      
      </div>
    </main>
  );
};

export default Perfume;
