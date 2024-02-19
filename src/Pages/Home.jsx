import React, { useEffect } from "react";
import IntroSection from "../Sections/IntroSection";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Experience from "./Experiences";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutUs
        data={{
          imgSrc: "mk.png",
          miniTitle: "About Us",
          title: "I AM AVAILABLE FOR <span>UI UX DESIGN</span> PROJECTS",
          description:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          funfacts: [
            {
              title: "Google Review",
              number: 280,
            },
            {
              title: "Years Experience",
              number: 15,
            },
            {
              title: "Awward Winning",
              number: 49,
            },
          ],
          btnText: "Get in touch",
          btnUrl: "contactus",
        }}
      />

      <Projects
        data={{
          sectionHeading: {
            miniTitle: "My Work",
            title: "RECENT PROJECT",
          },
          allProjects: [
            {
              thumbUrl: "/images/popup-project-1.jpg",
              title: "Website Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
            {
              thumbUrl: "/images/popup-project-2.jpg",
              title: "Website Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
            {
              thumbUrl: "/images/popup-project-3.jpg",
              title: "Dashboard Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
            {
              thumbUrl: "/images/popup-project-4.jpg",
              title: "Mobile App Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
            {
              thumbUrl: "/images/popup-project-5.jpg",
              title: "Website Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
            {
              thumbUrl: "/images/popup-project-6.jpg",
              title: "Website Design",
              subTitle: "Web Design, App Design",
              details: {
                title: "Website Design for Marketing Agency Startup",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                type: "Website",
                langages: "PHP, HTML, CSS, JS",
                platform: "WordPress",
                country: "USA",
                url: "www.example.com",
              },
            },
          ],
        }}
      />

      <Experience
        allExperience={[
          {
            designation: "Front-end Developer",
            company: "WELAB | REMOTE",
            duration: "JAN 2019 - PRESENT",
            jobType: "Full time",
            companyTitle: "About Company",
            companyDescription:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .",
          },
          {
            designation: "Front-end Developer",
            company: "WELAB | REMOTE",
            duration: "JAN 2019 - PRESENT",
            jobType: "Full time",
            companyTitle: "About Company",
            companyDescription:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .",
          },
          {
            designation: "Front-end Developer",
            company: "WELAB | REMOTE",
            duration: "JAN 2019 - PRESENT",
            jobType: "Full time",
            companyTitle: "About Company",
            companyDescription:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .",
          },
        ]}
      />
      <Contact
        data={{
          contactImg: "mk.png",
          contactInfo: [
            { title: "Write an e-mail", email: "sample@domain.com" },
            { title: "write an e-mail", tel: "+044 9696 9696 3636" },
          ],
        }}
      />
    </>
  );
}
