import React from "react";

function Testimonial() {
  return (
    <>
    
      <div className="testimonials" >
        <h1 >
          Less process,
          <br />
          more productivity
        </h1>
        <p className="text-light">
          No more email chains, no more print-and-scan change
          <br /> requests, no more missed deadlines. We've simplified the <br />
          design process so you can see results faster and we can
          <br /> put more time into what we do best, design...
        </p>

        <div className="testimonials">
        <h2 style={{fontFamily: "Quicksand", }}>Testimonials</h2>
        <div className="cardsTest">
          <div className="testcards">
            <div className="testcards1"></div>
            <div className="testcards2"></div>
            <div className="testcards3"></div>
          </div>
          <div className="text">
            <div className="client">
              <h3>Client name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                laboriosam ipsum consequatur atque at! Tempore nam dolorum
                fugiat iusto dolores quo blanditiis, nesciunt, officiis pariatur
                suscipit delectus veritatis quidem, dolor vitae non.
              </p>
            </div>
            <div className="client">
              <h3>Client name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                laboriosam ipsum consequatur atque at! Tempore nam dolorum
                fugiat iusto dolores quo blanditiis, nesciunt, officiis pariatur
                suscipit delectus veritatis quidem, dolor vitae non.
              </p>
            </div>
            <div className="client">
              <h3>Client name</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                laboriosam ipsum consequatur atque at! Tempore nam dolorum
                fugiat iusto dolores quo blanditiis, nesciunt, officiis pariatur
                suscipit delectus veritatis quidem, dolor vitae non.
              </p>
            </div>
          </div>
        </div>
      </div></div>
      <style jsx>{`
        .testimonials h1,
        h2 {
          color: #ffe462;
          text-align: center;
        }
        .testimonials {
          margin-top: 50px;
        }
        .testimonials p {
          text-align: center;
        }
        .testimonials h2{
          font-size:55px;
      
        }
        .cardsTest {
          margin-top: 100px;
          height: 300px;
          background-color: #f7d6cd;
        }
        .testcards {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .testcards1,
        .testcards3 {
          background-color: #187e8a;
        }
        .testcards2 {
          background-color: #ffc857;
        }
        .testcards1,
        .testcards2,
        .testcards3 {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          margin-bottom: 100px;
          position: abosolute;
          margin-top: -50px;
        }
        .text {
          display: flex;
          flex-direction: row;
          text-align: center;
          justify-content: space-evenly;
          color: black;
          margin-top: -100px;
          padding: 0 50px 0 50px;
        }
        .text .client {
          width: 200px;
        }
        .text p {
          font-size: 14px;
        }
        @media screen and (max-width: 1150px) {
          .cardsTest {
            width: auto;
            display: flex;
            flex-direction: row;
            height: 1200px;
            justify-content: center;
          }
          .testcards {
            display: flex;
            flex-direction: column;
          }
          .text {
            display: flex;
            flex-direction: column;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            margin-top: 0;
          }
        }
        @media screen and (max-width: 800px) {
          .cardsTest {
            margin-top: 50px;
            height: auto;
            padding: 50px;
          }
          .text {
            margin-top: 0;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .client {
            margin-bottom: 50px;
            margin-top: 50px;
          }
          .testcards {
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            width: 150px;
            height: 150px;
          }
        }
        @media screen and (max-width: 500px) {
          .testimonials p {
            width: 45%;
            margin: 0 auto;
            color:white;
          }
          .text {
            padding: 0;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            width: 100px;
            height: 100px;
            margin-right: -50px;
            margin-left: 50px;
          }
          .text .client {
            width: 300px;
          }
          .testcards {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>
    </>
  );
}

export default Testimonial;
