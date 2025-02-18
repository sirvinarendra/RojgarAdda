import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faHome,
  faFile,
  faEdit,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { HashRouter, Route, Routes, Link } from "react-router";
import CompanyPostJob from "./Companypostjob";
import CompanyProfile from "./CompanyProfile";
import CompanyHomepage from "./CompanyHomepage";
import Companyalljobs from "./companyalljobs";

function CompanyModule() {
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
                  <FontAwesomeIcon icon={faHome} /> Home{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/createjob">
                  {" "}
                  <FontAwesomeIcon icon={faFile} /> Create Jobs{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/companyprofile">
                  {" "}
                  <FontAwesomeIcon icon={faEdit} /> Edit / company Profile{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/alljobs">
                  {" "}
                  <FontAwesomeIcon icon={faEdit} /> Our Jobs{" "}
                </Link>
              </li>
              <li
                className="nav-item me-4 "
                style={{ color: "lightblue", marginTop: "8px" }}
              >
                {" "}
                Welcome : {localStorage.getItem("name")}
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
        <Route exact path="/" element={<CompanyHomepage />} />
        <Route exact path="/createjob" element={<CompanyPostJob />} />
        <Route exact path="/companyprofile" element={<CompanyProfile />} />
        <Route exact path="/alljobs" element={<Companyalljobs />} />
      </Routes>
    </HashRouter>
  );
}
export default CompanyModule;

const logout = () => {
  localStorage.clear();
  window.location.href = "#/login";
  window.location.reload();
};
