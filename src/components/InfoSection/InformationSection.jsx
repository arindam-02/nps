import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const InformationSection = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
              {/* <div className="text px-4 ftco-animate"> */}
              <div className="text px-4">
                <h2 className="mb-4">
                  Welcome to <br />
                  <strong style={{ fontFamily: "englishFont" }}>
                    Nababharati Public School
                  </strong>
                </h2>
                <p className="about-text">
                  Nababharati Public School, located at Hizlock More, Bagnan,
                  Howrah, is a premier institution dedicated to the all-round
                  development of children. Based on the C.B.S.E. (New Delhi)
                  curriculum and operating as a co-educational school, it offers
                  classes from Nursery to Standard IV (for the current academic
                  year).
                  <br />
                </p>
                {showMore && (
                  <p className="about-text">
                    Managed by the Dakshinamurty Foundation, the school places a
                    strong emphasis on academic excellence, character building,
                    and holistic development. With AC classrooms, dedicated
                    educators, and a curriculum that blends academics with
                    C.A.T. (Creative and Analytical Thinking) sessions,
                    Nababharati Public School is setting a new benchmark in
                    foundational education.
                    <br />
                    <br />
                    <strong>Vision:</strong> To nurture young minds into
                    confident, compassionate, and creative individuals through a
                    modern, inclusive, and value-based educational environment.
                    <br />
                    <strong>Mission:</strong> To provide a safe, supportive, and
                    intellectually stimulating environment that fosters
                    curiosity, innovation, and critical thinking.
                  </p>
                )}
                <button
                  className="btn btn-secondary px-4 py-3"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
            {/* <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate"> */}
            <div className="col-md-7 wrap-about py-5 pr-md-4">
              <h2 className="mb-4">What We Offer</h2>
              <p>
                We provide a nurturing environment where learning is enriched
                with creativity, care, and purpose. From strong academics to
                holistic development, every experience is designed to help
                students grow, discover their strengths, and shine with
                confidence.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-security"></span>
                    </div>
                    <div className="text">
                      <h3>Safety First</h3>
                      <p>
                        We maintain a secure, well-supervised campus to ensure
                        every child’s safety and peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-reading"></span>
                    </div>
                    <div className="text">
                      <h3>Regular Classes</h3>
                      <p>
                        A consistent academic schedule helps students learn
                        steadily and stay disciplined.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-diploma"></span>
                    </div>
                    <div className="text">
                      <h3>Certified Teachers</h3>
                      <p>
                        Qualified and dedicated teachers guide students with
                        expertise and care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span>
                        <TbAirConditioning />
                      </span>
                    </div>
                    <div className="text">
                      <h3>AC Classrooms</h3>
                      <p>
                        Comfortable, spacious AC classrooms (According to the
                        weather conditions) provide an ideal setting for focused
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-jigsaw"></span>
                    </div>
                    <div className="text">
                      <h3>Creative Lessons</h3>
                      <p>
                        Engaging and imaginative lessons make learning enjoyable
                        and meaningful.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-kids"></span>
                    </div>
                    <div className="text">
                      <h3>Sports Facilities</h3>
                      <p>
                        Well-equipped sports areas promote fitness, teamwork,
                        and an active lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="">
                        <HiOutlineComputerDesktop />
                      </span>
                    </div>
                    <div className="text">
                      <h3>Computer-Aided Teaching (CAT)</h3>
                      <p>
                        Smart classrooms and digital tools enhance understanding
                        and modern learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center text-white">
                      <span className="flaticon-education"></span>
                    </div>
                    <div className="text">
                      <h3>Co-Curricular Activities (CCA)</h3>
                      <p>
                        Sports, art and craft, song, dance, poem recitation,
                        Hindi, English and Bengali extempore, Rangoli and Coding
                        etc. classes will be provided from primary sections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InformationSection;
