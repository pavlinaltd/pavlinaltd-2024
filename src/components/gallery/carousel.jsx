const CarouselItem = (props) => {
  return (
    <div className={`carousel-item ${props.active}`}>
      <img
        className="d-block w-100"
        src={props.image}
        alt={props.alt}
        style={{ borderBottomLeftRadius : "6px" , borderBottomRightRadius : "6px" }}
      />
    </div>
  );
};

export default CarouselItem;