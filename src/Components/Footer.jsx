import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import GmailIcon from "@material-ui/icons/Email"
import "../Styles/FooterStyle.css"

export default function Footer(){
    return(
        <div className="footer">
            <div>
                <LinkedInIcon />
                <GitHubIcon />
                <GmailIcon />
                <TwitterIcon />
            </div>
            <p>&copy; 2023 ousmant.com</p>
        </div>
    )
}