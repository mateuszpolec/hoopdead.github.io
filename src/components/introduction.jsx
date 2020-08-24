import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class IntroductionSection extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow className = "mt-5 pt-5">
                    <MDBCol sm = "12" className = "py-5 text-center">
                        <p className = "introduction-title">Hello World 👋</p>
                        <p className = "introduction-description">Programming is one of my hobbies since I was 15 years old. Right now I am a five years of an experience in learning basics — including extended IT curriculum in high school and one year of applied science classes at University of Wrocław. In this time I had been learning following technologies: React, Django, Python, JavaScript, Bootstrap, MDBoostrap and many, many more.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default IntroductionSection;