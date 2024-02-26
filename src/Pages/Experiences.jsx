import React from "react";
import parser from "html-react-parser";

export default function Experience({ allExperience }) {
  return (
    <section className="section gray-bg" id="experience">
      <div className="container">
        <div className={`section-heading`}>
          <h6
            data-aos={"fade-right"}
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span>{"Experiences"}</span>
          </h6>
          <h2 className="mini-text">
            {parser("professional <span>Experiences</span>")}
          </h2>
        </div>
        <div className="row gy-3">
          {allExperience?.map((item, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box">
                <div className="row gy-4">
                  <div className="col-md-4 col-lg-3 text-center ">
                    <div className="ex-left h-100 pt-10">
                      <h4>{item.designation}</h4>
                      <span>{item.company}</span>
                      <p>{item.duration}</p>
                      <label>{item.jobType}</label>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="ex-right">
                      <h5 className="mini-text">{item.companyTitle}</h5>
                      <p className="m-0">
                        {item.companyDescription
                          .split("\n")
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </p>
                      <h6 className="mini-text">Technologies : </h6>
                      <p className="m-0"> {item.technologies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
