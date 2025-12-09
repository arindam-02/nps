import React from "react";

const TeacherInfoSection = () => {
  const teacherDetails = [
    {
      name: "Nivedita Rawat Mukherjee",
      degree: "M.A. B.ED",
      designation: "Principal",
    },
    {
      name: "Samir Mahata",
      degree: "B.A.,  D.el. Ed, CTET, WBTET Qualified",
      designation: "Assistant Teacher",
    },
    {
      name: "Sabyasachi Chatterjee",
      degree: "B.Tech",
      designation: "Assistant Teacher",
    },
    {
      name: "Shreya Ghoshal",
      degree: "B.Sc., Montessori teachers trained",
      designation: "Assistant Teacher",
    },
    {
      name: "Bablu Yadav",
      degree: "MA, B.Ed",
      designation: "Assistant Teacher",
    },
    {
      name: "Arpita Chakraborty",
      degree: "BA, D.El.Ed.",
      designation: "Assistant Teacher",
    },
  ];

  return (
    <>
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">
                <span>Certified</span> Teachers
              </h2>
            </div>
            {/* ================ */}

            {/* ======================= */}
          </div>
        </div>
        <div className="conatiner-fluid">
          <div className=" row d-flex flex-column justify-content-center align-items-center">
            {teacherDetails &&
              teacherDetails.map((teacher, index) => (
                <div className="col-md-6 " key={index}>
                  <div className="staff">
                    <div className="text pt-3 text-center">
                      <h3 className="text-primary">
                        {teacher.name.toUpperCase()}
                      </h3>
                      <span className="position mb-2">
                        {teacher.designation}
                      </span>
                      <div className="faded">
                        <p>({teacher.degree})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherInfoSection;
