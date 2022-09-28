import React from 'react';
import { Link }  from 'react-router-dom';
import sliderFirst from'../images/video-one.png';
import sliderSecond from'../images/video-two.png';
import sliderThird from'../images/video-three.png';
const Slider = () => {
  return (
    <>
       <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ sliderFirst } alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ sliderSecond } alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ sliderThird } alt="Third slide" />
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </>
  );
}

export default Slider;