import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase,faHouse, faUserPlus, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Topnavheader() {

    return(
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container">
            <a className="navbar-brand"> <FontAwesomeIcon icon={faSuitcase} /> ROJGAR <sub>Adda</sub>  </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/"> <FontAwesomeIcon icon={faHouse} /> Home </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active" to="/login"> <FontAwesomeIcon icon={faLock} /> Login </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active " to="/usersignup"> <FontAwesomeIcon icon={faUserPlus} />  User </Link>
                </li>
                <li className="nav-item me-4">
                    <Link className="nav-link active " to="/companysignup"> <FontAwesomeIcon icon={faUserPlus} />  Company </Link>
                </li>
                
                
                </ul>
            </div>
            </div>
        </nav> 
    )
}
export default Topnavheader;