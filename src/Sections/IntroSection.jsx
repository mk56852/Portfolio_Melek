import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialMediaButtons from "../Components/SocialMediaButtons";

export default function IntroSection({ introData, socialMediaData }) {
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 text-center ">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                <span>{introData.name}</span>
              </h6>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                {introData.jobTitle}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={[
                    "Creativity",
                    1500,
                    "Responsability",
                    1500,
                    "Innovation",
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
                {introData.description}
              </p>
              <center>
                <div
                  className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <SocialMediaButtons
                    data={socialMediaData}
                    variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                  />
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
