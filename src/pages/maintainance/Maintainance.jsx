import Lottie from "lottie-react";
import React from "react";
import maintainance from "../../assets/website_maintenance.json";
import "./style.css";

const Maintainance = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Lottie
          animationData={maintainance}
          loop={true}
          style={{ width: "80vw" }}
        />
        <p className="message">This Site Is Under Maintanance!</p>
      </div>
    </>
  );
};

export default Maintainance;
