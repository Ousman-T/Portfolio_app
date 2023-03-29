import { Link, useLocation } from "react-router-dom"
import React from "react"
import '../Styles/NavBar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { useState, useEffect } from "react"



export default function Navbar(){
    const [expandNavBar, setExpandNavBar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavBar(false)
    }, [location])
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