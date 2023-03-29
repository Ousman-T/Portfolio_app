import { Link } from "react-router-dom"
import React from "react"
import '../Styles/NavBar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState } from "react"



export default function Navbar(){
    const [expandNavBar, setExpandNavBar] = useState(false)
    return(
        <div className="navbar" id={expandNavBar ? 'open' : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandNavBar((prev) =>!prev)}}>
                    <ReorderIcon/>
                </button>
                </div>
                <div className="Links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                </div>
        </div>
    )
}