const CarouselItem = (props) => {
  return (
    <div className={`carousel-item h-100 ${props.active? "active" : null}`}>
      <img src={props.image} className="d-block w-100 h-100" alt={props.alt} />
      <div className="carousel-caption d-block">
        <p className="text-center">{props.caption}</p>
      </div>
      <div className="carousel-shadow"></div>
    </div>
  );
};

export default CarouselItem;
