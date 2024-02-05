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
      <div className="container">
      

          <div  className="mb-5">
            <h1 id="heading">  "The creative minds play with the objects it loves."</h1> 
            <h2 className="float-end author">- Carl Gustav Jung</h2> 
          </div>
    

          {/* <div className = "row "> */}
            <section style={{marginLeft: "30px", marginRight : "30px"}}>
              <img className="headshot"
                  src={pavlina}
                  alt="Pavlina Proevska"
                 
                />
      
          
            <p id="about-career">
              Native of Macedonia,{" "}
              <span style={{fontWeight : "bold"}}>Pavlina Proevska</span> studied Public Relations in Paris and worked
in the news department at With the CBS News 1984' Summer Olympics Team as well
as in the field, for USA Cable Networks.
              <br></br>
              <br></br>
              The highlights of her tenure at With the CBS News 1984' Summer Olympics Team
was as part of the team covering the Regan-Gorbachev Summit in Geneva, in 1986.
For the USA Cable Network, she was part of the team working on the promotion of
the thriller Death Train, in Slovenia in 1993 where she was introduced to Irish
drinking by the star of the film, Pierce Brosnan.
              <br></br>
              <br></br>
              Ms. Proevska is currently working on the REDUX of{" "}
              <span style={{ fontStyle : "italic"}}>The Magic Snowman</span>{" "}
               for release
on DVD/Blu-Ray and VOD plaXorms in 2024. She is also in pre-production of a short
docu-drama, <span style={{ fontStyle : "italic"}}>My Heart Is No Longer an Orphan</span>
, and she will be directing it late this summer in Montenegro, Macedonia.
              <br></br>
              <br></br>
              She has recently completed two documentary films, 
              <span style={{ fontStyle : "italic"}}>The Promise of Perfume</span>, and the
biopic  <span style={{ fontStyle : "italic"}}>My American Pilgrimage</span>. The making of  <span style={{ fontStyle : "italic"}}>The Promise of Perfume</span> had taken
her to the Jungle of French Guayana, Bulgaria, France, Tunisia and Macedonia.
              <br></br>
              <br></br>
       
              She is especially proud of a special recognition she received recently as her second
feature film, Happy Hell Night was admitted for permanent curating, at {" "}
<span style={{ fontStyle : "italic"}}>The Archives
of Moving Images</span>{" "} of the United States <span style={{ fontStyle : "italic"}}>Libarary of Congress</span>.
              <br></br>
              <br></br>
              Ms. Proevska is active in the promotion of Macedonia's cultural heritage as the
founder and Executive Director of the Macedonian Arts Council. She is fluent in five
languages and lives and works in New York City.
            
            </p>
            </section>
          
   
          <hr></hr>
        <div className="row">
          <div className="mt-5">
            <h1 id="heading" >"Production - a combination of persistence and blind faith."</h1>  
          </div>
              <hr style={{ width : "70%", marginTop : "40px"}}></hr>
          <section className="mt-5" style={{ marginBottom : "60px"}}>
          <div className="about-company-section">
          <div className='carousel' style={{ textAlign: "center", width : "80%"}}>  
          <Carousel data-bs-theme="dark" >
            <Carousel.Item>
              <img
                src={cbsnews}
                alt="With the CBS News 1984' Summer Olympics Team"
              />
              <Carousel.Caption>
                <p>"With the CBS News 1984' Summer Olympics Team"</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={senator}
                alt="With Senator Alfonse D'Amato, at CBS News, 1986"
                
              />
              <Carousel.Caption>
                <p>"With Senator Alfonse D'Amato, at CBS News, 1986""With Senator Alfonse D'Amato, at CBS News, 1986"</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={maestro}
                alt="With Maestro Simon Trpchevski, 2001"    
                height="600px"  
              />
              <Carousel.Caption>
                <p>"With Maestro Simon Trpchevski, 2001"</p>
              </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                src={ellis}
                alt="With Ellis Island Medal of Honor Recipients, 2005"
              />
              <Carousel.Caption>
                <p>"With Ellis Island Medal of Honor Recipients, 2005"</p>
              </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                src={dubai}
                alt="At the Dubai Festival, 2009"   
              />
              <Carousel.Caption>
                <p>"At the Dubai Festival, 2009"</p>
              </Carousel.Caption>
            </Carousel.Item> 

            <Carousel.Item>
              <img
                src={afm}
                alt="American Film Market, 2015"
              />
              <Carousel.Caption>
                <p>"American Film Market, 2015"</p>
              </Carousel.Caption>
            </Carousel.Item> 

          </Carousel>
          
          </div>
          <div style={{ display : "flex", flexDirection : "column", justifyContent : "space-between", alignContent : "center", marginLeft : "20px", fontSize : "17px", textAlign :"justify", lineHeight : "1.2em"}}>
            <p>
              <strong style={{ fontWeight : "bold"}}>PAVLINA Ltd.</strong> is an independent production company engaged in the development and production of feature films and documentaries. It was incorporated in 1986 by Pavlina Proevska, President and General Partner. The co-producing partner of Pavlina Ltd., FilmsZaNas d.o.o.e.l. is based in Macedonia.
              </p>
              <br></br>
              <p>
              The first feature film produced by Pavlina Ltd. in 1987 ,
              <span style={{ fontStyle : "italic"}}>The Magic Snowman</span>, is a live action children's fairy tale starring Roger Moore as the voice of the snowman. The film's gross receipts to date are ten times the original low-budget cost and was in active distribution through Miramax/ Buena Vista International for twelve years.
              </p>
              <br></br>
              <p>
              The second feature produced in 1992 was the supernatural thriller{" "}
              <span style={{ fontStyle : "italic"}}>Happy Hell Night</span>, starring Darren McGavin with appearance by Jorja Fox and Sam Rockwell. The film was distributed worldwide by several international distributors and released on DVD by Anchor Bay Entertainment. More recently, the legendary Samuel Goldwyn Films acquired the rights of distribution for North America. The film negative is curated at the Moving Images Archives of the US Library of Congress.
              </p>
              <br></br>
              <p>
              To ensure a successful distribution life and minimize investment risks, the company focuses on development and production of perennial stories. In keeping with such business strategy, over the past ten years the company has financed the acquisition and development of several children's properties.
              </p>
              <br></br>
              <p>
              The company's strength is in the original content of the stories it develops and produces and while through its feature films it offers popular entertainment, the documentaries celebrate people whose lives have left an imprint on the human experience.
              
            </p>
          

          </div>
          </div>
          </section>


        </div>



      </div>


    </main>
  );
};

export default About;
