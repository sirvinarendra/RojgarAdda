import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faHome,
  faFile,
  faEdit,
  faPowerOff,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { HashRouter, Route, Routes, Link } from "react-router";
import UserDashboard from "./Userdashboard";
import Userprofile from "./Userprofile";
import UserHomepage from "./UserHomepage";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons/faSuitcaseRolling";

function UserModule() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand">
            {" "}
            <FontAwesomeIcon icon={faSuitcase} /> ROJGAR <sub>Adda</sub>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/">
                  {" "}
                  <FontAwesomeIcon icon={faUserFriends} /> Recent Jobs{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/applied">
                  {" "}
                  <FontAwesomeIcon icon={faFile} /> Applied Jobs{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/profile">
                  {" "}
                  <FontAwesomeIcon icon={faEdit} /> Edit / View Profile{" "}
                </Link>
              </li>
              <li
                className="nav-item me-4 "
                style={{ color: "lightblue", marginTop: "8px" }}
              >
                {" "}
                Welcome : {localStorage.getItem("fullname")}
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" onClick={logout}>
                  {" "}
                  <FontAwesomeIcon icon={faPowerOff} /> Logout{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<UserHomepage />} />
        <Route exact path="/applied" element={<UserDashboard />} />
        <Route exact path="/profile" element={<Userprofile />} />
      </Routes>
    </HashRouter>
  );
}
export default UserModule;

const logout = () => {
  localStorage.clear();
  window.location.href = "#/login";
  window.location.reload();
};
