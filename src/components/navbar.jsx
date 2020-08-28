import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class Navbar extends Component {
    render() {
        return (
            // <div className = "navbar-absolute">
            //     <p className = "navbar-text-left mt-5 ml-5"><a className = "mx-3">HOME</a><a className = "mx-3">INTRODUCTION</a> <a className = "mx-3">PROJECTS</a> <a className = "mx-3">CONTACT</a></p>
            //     <p className = "navbar-text-right text-right">asd</p>
            // </div>
            <div className = "d-none d-lg-flex">
            <div className = "navbar-absolute">
                <p className = "text-left mt-5 ml-5"><a className = "mx-3">HOME</a><a className = "mx-3">INTRODUCTION</a> <a className = "mx-3">PROJECTS</a> <a className = "mx-3">CONTACT</a></p>
            </div>
            <div className = "navbar-absolute">
                <p className = "text-right mt-5 mr-5">
                    <MDBIcon className = "mx-3" size = "2x" fab icon = "facebook"></MDBIcon>
                    <MDBIcon className = "mx-3" size = "2x" fab icon = "github"></MDBIcon>
                    <MDBIcon className = "mx-3" size = "2x" fab icon = "linkedin"></MDBIcon>
                </p>
            </div>
            </div>
        )
    }
}

export default Navbar;