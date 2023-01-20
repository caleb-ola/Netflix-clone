import Image from "next/image";
import React from "react";

const Card: React.FC<any> = ({ item }) => {
  return (
    <div className="card border-0 modal__card position-relative">
      <Image
        src={ (item.backdrop_path === null) ? "":`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`}
        className="card-img-top"
        width={180}
        height={70}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        alt="..."
      />
      <button className="modal__card--play" type="button" role="button">
        <i className="fa-solid fa-play fa-inverse ps-1 pt-1"></i>
      </button>
      <div className="card-body modal__card--body p-2 p-lg-3 h-100">
        <div className="row align-items-center">
          <div className="col">
            <p className="card-title fw-bold m-0 modal__card--percentage ">
              84% Match
            </p>
            <div className="d-flex align-items-center">
              <div className=" modal__details--ratings px-2 m-1 ms-0 modal__card--ratings ">
                18+
              </div>
              <div className="mx-1 fw-bold modal__card--year">
                {item && item.release_date.slice(0, 4)}
              </div>
            </div>
          </div>
          <div className="col text-end d-flex justify-content-end">
            <button
              className="modal--button text-end  mx-1"
              type="button"
              role="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Add to My List"
            >
              <i className="fa-regular fa-plus fa-inverse"></i>
            </button>
          </div>
        </div>
        <p className="card-text py-2">
          {item && item.overview.substring(0, item.overview.indexOf(".") + 1)}
        </p>
      </div>
    </div>
  );
};

export default Card;
