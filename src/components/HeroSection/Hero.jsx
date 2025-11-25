import React from "react";
import Slider from "react-slick";
import "./style.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  };

  return (
    <>
      {/* =========================== */}
      {/* Hero Carousel Section */}

      <section>
        <Slider {...settings}>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(/assets/images/banner_image.PNG)",
                height: "60vh",
                backgroundSize: "tile",
                backgroundPosition: "top",
                paddingBottom: "250px",
              }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-8 text-center d-flex flex-column justify-content-center align-items-center ">
                    <h1 className="mb-4 banner-heading-text">
                      Kids Are The Best <span>Explorers In The World</span>
                    </h1>
                    <p>
                      <a
                        href="#read-more"
                        className="btn btn-secondary px-4 py-3 mt-3"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(/assets/images/bg_101.jpeg)",
                height: "60vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div className="container">
                <div className="row no-gutters text-center slider-text align-items-center justify-content-center">
                  <div className="col-md-8 ">
                    <h1 className="mb-4 banner-heading-text">
                      Perfect Learning <span>For Your Child</span>
                    </h1>
                    <p>
                      <a
                        href="#read-more"
                        className="btn btn-secondary px-4 py-3 mt-3"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* =========================== */}

      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-primary">
              {/* <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary"> */}
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Certified Teachers</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-tertiary">
              {/* <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary"> */}
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-jigsaw"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Special Activities</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-fifth">
              {/* <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth"> */}
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Book &amp; Library</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 bg-quarternary">
              {/* <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary"> */}
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Certification</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
