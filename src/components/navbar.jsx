import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class Navbar extends Component {
    render() {
        return (
            // <div className = "navbar-absolute">
            //     <p className = "navbar-text-left mt-5 ml-5"><a className = "mx-3">HOME</a><a className = "mx-3">INTRODUCTION</a> <a className = "mx-3">PROJECTS</a> <a className = "mx-3">CONTACT</a></p>
            //     <p className = "navbar-text-right text-right">asd</p>
            // </div>
            <div className = "d-none d-lg-block">
            <div className = "navbar-absolute">
                <p className = "text-left mt-5 ml-5">
                    <a className = "mx-3 navbar-link" href = "#home-section">HOME</a>
                    <a className = "mx-3 navbar-link" href = "#introduction-section">INTRODUCTION</a>
                    <a className = "mx-3 navbar-link" href = "#projects-section">PROJECTS</a>
                    <a className = "mx-3 navbar-link" href = "#contact-section">CONTACT</a>
                </p>
            </div>
            <div className = "navbar-absolute">
                <p className = "text-right mt-5 mr-5">
                    <a href = "https://www.facebook.com/kochamkombajnyczteroosiowe/" className = "navbar-link"><MDBIcon className = "mx-3" size = "2x" fab icon = "facebook"></MDBIcon></a>
                    <a href = "https://github.com/hoopdead" className = "navbar-link"><MDBIcon className = "mx-3" size = "2x" fab icon = "github"></MDBIcon></a>
                    <a href = "https://www.linkedin.com/in/mateusz-po%C5%82e%C4%87-86b94b1a3/" className = "navbar-link"><MDBIcon className = "mx-3" size = "2x" fab icon = "linkedin"></MDBIcon></a>
                </p>
            </div>
            </div>
        )
    }
}

export default Navbar;