import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Home from "./components/Home";
import Navbar from './components/common/Navbar';
import Footer from "./components/common/Footer";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="*" element={<Navigate to='/'/>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

