import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <div className="navbar">
            <div className="toggleButton">
                <button>Navbar</button>
                </div>
                <div className="Links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                </div>
        </div>
    )
}