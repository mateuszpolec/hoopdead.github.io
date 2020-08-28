import React, { Component } from "react";
import { MDBRow, MDBInput, MDBCol, MDBBtn } from "mdbreact";
import Input from "./Input";

class ContactSection extends Component {
    render() {
        return (
            <MDBRow class = "mt-5" id = "register-input">
                <MDBCol sm = "12" className = "text-center py-5 py-lg-4">
                    <p className = "contact-title">Contact with me</p>
                </MDBCol>
                <MDBCol sm = "12" lg = "5" className = "mx-auto ml-md-auto mx-5 my-3 my-md-3 my-lg-1">
                    <Input
                        id={1}
                        label="E-mail address"
                        locked={false}
                        active={false}
                    />
                </MDBCol>
                <MDBCol sm = "12" lg = "5" className = "mx-auto mr-md-auto mx-5 my-3 my-md-3 my-lg-1">
                    <Input
                        id={2}
                        label="Name"
                        locked={false}
                        active={false}
                    />
                </MDBCol>
                <MDBCol sm = "12" lg = "11" className = "mx-auto mr-md-auto mx-5 mt-3 my-lg-5">
                    <p className = "contact-field-message-title">Enter your message</p>
                    <textarea rows = "5" className = "field-message mb-4"></textarea>
                </MDBCol>
                <MDBCol sm = "12" className = "mx-auto text-center mb-5">
                    <MDBBtn className = "contact-button">Send Message</MDBBtn>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default ContactSection;