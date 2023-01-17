import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Modal from "../reusable/modal";
import Navbar from "../reusable/Navbar";

const Hero: FC<any> = ({ data }) => {
  const [popular, setPopular] = useState<any>();
  const { results } = data;

  // console.log(results);

  return (
    <div
      className="hero m-0 me-0 w-100"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          results && results[14].backdrop_path
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero__container">
        <Navbar />
        <div className="hero__text  align-items-center">
          <h2 className="py-2 m-0">
            {results && results[14].title.toUpperCase()}
          </h2>
          <h6 className="py-1 d-none d-sm-block">
            {results &&
              results[14].overview.substring(
                0,
                results[14].overview.indexOf(".") + 1
              )}
          </h6>
          <div className="hero__buttons py-2 py-md-3">
            <button className="fw-bold  m-1  hero__buttons--play">
              <i className="fa-solid fa-play me-2"></i>{" "}
              <span className="">Play</span>
            </button>
            <button
              className="fw-bold  m-1  hero__buttons--info"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modal-large"
            >
              <i className="fa-regular fa-circle-question fa-fw me-3"></i>
              <span className="">More Info</span>
            </button>
          </div>
        </div>
        <Modal results={results} />
      </div>
    </div>
  );
};

export default Hero;
