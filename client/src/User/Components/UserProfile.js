import React, { useEffect, useState } from 'react'
import "./mydes.css"
const UserProfile = () => {
  const [data,setData]=useState({});
  useEffect(()=>{
    setData(localStorage.getItem('userData'));
  },[]);
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const contributions = Math.floor(Math.random() * 11);
  const cpp = localStorage.getItem("cpp");
  const flutter = localStorage.getItem("flutter");
  const python = localStorage.getItem("python");
  const java = localStorage.getItem("java");
  const javascript = localStorage.getItem("javascript");
  const list = [cpp,java,python,javascript,flutter];
  const Course = ["C/C++","Java","Python","JavaScript","Flutter"];
  
  return (
      <>
    <div class="container">
    <div class="main-body">
    <div class="card3" style={{marginTop:"5rem"}}align="center">
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card3">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{username}</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Contributions: {contributions}</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary"style={{marginLeft:"1rem"}}>Contact</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card3 mt-3" style={{marginLeft:"3rem",marginTop:"2rem"}}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary">https://MeDeveloper.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary"><a href="https://github.com/J0SAL/TSEC-Hacks-2022-DCoders/branches" target="_blank">JOSAL/07</a></span>
                  </li>
                  

                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card3 mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {username}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {email}
                    </div>
                  </div>
                  <hr/>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Contributions</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {contributions}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm"align="center">
              
                <div class="col-sm-6 mb-3"align="center">
                 
                    <div class="row" >
                     <div style={{marginLeft:"18rem"}}><h3><i class="material-icons text-info mr-2" ></i>Tech Stacks</h3>
</div>
                                
                    <div class="card3 h-100" style={{marginLeft:"18rem"}}>
                      {
                        list.map((item,i)=> {if(item=="1"){
                            return <><small>{Course[i]}</small>
                            <div class="progress mb-3" style={{height:"5px"}}>
                              <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="95"></div>
                            </div></>;
                          }}
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
    </div>
</>
  )
}

export default UserProfile;