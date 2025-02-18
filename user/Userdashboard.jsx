import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faLocationDot, faIndianRupeeSign, faFileLines, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState ,useEffect} from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function UserDashboard(){
  let [joblist, setJoblist] = useState([]);

  const getjob = () => {
    
      fetch("http://localhost:1234/applyapi?id="+localStorage.getItem("userid"))
          .then(response => response.json())
          .then(info => {
            console.log(info)
              setJoblist(info);
          })
  }

  useEffect(() => {
      getjob();
  }, []);

  return (
    <>
    <h2 className="mt-4 mb-4 text-center text-primary"> 
     You Have Applied For  {joblist.length} Jobs 
     </h2>
      
      <div className="container mt-4">
      {joblist.map((job, index) => {
        return (
          <div className="row mb-4" key={index}>
            <div className="col-xl-12">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <div className="row">
                  <h3 style={{color:'orange'}}> {job.name} </h3>
                  <h5>{job.jobtitle} </h5>

                    <div className="col-xl-2 mb-3">
                      {" "}
                      <FontAwesomeIcon icon={faBriefcase} /> {job.exp} Yrs
                    </div>

                    <div className="col-xl-2 mb-3">
                      {" "}
                      <FontAwesomeIcon icon={faLocationDot} /> {job.city}{" "}
                    </div>

                    <div className="col-xl-1 mb-3">
                      {" "}
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {job.salary}{" Lpa"}
                    </div>
                    <br />

                    <div className="col-xl-12 mb-3">
                    <FontAwesomeIcon icon={faGithub} /> Skills :{" "}
                      {job.skills}{" "}
                    </div>
                    

                    <div className="col-xl-12 mb-2">
                      {" "}
                      <FontAwesomeIcon icon={faFileLines} /> Job
                      Description : {job.jd}{" "}
                    </div>

                    <div className="card-footer text-body-secondary">{job.period} ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  )
}
export default UserDashboard;