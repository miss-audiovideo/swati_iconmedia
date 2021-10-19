import React from "react";
import twelve from "./images/twelve.jpg";

const FirstPage = () => {
  return (
    <>
      <div className="container-fluid my-lg-5 py-lg-5 ">
        <div className="row mt-lg-5 pt-lg-5">
          <div className="col-md-10 mx-auto">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 col-12 order-lg-1 order-2 first_div">
                <p className="heading_Para">What we do ?</p>
                <h1 className="heading_Content">
                  Do you need help with your graphic design ?
                </h1>
                <button className="btn btn-outline-warning px-3 mt-3">
                  Get in Touch
                </button>
              </div>
              <div className="col-md-6 col-12 order-lg-2 order-1 mx-auto">
                <img
                  className="img-fluid container-img mx-auto"
                  src={twelve}
                  alt="main_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
