import React from "react";

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
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word.
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
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                      <span className="flaticon-education"></span>
                    </div>
                    <div className="text">
                      <h3>Sufficient Classrooms</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
                        Far far away, behind the word mountains, far from the
                        countries Vokalia.
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
