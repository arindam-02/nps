import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Layout from "../../components/Layout/Layout";
import GalleryComponent from "../../components/Gallery/GalleryComponent";

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2"
        // style={{ backgroundImage: "url('/assets/images/bg_2.jpg')" }}
        style={{
          backgroundImage: "url('/assets/images/book_breadcrumbs.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">Gallery</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  Gallery <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <GalleryComponent />
      </section>
    </Layout>
  );
};

export default Gallery;
