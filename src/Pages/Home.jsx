import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"
import "../Styles/HomeStyle.css"
import { GetQuotes } from "../Components/Quotes"

export default function Home(){
    function GitHub(){
        window.location.href="https://github.com/Ousman-T" 
    }
    function LinkedIn(){
        window.location.href="https://www.linkedin.com/in/ousman-touray-/"
    }
    function EMail(){
        alert("Email: otouray14@gmail.com. Phone number: (862)-237-1221")
    }
    return(
        <div className="home">
            <div className="about">
                <h2>Hello, My Name is Ousman!</h2>
                <GetQuotes />
                <div className="prompt"><p>A Full Stack Developer with a passion for overcoming challenges, learning, and creating!</p>
                <LinkedInIcon onClick={LinkedIn}/> 
                <EmailIcon onClick={EMail}/>
                <GithubIcon onClick={GitHub}/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, CSS, JavaScript, React.js, React Redux, BootStrap, TailWindCSS, MaterialUI, Yarn.</span>
                    </li>
                <ol className="item">
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>MongoDB, Node.js, MySQL.</span>
                    </li>
                </ol>
                <ol className="item">
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript.</span>
                    </li>
                </ol>
                </ol>
            </div>
        </div>
    )
}