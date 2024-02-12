import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

export default function IntroSection() {
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-5  ">
            <img src="melek.jpg" alt="Avatar" className="hs-banner avatar" />
            <div className="hs-text-box"></div>
          </div>
          <div className="col-lg-1  "></div>
          <div className="col-lg-6  ">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{"melek ketata"}</span>
              </h6>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                {"Software Engineer"}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={[
                    "Creativity,Innovation",
                    1500,
                    "Responsability",
                    1500,
                  ]}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {"description"}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                {/* (
                  <SocialBtns
                    socialBtns={socialData}
                    variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                  />
                )*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
