const GalleryItem = (props) => {
  return (
    <div className={`col-6 col-lg-4 p-0 ${props.layout}`}>
      <img
        src={props.image}
        alt={props.alt}
        className="img-fluid rounded-lg"
        data-bs-target={props.target}
        data-bs-slide-to={props.slide}
      />
    </div>
  );
};

export default GalleryItem;
