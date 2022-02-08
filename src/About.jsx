import React from "react";
import Common from "./Common";
import image from "../src/Images/website.svg";

const About = () => {
  return(
    <>
        <Common
            title = "Welcome to About Page"
            btn_title = "Contact Now"
            img_src = {image}
            visit = "/contact"
        />
    </>
  );

}

export default About;
