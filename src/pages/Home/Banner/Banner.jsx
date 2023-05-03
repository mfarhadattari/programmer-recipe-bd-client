import React from "react";

import food1 from "../../../assets/banner/food1.jpg";
import food2 from "../../../assets/banner/food2.jpg";
import food3 from "../../../assets/banner/food3.jpg";
import food4 from "../../../assets/banner/food4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src={food1} className="w-full h-full" />
          <div className="absolute bottom-24 left-24 text-7xl text-white">
            PASTA IN TOMATO <br />
            SAUCE WITH CHICKEN <br />
            AND TOMATOES
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src={food2} className="w-full h-full" />
          <div className="absolute bottom-24 left-24 text-7xl text-white">
            PILAF WITH STEWED <br />
            BEEF MEAT
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src={food3} className="w-full h-full" />
          <div className="absolute bottom-24 left-24 text-7xl text-white">
            BAKED QUAILS
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src={food4} className="w-full h-full" />
          <div className="absolute bottom-24 left-24 text-7xl text-white">
            TACOS WITH BEEF <br />
            IN TOMATO SAUCE <br />
            AND SALSA
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
