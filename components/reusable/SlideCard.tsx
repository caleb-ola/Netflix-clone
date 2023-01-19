import Image from "next/image";
import React, { FC } from "react";
import ModalOthers from "./modalOthers";

const SlideCard: FC<any> = ({ item, modalItem, results }) => {
  return (
    <>
      <div className="card border-0 sliding__card  sliding__card--clone">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            item && item.backdrop_path
          }`}
          className="card-img-top"
          width={180}
          height={70}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          priority
          alt="..."
        />
        <div className="card-body sliding__card--body p-2 p-lg-3">
          <div className="row align-items-center">
            <div className="col">
              <div className="sliding__controls d-flex align-items-center m-0">
                {/* <button
                className="fw-bold  m-1  sliding__controls--play"
                role="button"
              >
                <i className="fa-solid fa-play me-2"></i>
                <span className="">Play</span>
              </button> */}
                <button
                  className="sliding__controls--play  mx-1 "
                  type="button"
                  role="button"
                >
                  <i className="fa-solid fa-play"></i>
                </button>

                <button
                  className="sliding--button  mx-1"
                  type="button"
                  role="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Add to My List"
                >
                  <i className="fa-regular fa-plus fa-inverse"></i>
                </button>

                <div
                  className="sliding--button sliding--button-inverse mx-1"
                  role="button"
                >
                  <i className="fa-regular fa-thumbs-up"></i>{" "}
                  <div className="sliding--likes py-2 px-1">
                    <div className="d-flex">
                      <div
                        className="sliding--button sliding--button-like mx-1"
                        role="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Not for me"
                      >
                        <i className="fa-regular fa-thumbs-down"></i>{" "}
                      </div>
                      <div
                        className="sliding--button sliding--button-like mx-1"
                        role="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="I like this"
                      >
                        <i className="fa-regular fa-thumbs-up"></i>{" "}
                      </div>
                      <div
                        className="sliding--button sliding--button-like mx-1"
                        role="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Love this!"
                      >
                        <i className="fa-regular fa-heart"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-end d-flex justify-content-end">
              <button
                className="sliding--button  mx-1"
                type="button"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-others"
                onClick={() => modalItem(item, results)}
              >
                <i className="fa-solid fa-chevron-down fa-inverse"></i>
              </button>
            </div>
          </div>
          {/* {item && item.overview.substring(0, item.overview.indexOf(".") + 1)} */}
          <div className="d-flex my-3 mb-lg-3">
            <div className="mx-1 fw-bold ">
              <small>{item.release_date.slice(0, 4)}</small>
            </div>
            <div className="mx-1 modal__details--ratings px-1 ">
              <small>18+</small>
            </div>
            <div className="mx-1 fw-bold ">
              <small>2h 42m</small>
            </div>
            <div className="mx-1 modal__details--ratings px-1 ">
              {" "}
              <small>HD</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
