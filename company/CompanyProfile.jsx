
 import { useState,useEffect } from "react";
 function CompanyProfile(){
   let[name, setName] = useState("");
   let[email, setEmail] = useState("");
   let[password, setPassword] = useState("");
   let[contact, setContact] = useState("");
   let[dateofest, setDateofest] = useState("");
   let[work, setWork] = useState("");
   let[state, setState] = useState("");
   let[city, setCity] = useState("");
   let[address, setAddress] = useState("");
   
 
 
 
   const getProfile = () =>{
       let url = "http://localhost:1234/userapi/"+localStorage.getItem("userid");
       fetch(url)
       .then(response=>response.json())
       .then(user=>{
           setName( user.name );
           setEmail( user.email );
           setPassword( user.password );
           setContact( user.contact );
           setDateofest( user.dateofest );
           setWork( user.work );
           setState( user.state );
           setCity( user.city );
           setAddress( user.address );
           
       })
   }
    
 
   useEffect(()=>{
       getProfile();
   }, []);
 
   let[message, setMessage] = useState("");
   const update = (obj) =>{
       obj.preventDefault(); // page should not reload 
           let userinfo = {
               "name": name,
               "contact": contact,
               "email": email,
               "password": password,
               "dateofest": dateofest,
               "work": work,
               "state": state,
               "city": city,
               "address": address,
               
               
           }
           let url = "http://localhost:1234/userapi/"+localStorage.getItem("userid");
       let postdata = {
           headers:{'Content-Type':'application/json'},
           method:'put',
           body:JSON.stringify(userinfo)
       }
       fetch(url, postdata)
       .then(response=>response.json())
       .then(info=>{
           setMessage("Your Profile Updated Successfully !");
       })
   }
 
   return(
       <div className="container mt-4">
           <div className="row mb-2">
               <div className="col-lg-12 text-center">
                   <h1 className="text-primary"> Manage Profile </h1>
                   <p className="text-danger"> {message} </p>
               </div>
           </div>
 
           <div className="row">
               <div className="col-xl-3"></div>
               <div className="col-xl-6">
                   <form onSubmit={update}>
                       <div className="card">
                           <div className="card-header"> <i className="fa fa-user"></i> Edit / Update Company Profile </div>
                           <div className="card-body">
 
                               <div className="row mb-3">
                                   <div className="col-xl-6">
                                       <label> Name </label>
                                       <input type="text" className="form-control" 
                                       value={name} onChange={obj=>setName(obj.target.value)}/>
                                   </div>
                                   <div className="col-xl-6">
                                       <label> Contact No </label>
                                       <input type="tel" className="form-control"
                                       value={contact} onChange={obj=>setContact(obj.target.value)}/>
                                   </div>
                               </div>
 
                               <div className="row mb-3">
                                   <div className="col-xl-6">
                                       <label> Email Id </label>
                                       <input type="email" className="form-control"
                                       value={email} onChange={obj=>setEmail(obj.target.value)}/>
                                   </div>
                                   <div className="col-xl-6">
                                       <label> Password </label>
                                       <input type="text" 
                                        
                                       className="form-control"
                                       minLength="8"
                                       value={password} onChange={obj=>setPassword(obj.target.value)}/>
                                   </div>
                               </div>
 
                               <div className="row mb-3">
                                   <div className="col-xl-6">
                                       <label> Date of Established </label>
                                       <input type="date" className="form-control"
                                       value={dateofest} onChange={obj=>setEstablished(obj.target.value)}/>
                                   </div>
                                   <div className="col-xl-6">
                                       <label> Work </label>
                                       <input type="text" className="form-control"
                                       value={work} onChange={obj=>setWork(obj.target.value)}/>
                                   </div>
                               </div>
 
                               <div className="row mb-3">
                                   <div className="col-xl-6">
                                       <label> State Name </label>
                                       <input type="text" className="form-control"
                                       value={state} onChange={obj=>setState(obj.target.value)}/>
                                   </div>
                                   <div className="col-xl-6">
                                       <label> City Name </label>
                                       <input type="text" className="form-control"
                                       value={city} onChange={obj=>setCity(obj.target.value)}/>
                                   </div>
                               </div>
 
                               <div className="row mb-3">
                                   <div className="col-xl-12">
                                       <label> Full Address </label>
                                       <textarea className="form-control" value={address} onChange={obj=>setAddress(obj.target.value)}></textarea>
                                   </div>
                               </div>
 
                           </div>
                           <div className="card-footer text-center">
                               <button type="submit" className="btn btn-warning me-2"> Update Profile </button>
                           </div>
                       </div>
                   </form>
               </div>
               <div className="col-xl-3"></div>
           </div>
       </div>
   )
 }
export default CompanyProfile;