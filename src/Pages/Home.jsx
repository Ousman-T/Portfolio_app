import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/GitHub"

export default function Home(){
    return(
        <div className="home">
            <div className="about">
                <h2>Hello, My Name is Ousman!</h2>
                <div className="prompt"><p>A Full Stack Developer with a passion for overcoming challenges, learning, and creating!</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, CSS, JavaScript, React.js, React Redux, BootStrap, TailWindCSS, MaterialUI, Yarn.</span>
                    </li>
                <li className="list">
                    
                        <h2>Back-End</h2>
                        <span>MongoDB, Node.js, MySQL.</span>
                    
                </li>
                <li className="list">
                    
                        <h2>Languages</h2>
                        <span>JavaScript.</span>
                    
                </li>
                </ol>
            </div>
        </div>
    )
}