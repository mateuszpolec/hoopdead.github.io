import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import DjangoIcon from "../assets/images/django.png";
import PythonIcon from "../assets/images/python.png";
import FigmaIcon from "../assets/images/figma.png"

class ProjectsSection extends Component {
    render() {
        return (
            <div>
            <MDBRow className = "pt-lg-5" id = "projects-section">
                <MDBCol sm = "12" className = "projects-title text-center py-lg-5 py-3">My works</MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "film"></MDBIcon>
                    <p className = "projects-card-title">Filmbase</p>
                    <p className = "projects-card-description">Web application made for watching series and movies a lot easier.</p>
                    <a href="https://filmbase.tv/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <img src = {DjangoIcon}></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "code"></MDBIcon>
                    <p className = "projects-card-title">ITDepartment</p>
                    <p className = "projects-card-description">Static website made for IT company.</p>
                    <a href="http://itdepartment.pl/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <MDBIcon fab className = "projects-react projects-icon mx-3" icon = "react"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "fish"></MDBIcon>
                    <p className = "projects-card-title">Fishhub</p>
                    <p className = "projects-card-description">Static, example website made for seafood restaurant.</p>
                    <a href="http://hoopdead.github.io/fishhub/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow className = "pt-lg-5">
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "paste"></MDBIcon>
                    <p className = "projects-card-title">Veqer Portfolio</p>
                    <p className = "projects-card-description">My very first front-end project - portoflio for a friend.</p>
                    <a href="http://hoopdead.github.io/veqer_portfolio/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                    <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "calculator"></MDBIcon>
                    <p className = "projects-card-title">Math Game</p>
                    <p className = "projects-card-description">Game where you have to solve as many equations as possible in time.</p>
                    <a href="http://hoopdead.github.io/math_game/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "border-all"></MDBIcon>
                    <p className = "projects-card-title">Tic tac toe</p>
                    <p className = "projects-card-description">An attempt to create tic tac toe in as few lines of code as possible.</p>
                    <a href="https://hoopdead.github.io/tic-tac-toe/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow className = "pt-lg-5">
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "laptop-code"></MDBIcon>
                    <p className = "projects-card-title">Hackathon Project</p>
                    <p className = "projects-card-description">Attempt to create an application that follows progress in Fitness.</p>
                    <a href="https://hoopdead.github.io/hackathon/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                    <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "dollar-sign"></MDBIcon>
                    <p className = "projects-card-title">Bank System</p>
                    <p className = "projects-card-description">Simulation of customer panel system in bank.</p>
                    <a href="https://github.com/hoopdead/bank_system/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <img src = {PythonIcon}></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "chess-board"></MDBIcon>
                    <p className = "projects-card-title">2048 Game Analyze</p>
                    <p className = "projects-card-description">Script that analyze what approach is the best for reaching highest score.</p>
                    <a href="https://github.com/hoopdead/2048_player/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <img src = {PythonIcon}></img>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow className = "py-lg-5">
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "newspaper"></MDBIcon>
                    <p className = "projects-card-title">Article Finder</p>
                    <p className = "projects-card-description">Web App that search for article with given keyword.</p>
                    <a href="https://github.com/hoopdead/pwjs/" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-html5 projects-icon mx-3" icon = "html5"></MDBIcon>
                        <MDBIcon fab className = "projects-css3 projects-icon mx-3" icon = "css3"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <img src = {DjangoIcon}></img>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "list"></MDBIcon>
                    <p className = "projects-card-title">Todo App</p>
                    <p className = "projects-card-description">Web App for things that you need to do.</p>
                    <a href="https://github.com/HoopDead/todo-react-app" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <MDBIcon fab className = "projects-bootstrap projects-icon mx-3" icon = "bootstrap"></MDBIcon>
                        <MDBIcon fab className = "projects-react projects-icon mx-3" icon = "react"></MDBIcon>
                        <MDBIcon fab className = "projects-js projects-icon mx-3" icon = "js"></MDBIcon>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg = "3" className = "text-center mt-5 mt-lg-3 py-4 mx-auto projects-card">
                    <MDBIcon size = "2x" className = "projects-card-icon mb-3" fas icon = "crown"></MDBIcon>
                    <p className = "projects-card-title">Miss Dress</p>
                    <p className = "projects-card-description">Example UI Project made in Figma for wedding dress salon.</p>
                    <a href="https://www.figma.com/proto/i1wiknamzKunPxMY6zUY0n/Untitled?node-id=64%3A5&scaling=min-zoom" class="stretched-link"></a>
                    <MDBRow className = "justify-content-center">
                        <img src = {FigmaIcon}></img>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </div>
        );
    }
}

export default ProjectsSection;