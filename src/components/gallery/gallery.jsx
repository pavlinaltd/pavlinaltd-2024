import React, { useEffect, useState }from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";




//My Heart Is No Longer An Orphan
import MHINLAO1 from "../../assets/gallery/orphan1.webp";
import MHINLAO2 from "../../assets/gallery/orphan2.webp";
import MHINLAO3 from "../../assets/gallery/orphan3.webp";
import MHINLAO4 from "../../assets/gallery/orphan4.webp";
import MHINLAO5 from "../../assets/gallery/orphan5.webp";
import MHINLAO6 from "../../assets/gallery/orphan6.webp";

//The Promise Of Perfume
import TPOP1 from "../../assets/gallery/perfume1.webp";
import TPOP2 from "../../assets/gallery/perfume2.webp";
import TPOP3 from "../../assets/gallery/perfume3.webp";
import TPOP4 from "../../assets/gallery/perfume4.webp";
import TPOP5 from "../../assets/gallery/perfume5.webp";
import TPOP6 from "../../assets/gallery/perfume6.webp";

//My American Pilgrimage
import MAP1 from "../../assets/gallery/american1.webp";
import MAP2 from "../../assets/gallery/american2.webp";
import MAP3 from "../../assets/gallery/american3.webp";
import MAP4 from "../../assets/gallery/american4.webp";
import MAP5 from "../../assets/gallery/american5.webp";
import MAP6 from "../../assets/gallery/american6.webp";

//Happy Hell Night
import HHN1 from "../../assets/gallery/hell1.webp";
import HHN2 from "../../assets/gallery/hell2.webp";
import HHN3 from "../../assets/gallery/hell3.webp";
import HHN4 from "../../assets/gallery/hell4.webp";
import HHN5 from "../../assets/gallery/hell5.webp";
import HHN6 from "../../assets/gallery/hell6.webp";

//The Magic Snowman
import TMS1 from "../../assets/gallery/magic1.webp";
import TMS2 from "../../assets/gallery/magic2.webp";
import TMS3 from "../../assets/gallery/magic3.webp";
import TMS4 from "../../assets/gallery/magic4.webp";
import TMS5 from "../../assets/gallery/magic5.webp";
import TMS6 from "../../assets/gallery/magic6.jpg";
import { defer } from "react-router-dom";

const Gallery = () => {
  const orphanImages = [
    { src: MHINLAO1, alt: "My Heart Is No Longer An Orphan 1" },
    { src: MHINLAO2, alt: "My Heart Is No Longer An Orphan 2" },
    { src: MHINLAO3, alt: "My Heart Is No Longer An Orphan 3" },
    { src: MHINLAO4, alt: "My Heart Is No Longer An Orphan 4" },
    { src: MHINLAO5, alt: "My Heart Is No Longer An Orphan 5" },
    { src: MHINLAO6, alt: "My Heart Is No Longer An Orphan 6" },
  ];

  const perfumeImages = [
    { src: TPOP1 , alt: "The Promise Of Perfume" },
    { src: TPOP2 , alt: "The Promise Of Perfume" },
    { src: TPOP3 , alt: "The Promise Of Perfume" },
    { src: TPOP4 , alt: "The Promise Of Perfume" },
    { src: TPOP5 , alt: "The Promise Of Perfume" },
    { src: TPOP6 , alt: "The Promise Of Perfume" },
  ];

  const pilgrimageImages = [
    { src: MAP1, alt:"My American Pilgrimage" },
    { src: MAP2, alt:"My American Pilgrimage" },
    { src: MAP3, alt:"My American Pilgrimage" },
    { src: MAP4, alt:"My American Pilgrimage" },
    { src: MAP5, alt:"My American Pilgrimage" },
    { src: MAP6, alt:"My American Pilgrimage" },
  ];

  const hellNightImages = [
    { src:HHN1, alt:"Happy Hell Night" },
    { src:HHN2, alt:"Happy Hell Night" },
    { src:HHN3, alt:"Happy Hell Night" },
    { src:HHN4, alt:"Happy Hell Night" },
    { src:HHN5, alt:"Happy Hell Night" },
    { src:HHN6, alt:"Happy Hell Night" },
  ];
  const snowmanImages = [
    { src:TMS1, alt:"The Magic Snowman" },
    { src:TMS2, alt:"The Magic Snowman" },
    { src:TMS3, alt:"The Magic Snowman" },
    { src:TMS4, alt:"The Magic Snowman" },
    { src:TMS5, alt:"The Magic Snowman" },
    { src:TMS6, alt:"The Magic Snowman" },
  ]
  const [imageNumber, setImageNumber]= useState(0);
  const [openModal, setOpenModel] = useState(false);
  const [activeTab, setActiveTab] = useState('orphan');
  

  const handleOpenModal = (index) => {
    setImageNumber(index);
    setOpenModel(true);

  }
  const handleCloseModal = () =>{
    setOpenModel(false)

  }

  const prevSlide = () =>{
    imageNumber === 0 ? setImageNumber(orphanImages.length - 1): setImageNumber( imageNumber - 1);

  }

  const nextSlide = () =>{
    imageNumber + 1 === orphanImages.length ? setImageNumber(0):setImageNumber(imageNumber + 1);

  }
 
  const getGalleryImages = () => {
    switch (activeTab) {
      case 'orphan':
        return orphanImages;
      case 'perfume':
        return perfumeImages;
      case'pilgrimage':
       return pilgrimageImages;
      case 'hellNight':
        return hellNightImages;
      case 'snowman':
        return snowmanImages;
      default:
        return [];
    }
  }

  const currentGallery = getGalleryImages();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    onSwipedDown: handleCloseModal,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

 
   
  return(
    <div className="the-gallery">
    
      <div className="tabs">
        <button onClick={() => setActiveTab('orphan')}>My Heart Is No Longer An Orphan</button>
        <button onClick={() => setActiveTab('perfume')}>The Promise Of Perfume</button>
        <button onClick={() => setActiveTab('pilgrimage')}>My American Pilgrimage</button>
        <button onClick={() => setActiveTab('hellNight')}>Happy Hell Night</button>
        <button onClick={() => setActiveTab('snowman')}>The Magic Snowman</button>
      </div>
    <div className="gallery-container">
      {openModal && 
        <div className={`sliderWrap ${activeTab}`} {...swipeHandlers}>
          <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide}/>
          <div className="fullScreenImage">
            <img src={currentGallery[imageNumber].src} alt={currentGallery[imageNumber].alt}/>
          </div>
        </div>
      }
      <h1 className="movieTitle" >{activeTab === 'orphan' ? "My Heart Is No Longer An Orphan" :
             activeTab === 'perfume' ? "The Promise Of Perfume" :
             activeTab === 'pilgrimage' ? "My American Pilgrimage" :
             activeTab === 'hellNight' ? "Happy Hell Night" : 
             "The Magic Snowman"}</h1>
      <div className="galleryWrap">
        {currentGallery.map((image, index) => (
          <div key={index} className="gallery-item" onClick={ () => handleOpenModal(index)}>
            <img src={image.src} alt={image.alt}  />
          </div>
        ))}
      </div>
    </div>  
    
    </div> 
  );

 }



export default Gallery