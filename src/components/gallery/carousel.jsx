const CarouselItem = (props) => {
  return (
    <div className={`carousel-item ${props.active}`}>
      <img
        className="d-block w-100"
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
};

export default CarouselItem;