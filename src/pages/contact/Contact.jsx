import React from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";

const Contact = () => {
  return (
    <Layout>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('/assets/images/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">Contact Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Contact <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container-fluid ">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-2 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Address</h3>
                <p className="text-black">
                  Hizlock More, Bagnan, West Bengal, Howrah, 711303
                </p>
              </div>
            </div>
            <div className="col-md-2 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Contact Number</h3>
                <p className="m-0">+91 89455 72020</p>
              </div>
            </div>
            <div className="col-md-2 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Email Address</h3>
                <p className="m-0">npsbagnan@gmail.com</p>
              </div>
            </div>
            <div className="col-md-2 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Trust Email</h3>
                <p className="m-0">dakshinamurtyfoundation@gmail.com</p>
              </div>
            </div>
            {/* <div className="col-md-2 d-flex">
              <div className="bg-light align-self-stretch box p-4 text-center">
                <h3 className="mb-4">Trust Website</h3>
                <p className="m-0">dmurtifoundation.org</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
