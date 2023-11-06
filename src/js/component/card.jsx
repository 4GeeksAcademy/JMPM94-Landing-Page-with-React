import React from "react";

const Card = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.4geeks.com"
          className="card-img-top"
          style={{ width: "18rem", height: "18rem" }}
          alt="4Geeks"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
