import Image from "next/image";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "./Card";

// const renderTooltip: FC<any> = (props) => (
//   <Tooltip id="button-tooltip" className="modal__tooltip" {...props}>
//     <span className="">Simple tooltip</span>
//   </Tooltip>
// );

const Modal: FC<any> = ({ results }) => {
  return (
    <>
      <div
        className="modal fade "
        id="modal-large"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal__dialog" role="document">
          <div className="modal-content modal__background">
            <div
              className="modal-header border-0 modal__header align-items-end pb-4"
              style={{
                backgroundImage: `
                linear-gradient(0deg,#aaa, transparent 100%), url(https://image.tmdb.org/t/p/original${
                  results && results[14].backdrop_path
                })`,
                backgroundBlendMode: "overlay",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="modal__header--content px-3 px-lg-4">
                <h4 className="modal__header--title">
                  {results && results[14].title.toUpperCase()}
                </h4>

                <button
                  type="button"
                  className="btn-close modal__header--close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="modal__controls d-flex align-items-center">
                  <button
                    className="fw-bold  m-1  modal__controls--play"
                    role="button"
                  >
                    <i className="fa-solid fa-play me-2"></i>
                    <span className="">Play</span>
                  </button>
                  {/* <div className="div">
                    <i className="fa-regular fa-plus fa-stack-1x fa-inverse"></i>
                  </div> */}
                  {/* <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  > */}
                  <button
                    className="modal--button  mx-1"
                    type="button"
                    role="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Add to My List"
                  >
                    <i className="fa-regular fa-plus fa-inverse"></i>
                  </button>
                  {/* </OverlayTrigger> */}

                  <div
                    className="modal--button modal--button-inverse mx-1"
                    role="button"
                  >
                    <i className="fa-regular fa-thumbs-up"></i>{" "}
                    <div className="modal--likes py-2 px-1">
                      <div className="d-flex">
                        <div
                          className="modal--button modal--button-like mx-1"
                          role="button"
                        >
                          <i className="fa-regular fa-thumbs-down"></i>{" "}
                        </div>
                        <div
                          className="modal--button modal--button-like mx-1"
                          role="button"
                        >
                          <i className="fa-regular fa-thumbs-up"></i>{" "}
                        </div>
                        <div
                          className="modal--button modal--button-like mx-1"
                          role="button"
                        >
                          <i className="fa-regular fa-thumbs-up"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <span className="fa-stack fa-2x">
                    <i className="fa-regular fa-circle fa-stack-2x "></i>
                    <i className="fa-solid fa-circle fa-stack-2x "></i>

                    <i className="fa-regular fa-plus fa-stack-1x fa-inverse"></i>
                  </span> */}
                </div>
              </div>

              <div className="modal__header--overlay px-3 px-lg-4"></div>
            </div>
            <div className="modal-body modal__details mx-lg-3 position-relative">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex mb-2 mb-lg-3">
                    <div className="mx-1 fw-bold">
                      {results && results[14].release_date.toUpperCase()}
                    </div>
                    <div className="mx-1 modal__details--ratings px-2 ">
                      18+
                    </div>
                    <div className="mx-1 fw-bold">2h 42m</div>
                    <div className="mx-1 modal__details--ratings px-2">HD</div>
                  </div>
                  <div className="d-flex mb-2 mb-lg-3 ">
                    <p className="mb-0">{results && results[14].overview}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="mb-2 mb-lg-3 modal__details--info">
                    <span>Cast:</span> Steven Seagal, Micheal B. Jordan, Jamie
                    Foxx, Denzel Washington, more
                  </p>
                  <p className="mb-2 mb-lg-3 modal__details--info">
                    <span>Genre:</span> Movies, Action & Adventure
                  </p>
                  <p className="mb-2 mb-lg-3 modal__details--info">
                    <span>This movie is:</span> Violent, Suspensful, Exciting
                  </p>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                      <p className="mb-2 mb-lg-3 modal__details--info">
                        <span>Vote Average:</span>{" "}
                        {results && results[14].vote_average}
                      </p>
                    </div>
                    <div className="col">
                      {" "}
                      <p className="mb-2 mb-lg-3 modal__details--info">
                        <span>Vote count:</span>{" "}
                        {results && results[14].vote_count}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal__more">
                <div className="modal__more--header py-2">
                  <h6>More like this</h6>
                </div>
                <div className="row">
                  {results.map((item: any) => (
                    <div className="col-md-6 col-lg-4 py-2" key={item.id}>
                      <Card item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
