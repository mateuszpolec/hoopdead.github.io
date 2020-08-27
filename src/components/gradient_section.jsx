import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import IntroductionSection from "./introduction_section";
import IconsSection from "./icons_section";
import ProjectsSection from "./projects_section";
import ContactSection from "./contact_section";


class SectionGradient extends Component {
    render() {
        return (
            <MDBContainer fluid className = "min-vh-100" className = "background-gradient">
                <IntroductionSection></IntroductionSection>
                <IconsSection></IconsSection>
                <ProjectsSection></ProjectsSection>
                <ContactSection></ContactSection>
            </MDBContainer>
        )
    }
}

export default SectionGradient;