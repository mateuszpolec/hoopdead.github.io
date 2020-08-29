import React, { Component } from "react";
import { MDBRow, MDBCol, MDBAlert, MDBIcon, MDBAnimation, MDBBtn } from "mdbreact";
import Input from "./Input";
import emailjs from "emailjs-com";


class ContactSection extends Component {

    sendEmail(e) {
        e.preventDefault();
        let emailValue = document.getElementById("email").value;
        let nameValue = document.getElementById("name").value;
        let messageValue = document.getElementById("message").value;
        let array_of_errors = [];

        //Validation Section
        if(emailValue && nameValue && messageValue) {
            if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
                array_of_errors.push("Email adress is incorrect ");
            }
        } else {
            array_of_errors.push("Please, fill all the inputs ");
        }


        if (array_of_errors.length > 0) {
            let validateErrorElement = document.getElementById("validate-error");
            let validateErrorMessageElement = document.getElementById("validate-error-message");
            validateErrorElement.classList.remove("d-none");
            validateErrorMessageElement.innerHTML = array_of_errors[0];
            console.log(validateErrorElement);
        } else {
            let contactSection = document.getElementById("contact-section");
            let contactSectionSuccess = document.getElementById("contact-section-success");
            contactSection.classList.add("d-none");
            contactSectionSuccess.classList.remove("d-none");
        }

        emailjs.sendForm('gmail', 'template_CQv4w2PV', e.target, 'user_kplDHCXmDFeLmgqAPYOBu')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    

    render() {
        return (
            <form onSubmit = {this.sendEmail}>
                <MDBRow className = "mt-5 d-none" id = "contact-section-success">
                        <MDBCol sm = "12" className = "text-center py-5 py-lg-4">
                            <MDBAnimation type="fadeIn" className = "text-center">
                                <p className = "contact-section-success-title">Thanks for contacting with me! I am going to hook you up in 24 hours.</p>
                                <MDBIcon size = "4x" icon = "check-circle" className = "contact-section-success-icon mb-5"></MDBIcon>
                            </MDBAnimation>
                        </MDBCol>
                </MDBRow>
                <MDBRow class = "mt-5" id = "contact-section">
                    <MDBCol sm = "12" className = "text-center py-5 py-lg-4">
                        <p className = "contact-title">Contact with me</p>
                    </MDBCol>
                    <MDBCol sm = "12" id = "validate-error" className = "d-none">
                        <MDBAlert color="danger" className = "mx-auto w-50 mb-4">
                            <span id = "validate-error-message"></span>
                        </MDBAlert>
                    </MDBCol>
                        <MDBCol sm = "12" lg = "5" className = "mx-auto ml-md-auto mx-5 my-3 my-md-3 my-lg-1">
                            <Input
                                id={"email"}
                                name = {"email"}
                                label="E-mail address"
                                locked={false}
                                active={false}
                            />
                        </MDBCol>
                        <MDBCol sm = "12" lg = "5" className = "mx-auto mr-md-auto mx-5 my-3 my-md-3 my-lg-1">
                            <Input
                                id={"name"}
                                name = {"name"}
                                label="Name"
                                locked={false}
                                active={false}
                            />
                        </MDBCol>
                        <MDBCol sm = "12" lg = "11" className = "mx-auto mr-md-auto mx-5 mt-3 my-lg-5">
                            <p className = "contact-field-message-title">Enter your message</p>
                            <textarea id = "message" name = "message" rows = "5" className = "field-message mb-4"></textarea>
                        </MDBCol>
                        <MDBCol sm = "12" className = "mx-auto text-center mb-5">
                            <MDBBtn className = "contact-button" type = "submit">Send Message</MDBBtn>
                        </MDBCol>
                </MDBRow>
            </form>
        );
    }
}

export default ContactSection;