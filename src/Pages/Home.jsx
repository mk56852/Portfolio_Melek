import React, { useEffect } from "react";
import IntroSection from "../Sections/IntroSection";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Experience from "./Experiences";
import Contact from "./Contact";
import {
  introData,
  socialMediaData,
  aboutUsData,
  projectsData,
  experienceData,
  contactData,
  technologiesData,
} from "../Data/Data";
import TechnologiesList from "./TechnlogiesList";
export default function Home() {
  return (
    <>
      <IntroSection introData={introData} socialMediaData={socialMediaData} />
      <AboutUs data={aboutUsData} />
      <Projects data={projectsData} />

      <TechnologiesList data={technologiesData} />

      <Experience allExperience={experienceData} />
      <Contact data={contactData} />
    </>
  );
}
