import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar=()=>{
    return(
        <nav>
            <div className="button-row">
                <Link className="button" to="/projects">Projects</Link>
                <Link className="button" to="/reading">Reading</Link>
                <Link className="button" to="/resume">Resume</Link>
                <Link className="button" to="/thoughts">Thoughts</Link>
            </div>
        </nav>
    )
}

export default Navbar;