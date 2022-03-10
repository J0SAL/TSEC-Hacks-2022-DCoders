import React, { useEffect, useState } from "react";
import axios from "axios";

import "./mydes.css";
const ListProjects = () => {
  const API = axios.create({ baseURL: 'https://devmeetserver.herokuapp.com'});
  const [data,setData] = useState([]);
  useEffect(async ()=>{
    const response = await API.get(`/project/user`);
    const projectData=response.data;
    setData(...data,projectData);
  },[]);
  console.log(data);
  return (
    <>
      <br />
      <br />

      <br />
      <br />
      <div className="section-header" align="center">
        <h2>Your Projects</h2>
      </div>

      <div class="container ">
        <div class="row mycontainer">
          {
            data.map((project,i)=>{
              const contributors  = Math.floor(Math.random() * 11);
              const cpp = project.domains.cpp;
              const flutter = project.domains.flutter;
              const python = project.domains.python;
              const java = project.domains.java;
              const javascript = project.domains.javascript;
              const list = [cpp,java,python,javascript,flutter];
              const Course = ["C/C++","Java","Python","JavaScript","Flutter"];
            return (<div class="col-lg-9">
            <div class="card3 card-margin">
              <div class="card-header no-border">
                <h3 class="card-title">{project.projectname}</h3>
                
              </div>
              <div class="card-body pt-0">
                <div class="widget-49">
                  <div class="widget-49-title-wrapper">
                    <div class="widget-49-date-primary">
                      <span class="widget-49-date-day">10</span>
                      <span class="widget-49-date-month">Mar</span>
                    </div>
                    <div class="widget-49-meeting-info">
                      <span class="widget-49-pro-title">
                        By <b>{project.ownername}</b>
                      </span>
                      <span class="widget-49-meeting-time">
                        contributors : {contributors}
                      </span>
                      
                    </div>
                    <div style={{width:'50%',marginLeft:'16rem'}}>{
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
                  <hr/>
                  <ul class="widget-49-meeting-points">
                    <li class="widget-49-meeting-item">
                      <span>{project.projectdesc}</span>
                    </li>
                    <br/>
                  </ul>
                  <div class="widget-49-meeting-action">
                  {project.project_status} :
                      <a href={`${project.projecturl}`} target="_blank" style={{color:"blue"}}>link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>);})
          }
        </div>
      </div>
    </>
  );
};

export default ListProjects;
