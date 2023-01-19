import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../reusable/Card";
import SlideCard from "../reusable/SlideCard";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      className="sliding__body--arrow-right"
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right  position-relative fa-3x"></i>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="sliding__body--arrow-left"
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left  position-relative fa-3x"></i>
    </div>
  );
}
const Sliding: FC<any> = ({ data, header, modalItem }) => {
  const { results } = data;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sliding ">
      <div className="sliding__body position-relative">
        <div className="">
          <div className="sliding__header d-flex  align-items-center mb-1">
            <h5 className="sliding__header--text me-2">{header}</h5>
            <div className="sliding__header--btn">
              <span className="sliding__header--btn-title ">Explore All</span>
              <i className="fa-solid fa-chevron-right sliding__header--icon px-1"></i>
            </div>
          </div>
          <Slider {...settings}>
            {results.map((item: any) => (
              <div className="p-1" key={item.id}>
                <SlideCard
                  item={item}
                  modalItem={modalItem}
                  results={results}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliding;
