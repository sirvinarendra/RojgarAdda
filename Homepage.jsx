import { useState, useEffect } from "react";

function Homepage() {
  let [joblist, setJoblist] = useState([]);

  const getjob = () => {
    fetch("http://localhost:1234/jobapi")
      .then((response) => response.json())
      .then((info) => {
        //console.log(info);
        setJoblist(info);
      });
  };

  useEffect(() => {
    getjob();
  },[]);

  const apply = (job) => {
    if (localStorage.getItem("userid") == null) {
      window.location.href = "#/login";
    } else {
      let url =
        "http://localhost:1234/userapi/" + localStorage.getItem("userid");
      fetch(url)
        .then((response) => response.json())
        .then((userinfo) => {
          userinfo["jobid"] = job.id;
          userinfo["companyid"] = job.companyid;
          // apply start
          let url2 = "http://localhost:1234/applyapi";
          let postdata = {
            headers: { "Content-Type": "application/json" },
            method: "post",
            body: JSON.stringify(userinfo, jobarr),
          };
          fetch(url2, postdata)
            .then((response) => response.json())
            .then((info) => {
              console.log("apply info", job);
              alert("Applied Successfully !");
            });
          // apply end
        });
    }
  };

  return (
    <div className="container mt-4">
       <h2 className="mb-4 text-center jobsolgan text-success">
          {" "}
          <b>WE ARE HIRING{" "}</b> 
        </h2>
      <h2 className="mb-4 text-center text-danger"> <b>{joblist.length} Recent Jobs</b> </h2>
      {joblist.map((job, index) => {
        return (
          <div className="card mt-4 " key={index}>
            <div className="card-header text-info">
              {" "}
              <h3 style={{color:'orange'}}> {job.companyname} </h3>
              <h5>{job.jobtitle} </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <b>Experience :</b> {job.exp} Years &nbsp; &nbsp;&nbsp;&nbsp;{" "}
                <b>Salary :</b> {job.salary}
                {"LPA "}{" "}
              </h5>
              <br />

              <p className="card-text">
                <b>Description :</b> {job.jd} .
              </p>

              <p className="card-text">
                <b>Skills :</b> {job.skills} .
              </p>
              <p className="card-text">
                <b>Location :</b> {job.city} .
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={apply.bind(this, job)}
              >
                <i className="fa fa-edit"></i> Apply
              </button>
            </div>
            <div className="card-footer text-body-secondary">
              {job.period} ago
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Homepage;
