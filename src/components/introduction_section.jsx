import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class IntroductionSection extends Component {
    render() {
        return (
                <MDBRow>
                    <MDBCol sm = "12" lg = "8" className = "text-center mx-auto py-5">
                        <p className = "introduction-title mt-5 py-5">Hi! My name is Mateusz 👋</p>
                        <p className = "introduction-description">There is never too late or too early to take a step in new field. Key for everything is just our involvement which I have already demonstrated when I was 15 years old. it was the first time when I came into contact with programming.
                        Years pass by but my favor causes that I end up in highschool with extended computer science curriculum and then in 2019 I start studying applied computer science at University of Wrocław. Programming became one of integral part of my life
                        and one of the biggest passion. I am trying to involve this passion not only during my university classes, and everyday hobby, but also in the profession which I have been working for almost half a year. My domain is openness to new ideas and technologies, which I would like to learn. IT is constantly evolving and I would like to do it along with it.</p>
                    </MDBCol>
                </MDBRow>
        )
    }
}

export default IntroductionSection;