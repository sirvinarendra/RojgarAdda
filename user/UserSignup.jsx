import { useState } from "react";
import { Link } from "react-router";

function CreateUserAccount() {
  let [userinfo,setUserinfo] =useState({});
  
  const pickValue = (obj) => {
    userinfo[obj.target.name]=obj.target.value;
    setUserinfo(userinfo)
  };

  const save = (formobj) => {
    formobj.preventDefault();

    let url='http://localhost:1234/userapi';
    let postdata={
      headers:{'Content-Type':'application/json'},
      method:'post',
      body:JSON.stringify(userinfo)
    }
    fetch(url,postdata)
    .then(response=>response.json())
    .then(info=>{
      alert(userinfo.fname +'-registered successfully ');
      formobj.target.reset();
    })
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-3"></div>
        <div className="col-xl-6">
          <h2 className="text-center text-info">User Account</h2>
          <form onSubmit={save}>
            <div className="card">
              <div className="card-header">
                {" "}
                <i className="fa fa-user-plus"></i> Create Account{" "}
                <Link to="/login" className="float-end">
                  {" "}
                  Already have Account ?{" "}
                </Link>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-xl-6">
                    <label> Full Name </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      required
                      onChange={pickValue}
                    />
                  </div>
                  <div className="col-xl-6">
                    <label> Mobile No </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                       required
                      onChange={pickValue}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-6">
                    <label> Email Id </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      onChange={pickValue}
                    />
                  </div>
                  <div className="col-xl-6">
                    <label> Password </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      minLength="8"
                      onChange={pickValue}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-6">
                    <label> Date of Birth </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      required
                      onChange={pickValue}
                    />
                  </div>
                  <div className="col-xl-6">
                    <label> Education </label>
                    <input
                      type="text"
                      className="form-control"
                      name="education"
                      required
                      onChange={pickValue}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-6">
                    <label> State Name </label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required
                      onChange={pickValue}
                    />
                  </div>
                  <div className="col-xl-6">
                    <label> City Name </label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      required
                      onChange={pickValue}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label> Full Address </label>
                    <textarea
                      className="form-control"
                      name="address"
                      required
                      onChange={pickValue}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button type="submit" className="btn btn-primary me-2">
                  {" "}
                  Submit{" "}
                </button>
                <button type="reset" className="btn btn-warning">
                  {" "}
                  Clear{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-3"></div>
      </div>
    </div>
  );
}
export default CreateUserAccount;
