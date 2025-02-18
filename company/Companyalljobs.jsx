import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase,faHouse, faUserPlus, faLock, faDeleteLeft, faTrash, faLocationDot, faFileLines, faBriefcase, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Companyalljobs = () => {
    let [joblist, setJoblist] = useState([]);

    const getjob = () => {
        fetch("http://localhost:1234/jobapi?companyid="+localStorage.getItem("userid"))
            .then(response => response.json())
            .then(info => {
                setJoblist(info);
            })
    }

    useEffect(() => {
        getjob();
    });

    const deletejob = (id) => {
        let url = "http://localhost:1234/jobapi/" + id;
        fetch(url, { "method": "delete" })
            .then(response => response.json())
            .then(info => {
                console.log(info);
                getjob();
            })
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4"> {joblist.length} Job Posted By You... </h2>
                {
                    joblist.map((job, index) => {
                        return (
                            <div className="row mb-4"  key={index}>
                                <div className="col-xl-12">
                                    <div className="card rounded shadow-lg">
                                        <div className="card-header">
                                            <Link to={`/jobapplylist/${job.id}`}> <b style={{fontSize:'25px'}}>{job.jobtitle}</b> </Link>
                                            <FontAwesomeIcon className='mt-2' style={{float:'right'}} icon={faTrash} onClick={obj => deletejob(job.id)
                                             }/>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xl-2 mb-2"> <FontAwesomeIcon icon={faBriefcase} /> {job.exp} Yrs</div>
                                                <div className="col-xl-2 mb-2">  <FontAwesomeIcon icon={faLocationDot} /> {job.city} </div>
                                                <div className="col-xl-1 mb-2"> <FontAwesomeIcon icon={faIndianRupeeSign} /> {job.salary} Lpa</div>
                                                <div className="col-xl-7 mb-2"><FontAwesomeIcon icon={faGithub} />  Skills : {job.skills} </div>
                                                <div className="col-xl-12 mb-2"> <FontAwesomeIcon icon={faFileLines} /> Job Description : {job.jd} </div>
                                                <div className="card-footer text-body-secondary">{job.period} ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            
        </div>
    )
}


export default Companyalljobs;