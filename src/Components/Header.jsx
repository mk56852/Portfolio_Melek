import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`header-top-fixed one-page-nav  ${
        scrolled ? "fixed-header" : ""
      }`}
    >
      <div className="container ">
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              My projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Experiences
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactus"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
