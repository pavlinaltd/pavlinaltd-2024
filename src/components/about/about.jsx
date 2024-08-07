import React, { useEffect } from "react";
import "./about.css";

// import CarouselItem from "./carousel";

import ellis from "../../assets/bio/ellis.jpg";
import cbsnews from "../../assets/bio/cbsnews.jpg";
import senator from "../../assets/bio/senator.jpg";
import dubai from "../../assets/bio/dubai.jpg";
import maestro from "../../assets/bio/maestro.jpg";
import afm from "../../assets/bio/afm.jpg";
import pavlina from "../../assets/bio/pavlina6.jpg";
import Carousel from 'react-bootstrap/Carousel';





const About = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main id='about-us'>
      <div className="container" >
    
          <div  className="mb-5">
            <h1 id="heading">  "The creative minds play with the objects it loves."</h1> 
            <h2 className="float-end author">- Carl Gustav Jung</h2> 
          </div>
    


            <section className="pavlina-section">
              <div className="pavlina-about" >
                <div className="headshot">
                  <img src={pavlina} alt="Pavlina Proevska"/>
                </div>
              <div className="pavlina-desc">
            <p>Native of Macedonia,{" "}<span style={{fontWeight : "bold"}}>Pavlina Proevska</span> studied public relations in Paris and worked
             in the weekend news department at CBS News as well as in the field, for the USA Cable Networks.</p>
            <br/> 
            <p>The highlights of her tenure at CBS News include coverage of the 1984' Summer Olympics Games in Los Angeles, the Winter Olympics Games in Sarajevo,
               and the Regan-Gorbachev Summit in Geneva, in 1986. In 1993, for the USA Cable Network, she worked on the promotion of the thriller 
               <span style={{fontStyle : "italic"}}> Death Train</span>, in Slovenia, where she was introduced to Irish drinking by the star of the film, Pierce Brosnan.</p>
            <br/> 
            <p>Ms. Proevska is currently working on the REDUX of <span style={{fontStyle : "italic"}}>The Magic Snowman</span>
             for release on DVD/Blu-Ray and digital platforms at end of 2024. She is also in pre-production of <span style={{fontStyle : "italic"}}>
              My Heart Is No Longer An Orphan,</span> a short docu-drama scheduled for shooting in several of  the former Yugoslav republics in late 2024 and spring of 2025.</p>
            <br/>
            <p>She has recently completed two documentary films, <span style={{fontStyle : "italic"}}>The Promise of Perfume</span> and the biopic <span style={{fontStyle : "italic"}}>My American Pilgrimage.</span> The making of <span style={{fontStyle : "italic"}}>The Promise of Perfume</span>
            had taken her to the Jungle of French Guyana, Bulgaria, France, Tunisia and Macedonia.</p>
            <br/>
            <p>She is especially proud of a special recognition she received recently as the second feature she produced in 1993, <span style={{fontStyle : "italic"}}>Happy Hell Night,</span> 
            was admitted for permanent curating at  <span style={{fontStyle : "italic"}}> The Archives of Moving Images</span> of the UnitedStates <span style={{fontStyle : "italic"}}>Library of Congress</span>.</p>
            <br/>
            <p>Ms. Proevska is active in the promotion of Macedonia's cultural heritage as the founder and executive director of the Macedonian Arts Council. 
              She is fluent in five languages and lives in New York City.</p>
            </div>
            </div>
            </section>
          
   
          <hr style={{ marginTop : "50px"}}/>

          <div className="mt-5">
            <h1 id="heading" >"Production - a combination of persistence and blind faith."</h1>  
          </div>
         
              <hr style={{ width : "70%", marginTop : "40px"}}></hr>

          <section className="pavlina-section-2">
          <div className="carousel-aboutus">
        
            <div className="carousel extras">  
            
              <Carousel  data-bs-theme="dark" >
{/*  */}
                <Carousel.Item>
                  <img src={cbsnews} alt="With the CBS News 1984' Summer Olympics Team" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"With the CBS News 1984' Summer Olympics Team"</p>
                  </Carousel.Caption>
                </Carousel.Item>
{/*  */}
                <Carousel.Item>
                  <img src={senator} alt="With Senator Alfonse D'Amato, at CBS News, 1986" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"With Senator Alfonse D'Amato, at CBS News, 1986""With Senator Alfonse D'Amato, at CBS News, 1986"</p>
                  </Carousel.Caption>
                </Carousel.Item>
{/*  */}
                <Carousel.Item>
                  <img src={maestro} alt="With Maestro Simon Trpchevski, 2001" height="600px" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"With Maestro Simon Trpchevski, 2001"</p>
                  </Carousel.Caption>
                </Carousel.Item> 
{/*  */}
                <Carousel.Item>
                  <img src={ellis} alt="With Ellis Island Medal of Honor Recipients, 2005" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"With Ellis Island Medal of Honor Recipients, 2005"</p>
                  </Carousel.Caption>
                </Carousel.Item> 
{/*  */}

                <Carousel.Item>
                  <img src={dubai} alt="At the Dubai Festival, 2009" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"At the Dubai Festival, 2009"</p>
                  </Carousel.Caption>
                </Carousel.Item> 
{/*  */}
                <Carousel.Item>
                  <img src={afm} alt="American Film Market, 2015" className="carouselImg"/>
                  <Carousel.Caption>
                    <p>"American Film Market, 2015"</p>
                  </Carousel.Caption>
                </Carousel.Item> 
          </Carousel>
          
          </div>
          <div className="production-desc">
            <p>
              <strong style={{ fontWeight : "bold"}}>PAVLINA Ltd.</strong> is an independent film production company engaged in the development and production of feature films and documentaries. It was incorporated in 1986 by Pavlina Proevska, President and General Partner. The co-producing partner of Pavlina Ltd., FilmsZaNas d.o.o.e.l. is based in Macedonia.
              </p>
              <br></br>
              <p>
              The first feature film produced by Pavlina Ltd., <span style={{fontStyle : "italic"}}>The Magic Snowman </span>, is a live action children's fairy tale starring Sir Roger Moore as the voice of the magic snowman. In active distribution through Miramax/Buena Vista International for twelve years,  the film's gross receipts to date are ten times its original production cost.
              </p>
              <br></br>
              <p>
              The second feature produced in 1992 was the supernatural thriller <span style={{fontStyle : "italic"}}>Happy Hell Night,</span> starring Darren McGavin with appearance by Jorja  Fox and Sam Rockwell. Distributed worldwide by several international distributors, it was released on DVD by Anchor Bay Entertainment. More recently, the legendary Samuel Goldwyn Films acquired digital distribution for North America. The film negative is curated at <span style={{fontStyle : "italic"}}>The Archives of Moving Images</span> of the US Library of Congress.
              </p>
              <br></br>
              <p>
              The company's strength is in the original content it develops and produces and while through its feature films it offers popular entertainment, the documentaries celebrate people whose lives have left an imprint on the human experience.
              </p>
              {/* <br></br>
              <p>
              The company's strength is in the original content of the stories it develops and produces and while through its feature films it offers popular entertainment, the documentaries celebrate people whose lives have left an imprint on the human experience.
              
            </p> */}
          
          </div>
          </div>
          
          </section>


    



      </div>


    </main>
  );
};

export default About;
