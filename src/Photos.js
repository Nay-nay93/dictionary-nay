import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
    <section className="Photos container py-2">
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  className="img-fluid rounded shadow-sm"
                  alt="related visual"
                />
              </a>
            </div>
          );
        })}
      </div>
      </section>
    );
  } else {
    return null;
  }
}