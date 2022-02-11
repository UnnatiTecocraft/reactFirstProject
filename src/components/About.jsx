import React from "react";
import Common from "./common/Common";
import image from "../../src/images/website.svg";

const About = () => {
    return <Common
        title="Welcome to About Page"
        btnTitle="Contact Now"
        imgSrc={image}
        visit="/contact"/>;
}

export default About;
