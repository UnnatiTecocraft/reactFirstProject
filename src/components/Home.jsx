import React from "react";
import Common from "./common/Common";
import image from "../../src/images/web_development.svg";

const Home = () => {
    return <Common
        title="Grow your business with"
        btnTitle="Get Started"
        imgSrc={image}
        visit="/service"
    />;
}

export default Home;
