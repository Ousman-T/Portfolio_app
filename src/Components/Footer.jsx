import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import GmailIcon from "@material-ui/icons/Email"
import "../Styles/FooterStyle.css"

export default function Footer(){
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
        <div className="footer">
            <div className="socialMedia">
                <LinkedInIcon onClick={LinkedIn}/>
                <GitHubIcon onClick={GitHub}/>
                <GmailIcon onClick={EMail}/>
            </div>
            <p>&copy; 2023 ousmant.com</p>
        </div>
    )
}