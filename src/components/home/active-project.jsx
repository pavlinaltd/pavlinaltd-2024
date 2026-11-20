import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import "./active-project.css";

const ActiveProject = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="active-project col-12 col-lg-9 col-xl-8 row mx-auto py-5 py-sm-0 mt-sm-5 justify-content-center">
      <div className={`col-9 col-sm p-0 ${props.order}`}>
        <Link to={props.to}>
          <img
            src={props.picture}
            className="img-fluid rounded-4"
            alt={props.alt}
          />
        </Link>
      </div>
      <div className="col-12 col-sm p-0 d-flex flex-column my-auto">
        <h3 className="text-center mb-3 mb-lg-5">{props.title}</h3>
        <p>{props.synopsis}</p>
        <Link className="mx-auto mt-3 mt-lg-5" to={props.to}>
          <button className="text-uppercase py-2 px-4">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default ActiveProject;
