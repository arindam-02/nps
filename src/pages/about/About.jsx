import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('/assets/images/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">About Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  About us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container about-section py-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1705810591530-02053b1a9954?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
              alt="schoolImage"
              className="img-fluid rounded shadow about-page-image"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="about-title mb-4">Nababharati Public School</h2>
            <p className="about-text">
              Nababharati Public School, located at Hizlock More, Bagnan,
              Howrah, is a premier institution dedicated to the all-round
              development of children. Affiliated with the C.B.S.E. (New Delhi)
              curriculum and operating as a co-educational school, it offers
              classes from Nursery to Standard V (for the current academic
              year).
              <br />
              <br />
              Managed by the Dakshinamurty Foundation, the school places a
              strong emphasis on academic excellence, character building, and
              holistic development. With AC classrooms, dedicated educators, and
              a curriculum that blends academics with C.A.T. (Creative and
              Analytical Thinking) sessions, Nababharati Public School is
              setting a new benchmark in foundational education.
              <br />
              <br />
              <strong>Vision:</strong> To nurture young minds into confident,
              compassionate, and creative individuals through a modern,
              inclusive, and value-based educational environment.
              <br />
              <strong>Mission:</strong> To provide a safe, supportive, and
              intellectually stimulating environment that fosters curiosity,
              innovation, and critical thinking.
            </p>
          </div>
        </div>

        {/* Principal Section */}
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="about-title mb-4">Principal's View</h2>
            <p className="about-text">
              At Nababharati Public School, we believe that education is not
              just about textbooks—it's about transformation. As the Principal
              of this promising institution, I see our school as a growing tree,
              deeply rooted in values, yet reaching upwards with ambition and
              innovation.
              <br />
              <br />
              Our vision is to create a nurturing environment where every child
              feels seen, heard, and inspired. We are not just teaching
              lessons—we are building confidence, curiosity, and character.
              <br />
              <br />
              Looking ahead, we aim to expand to higher classes, introduce smart
              classrooms, strengthen STEM and language programs, and integrate
              technology with learning in meaningful ways.
              <br />
              <br />
              <p className="m-0">Warm regards,</p>
              <strong> Principal of The School </strong>
              <p className="m-0">Nababharati Public School</p>
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwcHJpbmNpcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
              alt="principal"
              className="img-fluid rounded shadow principal-image"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
