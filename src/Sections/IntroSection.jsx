import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialMediaButtons from "../Components/SocialMediaButtons";

export default function IntroSection() {
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 text-center ">
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
                {
                  "Enthusiastic Software Engineer with 1 year and 6 months of hands-on experience at Primatec, specializing in Java JEE development. Proficient in delivering robust and efficient software solutions through a collaborative approach with cross-functional teams.Demonstrated skills in analysis, design, and implementation, with a focus on achieving project goals and deadlines. Committed to staying abreast of the latest technologies and dedicated to continuous learning for professional advancement."
                }
              </p>
              <center>
                <div
                  className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <SocialMediaButtons
                    data={[
                      {
                        icon: "fa-brands:facebook-f",
                        iconBgClass: "facebook",
                        href: "/",
                      },
                      {
                        icon: "ion:logo-stackoverflow",
                        iconBgClass: "stack",
                        href: "/",
                      },
                      {
                        icon: "fa-brands:linkedin-in",
                        iconBgClass: "linkedin",
                        href: "/",
                      },
                      {
                        icon: "fa-brands:github",
                        iconBgClass: "github",
                        href: "/",
                      },
                    ]}
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
