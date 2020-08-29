import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../styles/style.scss";

class LandingPage extends Component {
    render() {
        return (
            <MDBContainer fluid className = "d-flex min-vh-100 justify-content-center" id = "landing-page-section">
                <MDBRow center className="align-items-center">
                    <MDBCol sm = "12" className = "text-center mt-n5">
                        <p className = "landing-page-name-title mt-n5">Mateusz Połeć</p>
                        <hr className = "landing-page-hr"></hr>
                        <p className = "landing-page-text">Web Developer & Python Developer</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default LandingPage;