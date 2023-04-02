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
                <EachProject name="Movie Search" image={MovieSearch} url="https://moviesearches.netlify.app/"/>
                <EachProject name="Jeopardy" image={Jeopardy} url="https://jeopardy22.netlify.app/" />
                <EachProject name="React-Tac-Toe" image={ReactTacToe} url="https://react-tac-toee.netlify.app/"/>
                <EachProject name="Zelda-API" image={ZeldaBOTW} url="https://zelda-botw-monsters.netlify.app/"/>
            </div>
            <div>
                <h1>Links to Projects Repositories</h1>
                <div>
                    <a href="https://github.com/Ousman-T/Jeopardy">Jeopardy</a>
                    <a href="https://github.com/Ousman-T/FetchMovie">Movie Search</a>
                    <a href="https://github.com/Ousman-T/React_Tac_Toe">Tic Tac Toe</a>
                    <a href="https://github.com/Ousman-T/Zelda_BOTW_Monster_API">Zelda API</a>
                </div>
            </div>
        </div>
    )
}