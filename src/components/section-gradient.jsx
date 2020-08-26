import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import IntroductionSection from "./introduction";


class SectionGradient extends Component {
    render() {
        return (
            <MDBContainer fluid className = "min-vh-100" className = "background-gradient">
                <IntroductionSection></IntroductionSection>
            </MDBContainer>
        )
    }
}

export default SectionGradient;