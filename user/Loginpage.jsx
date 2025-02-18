import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useState } from "react";
import "./login.css";
// import UserDashboard from "./Userdashboard";
function Login() {
  let [userinfo, setInfo] = useState({});
  let [message, setMessage] = useState("");
  let [x, setx] = useState(1);
  let [type, setType] = useState("password");
  let [profiletype, setProfiletype] = useState("user");
  let [userid,setUserid]=useState('user');
  let [companyid,setCompanyid]=useState('');

  const setcompany = () => {
    
    setProfiletype("company");
    setCompanyid('company');
    setUserid('');
  };
 
  const setuser = () => {
    setProfiletype("user");
    setCompanyid('');
    setUserid('user');
  };

  const hideshowpassword = () => {
    if (x) {
      setType("text");
    } else {
      setType("password");
    }
    setx(!x);
  };
  const pickValue = (event) => {
    userinfo[event.target.name] = event.target.value;
    setInfo(userinfo);
  };

  const loginCheck = (e) => {
    e.preventDefault();
    setMessage("Please validating....");
    let url = "http://localhost:1234/userapi";
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        let userfound = false;
        info.map((user, index) => {
          if (
            user.email == userinfo.email &&
            user.password == userinfo.password
          ) {
            userfound = true;
            setMessage("Login Successful : Redirecting....");
            localStorage.setItem("userid", user.id);
            if(profiletype==='user'){
              localStorage.setItem("fullname", user.fname);
            localStorage.setItem("usertype", "USER");
            window.location.href = "#/applied";
            window.location.reload();

            }
            else{
              localStorage.setItem("name", user.name);
            localStorage.setItem("usertype", "COMPANY");
            window.location.href = "#/";
            window.location.reload();

            }
            
            
          }
        });
        if (userfound == false) {
          setMessage("Login fail : Invalid User or Not Exist");
        }
      });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-4"></div>
        <div className="col-xl-4">
          <h4 className="text-centre text-success">Hello, Welcome to our Website.</h4>
          <p className="text-center text-danger mb-4">{message} </p>
          <form onSubmit={loginCheck}>
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faLock} /> Login{" "}
                <Link to="/signup" className="float-end">
                  {" "}
                  New User ?{" "}
                </Link>
              </div>
              <div className="card-body mb-0">
                <div className="row mb">
                  <div className="col-xl-12 disp">
                    <div className="user" id={userid} onClick={setuser}>
                      USER
                    </div>
                    <div className="company" id={companyid} onClick={setcompany}>
                      COMPANY
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <label> Email Id </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={pickValue}
                    />
                  </div>
                  <div className="col-xl-12">
                    <label> Password </label>
                    <input
                      type={type}
                      id="password"
                      className="form-control"
                      name="password"
                      onChange={pickValue}
                    />
                    <span onClick={hideshowpassword} className="icon">
                      {" "}
                      {x ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn  loginbtncolor"> Login </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-4"></div>
      </div>
    </div>
  );
}
export default Login;
