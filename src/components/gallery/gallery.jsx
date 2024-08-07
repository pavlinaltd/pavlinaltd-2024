import React, { useEffect, useState }from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons"




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
import TMS6 from "../../assets/gallery/magic6.jpeg";
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

 
   
  return(
    <div>
    
      <div className="tabs">
        <button onClick={() => setActiveTab('orphan')}>My Heart Is No Longer An Orphan</button>
        <button onClick={() => setActiveTab('perfume')}>The Promise Of Perfume</button>
        <button onClick={() => setActiveTab('pilgrimage')}>My American Pilgrimage</button>
        <button onClick={() => setActiveTab('hellNight')}>Happy Hell Night</button>
        <button onClick={() => setActiveTab('snowman')}>The Magic Snowman</button>
      </div>
    <div className="gallery-container">
      {
        openModal && 
        <div className={`sliderWrap ${activeTab}`}>
          <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide}/>
          <div className="fullScreenImage">
            <img src={currentGallery[imageNumber].src} alt={currentGallery[imageNumber].alt}/>

          </div>
        </div>
      }
      <h1 className="movieTitle">{activeTab === 'orphan' ? "My Heart Is No Longer An Orphan Gallery" :
             activeTab === 'perfume' ? "The Promise Of Perfume" :
             activeTab === 'pilgrimage' ? "My American Pilgrimage" :
             activeTab === 'hellNight' ? "Happy Hell Night" : 
             "The Magic Snowman"}</h1>
      <div className="galleryWrap">
        {currentGallery.map((image, index) => (
          <div key={index} className="gallery-item" onClick={ () => handleOpenModal(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>  
    
    </div> 
  );

 }

// const Gallery = () => {
//   useEffect(() => window.scroll(0, 0));

//   return (
//     <main id="gallery" className="main-margin">
//       <section className="">

//         <div className="py-4">
//           <h2 className=" mb-2">My Heart Is No Longer An Orphan</h2>
//           <div
//             className="row m-0 px-lg-0"
//             data-bs-toggle="modal"
//             data-bs-target="#GalleryModal"
//           >
//             <GalleryItem
//               image={MHINLAO1}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 pe-1 pe-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="0"
//             />
//             <GalleryItem
//               image={MHINLAO2}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 ps-1 px-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="1"
//             />
//             <GalleryItem
//               image={MHINLAO3}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 pe-1 pe-lg-0 pt-lg-1 ps-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="2"
//             />
//             <GalleryItem
//               image={MHINLAO4}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 ps-1 ps-lg-0 pb-lg-1 pe-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="3"
//             />
//             <GalleryItem
//               image={MHINLAO5}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 pe-1 px-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="4"
//             />
//             <GalleryItem
//               image={MHINLAO6}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 ps-1 ps-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="5"
//             />
//           </div>
//         </div>
//         <div className="py-4">
//           <h2 className=" mb-2">The Promise Of Perfume</h2>
//           <div
//             className="row m-0 px-lg-0"
//             data-bs-toggle="modal"
//             data-bs-target="#GalleryModal"
//           >
//             <GalleryItem
//               image={TPOP1}
//               alt="The Promise Of Perfume"
//               layout="py-1 pe-1 pe-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="6"
//             />
//             <GalleryItem
//               image={TPOP2}
//               alt="The Promise Of Perfume"
//               layout="py-1 ps-1 px-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="7"
//             />
//             <GalleryItem
//               image={TPOP3}
//               alt="The Promise Of Perfume"
//               layout="py-1 pe-1 pe-lg-0 pt-lg-1 ps-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="8"
//             />
//             <GalleryItem
//               image={TPOP4}
//               alt="The Promise Of Perfume"
//               layout="py-1 ps-1 ps-lg-0 pb-lg-1 pe-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="9"
//             />
//             <GalleryItem
//               image={TPOP5}
//               alt="The Promise Of Perfume"
//               layout="py-1 pe-1 px-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="10"
//             />
//             <GalleryItem
//               image={TPOP6}
//               alt="My Heart Is No Longer An Orphan"
//               layout="py-1 ps-1 ps-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="11"
//             />
//           </div>
//         </div>
//         <div className="py-4">
//           <h2 className=" mb-2">My American Pilgrimage</h2>
//           <div
//             className="row"
//             data-bs-toggle="modal"
//             data-bs-target="#GalleryModal"
//           >
//             <GalleryItem
//               image={MAP1}
//               alt="My American Pilgrimage"
//               layout="py-1 pe-1 pe-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="12"
//             />
//             <GalleryItem
//               image={MAP2}
//               alt="My American Pilgrimage"
//               layout="py-1 ps-1 px-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="13"
//             />
//             <GalleryItem
//               image={MAP3}
//               alt="My American Pilgrimage"
//               layout="py-1 pe-1 pe-lg-0 pt-lg-1 ps-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="14"
//             />
//             <GalleryItem
//               image={MAP4}
//               alt="My American Pilgrimage"
//               layout="py-1 ps-1 ps-lg-0 pb-lg-1 pe-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="15"
//             />
//             <GalleryItem
//               image={MAP5}
//               alt="My American Pilgrimage"
//               layout="py-1 pe-1 px-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="16"
//             />
//             <GalleryItem
//               image={MAP6}
//               alt="My American Pilgrimage"
//               layout="py-1 ps-1 ps-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="17"
//             />
//           </div>
//         </div>
//         <div className="py-4">
//           <h2 className=" mb-2">Happy Hell Night</h2>
//           <div
//             className="row m-0 px-lg-0"
//             data-bs-toggle="modal"
//             data-bs-target="#GalleryModal"
//           >
//             <GalleryItem
//               image={HHN1}
//               alt="Happy Hell Night"
//               layout="py-1 pe-1 pe-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="18"
//             />
//             <GalleryItem
//               image={HHN2}
//               alt="Happy Hell Night"
//               layout="py-1 ps-1 px-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="19"
//             />
//             <GalleryItem
//               image={HHN3}
//               alt="Happy Hell Night"
//               layout="py-1 pe-1 pe-lg-0 pt-lg-1 ps-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="20"
//             />
//             <GalleryItem
//               image={HHN4}
//               alt="Happy Hell Night"
//               layout="py-1 ps-1 ps-lg-0 pb-lg-1 pe-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="21"
//             />
//             <GalleryItem
//               image={HHN5}
//               alt="Happy Hell Night"
//               layout="py-1 pe-1 px-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="22"
//             />
//             <GalleryItem
//               image={HHN6}
//               alt="Happy Hell Night"
//               layout="py-1 ps-1 ps-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="23"
//             />
//           </div>
//         </div>
//         <div className="py-4">
//           <h2 className=" mb-2">The Magic Snowman</h2>
//           <div
//             className="row m-0 px-lg-0"
//             data-bs-toggle="modal"
//             data-bs-target="#GalleryModal"
//           >
//             <GalleryItem
//               image={TMS1}
//               alt="The Magic Snowman"
//               layout="py-1 pe-1 pe-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="24"
//             />
//             <GalleryItem
//               image={TMS2}
//               alt="The Magic Snowman"
//               layout="py-1 ps-1 px-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="25"
//             />
//             <GalleryItem
//               image={TMS3}
//               alt="The Magic Snowman"
//               layout="py-1 pe-1 pe-lg-0 pt-lg-1 ps-lg-2 pb-lg-2"
//               target="#indicators"
//               slide="26"
//             />
//             <GalleryItem
//               image={TMS4}
//               alt="The Magic Snowman"
//               layout="py-1 ps-1 ps-lg-0 pb-lg-1 pe-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="27"
//             />
//             <GalleryItem
//               image={TMS5}
//               alt="The Magic Snowman"
//               layout="py-1 pe-1 px-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="28"
//             />
//             <GalleryItem
//               image={TMS6}
//               alt="The Magic Snowman"
//               layout="py-1 ps-1 ps-lg-2 pt-lg-2"
//               target="#indicators"
//               slide="29"
//             />
//           </div>
//         </div>
//       </section>
//       <div
//         className="modal fade"
//         id="GalleryModal"
//         role="dialog"
//         tabIndex="-1"
//         aria-hidden="false"
//       >
//         <div
//           className="modal-dialog modal-dialog-centered modal-lg"
//           role="document"
//         >
//           <div className="modal-content">
//             <button
//               type="button"
//               data-bs-toggle="modal"
//               data-bs-target="#GalleryModal"
//               className="btn-close"
//               aria-label="Close"
//               style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1050
//                 }}

//             ></button>
//             <div
//               id="indicators"
//               className="carousel slide"
//               data-bs-interval="false"
//               style={{ width : "100%" , height : "100%" , marginLeft : "0px"}}
//             >
//               <div className="carousel-inner">
//                 <CarouselItem
//                   image={MHINLAO1}
//                   alt="My Heart Is No Longer An Orphan"
//                   active="active"
//                 />
//                 <CarouselItem
//                   image={MHINLAO2}
//                   alt="My Heart Is No Longer An Orphan"
//                 />
//                 <CarouselItem
//                   image={MHINLAO3}
//                   alt="My Heart Is No Longer An Orphan"
//                 />
//                 <CarouselItem
//                   image={MHINLAO4}
//                   alt="My Heart Is No Longer An Orphan"
//                 />
//                 <CarouselItem
//                   image={MHINLAO5}
//                   alt="My Heart Is No Longer An Orphan"
//                 />
//                 <CarouselItem
//                   image={MHINLAO6}
//                   alt="My Heart Is No Longer An Orphan"
//                 />
//                 <CarouselItem image={TPOP1} alt="The Promise Of Perfume" />
//                 <CarouselItem image={TPOP2} alt="The Promise Of Perfume" />
//                 <CarouselItem image={TPOP3} alt="The Promise Of Perfume" />
//                 <CarouselItem image={TPOP4} alt="The Promise Of Perfume" />
//                 <CarouselItem image={TPOP5} alt="The Promise Of Perfume" />
//                 <CarouselItem image={TPOP6} alt="The Promise Of Perfume" />
//                 <CarouselItem image={MAP1} alt="My American Pilgrimage" />
//                 <CarouselItem image={MAP2} alt="My American Pilgrimage" />
//                 <CarouselItem image={MAP3} alt="My American Pilgrimage" />
//                 <CarouselItem image={MAP4} alt="My American Pilgrimage" />
//                 <CarouselItem image={MAP5} alt="My American Pilgrimage" />
//                 <CarouselItem image={MAP6} alt="My American Pilgrimage" />
//                 <CarouselItem image={HHN1} alt="Happy Hell Night" />
//                 <CarouselItem image={HHN2} alt="Happy Hell Night" />
//                 <CarouselItem image={HHN3} alt="Happy Hell Night" />
//                 <CarouselItem image={HHN4} alt="Happy Hell Night" />
//                 <CarouselItem image={HHN5} alt="Happy Hell Night" />
//                 <CarouselItem image={HHN6} alt="Happy Hell Night" />
//                 <CarouselItem image={TMS1} alt="The Magic Snowman" />
//                 <CarouselItem image={TMS2} alt="The Magic Snowman" />
//                 <CarouselItem image={TMS3} alt="The Magic Snowman" />
//                 <CarouselItem image={TMS4} alt="The Magic Snowman" />
//                 <CarouselItem image={TMS5} alt="The Magic Snowman" />
//                 <CarouselItem image={TMS6} alt="The Magic Snowman" />
//               </div>
//               <a
//                 className="carousel-control-prev"
//                 href="#indicators"
//                 role="button"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 ></span>
//               </a>
//               <a
//                 className="carousel-control-next"
//                 href="#indicators"
//                 role="button"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 ></span>
//               </a>
//             </div>
//           </div>
      
//         </div>
//       </div>
//     </main>
//   );
// };

export default Gallery