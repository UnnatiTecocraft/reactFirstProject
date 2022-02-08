import React from "react";
import Common from "./Common";
import image from "../src/Images/web_development.svg";

const Home = () => {
  return(
    <>
        <Common
            title = "Grow your business with"
            btn_title = "Get Started"
            img_src = {image}
            visit = "/service"
        />
    </>
  );

}

export default Home;
