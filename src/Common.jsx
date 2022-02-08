import React from "react";
import { NavLink } from "react-router-dom";
import Image from '../src/Images/web_development.svg';

const Common = (props) => {
  return(
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row my-auto">
                            <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>{props.title} <span className="brand-name">DemoProject</span></h1>
                                <h2 className="my-3">We are team of talented developer making websites.</h2>
                                <div className="mt-3">
                                    <NavLink className="btn-get-stared" to={props.visit}>{props.btn_title}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5 order-1 order-lg-2 common_img">
                                <img src={props.img_src} className="img-fluid animated" alt="CommonImage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

}

export default Common;
