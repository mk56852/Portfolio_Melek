import React from "react";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import SocialMediaButtons from "../Components/SocialMediaButtons";

export default function Contact({ data }) {
  const { contactImg, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5 className="mini-text">{"CONTACT"}</h5>
                <p className="m-0">{"Contact me"}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              <div className="contact-banner d-none d-lg-block">
                <img
                  src={contactImg}
                  title
                  alt="Avatar"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <ContactInfo contactInfoData={contactInfo} />
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
          </div>
        </div>
      </div>
    </section>
  );
}
