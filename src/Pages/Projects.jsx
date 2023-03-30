import EachProject from "../Components/EachProject";
import MovieAPI from '../assets/MovieAPI.png'
import "../Styles/Project.css"

export default function Projects(){
    return(
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                <EachProject name="Movie Search" image={MovieAPI}/>
                <EachProject />
            </div>
        </div>
    )
}