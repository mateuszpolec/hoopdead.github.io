import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import LaptopIcon from "../assets/images/laptop.png";
import AwardIcon from "../assets/images/award.png";
import PaletteIcon from "../assets/images/palette.png";
import ProfitIcon from "../assets/images/profit.png";

class IconsSection extends Component {
    render() {
        return (
            <MDBRow className = "py-5">
                <MDBCol lg = "3" className = "text-center my-3 my-lg-0">
                    <img src = {LaptopIcon} alt = ""></img>
                    <p className = "icons-description mt-4 w-75 mx-auto">I am up-to-date with newest technologies and always trying to improve my programming skills.</p>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center my-3 my-lg-0">
                    <img src = {AwardIcon} alt = ""></img>
                    <p className = "icons-description mt-4 w-75 mx-auto">I took a part in couple of programming conquests and hackathons. </p>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center my-3 my-lg-0">
                    <img src = {PaletteIcon} alt = ""></img>
                    <p className = "icons-description mt-4 w-75 mx-auto">I know the basics of User Experience and User Interface design.</p>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center my-3 my-lg-0">
                    <img src = {ProfitIcon} alt = ""></img>
                    <p className = "icons-description mt-4 w-75 mx-auto">You are going to get excellent employee!<MDBIcon className = "mx-2" icon = "heart"></MDBIcon></p>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default IconsSection;