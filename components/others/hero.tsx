import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../reusable/Navbar";

const Hero = () => {
  const [popular, setPopular] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=5c94d2625ace9a31de63fcf23196007d&language=en-US"
        )
        .then((res) => {
          // console.log(res);
          setPopular(res);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  // console.log(popular);

  return (
    <div
      className="hero m-0 me-0 w-100"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          popular && popular.data.results[13].backdrop_path
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero__container">
        <Navbar />
        <div className="hero__text  align-items-center">
          <h1 className="py-2">{popular.data.results[13].title}</h1>
          <h6 className="py-1 d-none d-sm-block">
            {popular.data.results[13].overview}
          </h6>
          <div className="hero__buttons py-2 py-md-3">
            <button className="fw-bold  m-1  hero__buttons--play">
              <i className="fa-solid fa-play me-2"></i>{" "}
              <span className="">Play</span>
            </button>
            <button className="fw-bold  m-1  hero__buttons--info">
              <i className="fa-regular fa-circle-question me-3"></i>
              <span className="">More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
