import { useState, useEffect } from "react";
import "../index.css";
function UserHomepage() {
  let [joblist, setJoblist] = useState([]);
  let appliedjob = [];

  const setappliedjob = () => {
    
    fetch("http://localhost:1234/applyapi?id="+localStorage.getItem("userid"))
      .then((response) => response.json())
      .then((info) => {
       console.log("appliedjob:->", info);
      // console.log("fullname",localStorage.getItem('fullname'),'usertype',localStorage.getItem('usertype'),'userid',localStorage.getItem('userid'))
        appliedjob = [...info];
      });
  };
  const getjob = () => {
    setappliedjob();
    fetch("http://localhost:1234/jobapi")
      .then((response) => response.json())
      .then((info) => {
        console.log("info:->", info)
        console.log("appliedjob", appliedjob);
        //let rem=
        let filteredArray = info.filter(
          (item1) => !appliedjob.some((item2) => item2.jobid === item1.id)
        );
        //console.log(filteredArray);
        setJoblist(filteredArray);
      });
  };

  useEffect(() => {
    getjob();
  },[]);

  const apply = (job) => {
    let url = "http://localhost:1234/userapi/" + localStorage.getItem("userid");
    fetch(url)
      .then((response) => response.json())
      .then((userinfo) => {
        userinfo["jobid"] = job.id;
        userinfo["companyid"] = job.companyid;
        userinfo["jobtitle"] = job.jobtitle;
        userinfo["exp"] = job.exp;
        userinfo["city"] = job.city;
        userinfo["salary"] = job.salary;
        userinfo["skills"] = job.skills;
        userinfo["jd"] = job.jd;
        userinfo["period"]=job.period;
        userinfo['name']=job.companyname;
        // apply start
        let url2 = "http://localhost:1234/applyapi";
        let postdata = {
          headers: { "Content-Type": "application/json" },
          method: "post",
          body: JSON.stringify(userinfo),
        };
        fetch(url2, postdata)
          .then((response) => response.json())
          .then((info) => {
           let remjob = joblist.filter((x) => x.id != info.jobid);
            
           setJoblist(remjob);
            alert("Applied Successfully !");
          });
        // apply end
      });
  };

  return (
    
      <div className="container mt-4">
        
        <h2 className="mb-4 text-center"> {joblist.length} Recent Jobs </h2>
        {joblist.map((job, index) => {
          return (
            
              <div className="card mt-3 " key={index}>
                <div className="card-header text-info"> <h3 style={{color:'orange'}}> {job.companyname} </h3>
              <h5>{job.jobtitle} </h5></div>
                <div className="card-body">
                  
                <h5 className="card-title"><b>Experience :</b> {' '}{job.exp}{" "} Years &nbsp; &nbsp;&nbsp; <b>Salary :</b>{" "}
                {job.salary}{"LPA "} </h5>
                

                <p className="card-text">
                    
                    <b>Description :</b> {" "}
                    {job.jd}{" "} .
                  </p>
                

                  <p className="card-text">
                    
                    <b>Skills :</b> {" "}
                    {job.skills}{" "} .
                  </p>
                  <p className="card-text">
                    
                    <b>Location :</b> {" "}
                    {job.city}{" "} .
                  </p>
                  <button
                            className="btn btn-primary btn-sm"
                            onClick={apply.bind(this, job)}
                          >
                            <i className="fa fa-edit"></i> Apply
                          </button>
                </div>
                <div className="card-footer text-body-secondary">{job.period} ago</div>
              </div>
              
                  
              
              
            
          );
        })}
      </div>
  
  );
}
export default UserHomepage;
