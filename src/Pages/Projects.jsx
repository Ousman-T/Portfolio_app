import EachProject from "../Components/EachProject";
import MovieSearch from "../assets/MovieSearch.png"
import "../Styles/Project.css"
import Jeopardy from "../assets/Jeopardy.png"
import ReactTacToe from "../assets/ReactTacToe.png"
import ZeldaBOTW from "../assets/ZeldaBOTW.png"


export default function Projects(){
    return(
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                <EachProject name="Movie Search" image={MovieSearch}/>
                <EachProject name="Jeopardy" image={Jeopardy} />
                <EachProject name="React-Tac-Toe" image={ReactTacToe} />
                <EachProject name="Zelda-API" image={ZeldaBOTW} />
            </div>
        </div>
    )
}