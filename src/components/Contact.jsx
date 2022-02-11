import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        msg: '',
    });

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
            return {...prevData, [name]: value};
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Full name: ${data.fullName} \nPhone: ${data.phone} \nEmail: ${data.email} \nmsg: ${data.msg}`);
    }

    return (
        <>
            <div className="my-5 text-center">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="Mobile number"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn mb-5" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
