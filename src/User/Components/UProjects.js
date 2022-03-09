import React from "react";
import { useState } from "react";
import ListProjects from "./ListProjects";
import "./UProjects.css";
// import Header from "../../Components/Header/Header";
import Uheader from "./Uheader";

const UProjects = () => {
  const [pname, setPname] = useState("");
  const [pdesc, setPdesc] = useState("");
  const [techStack1, setTechStack1] = useState("");
  const [techStack2, setTechStack2] = useState("");
  const [techStack3, setTechStack3] = useState("");
  const [techStack4, setTechStack4] = useState("");
  const [techStack5, setTechStack5] = useState("");
  var data = {};
  const handlepName = (e) => {
    setPname(e.target.value);
  };
  const handlepDesc = (e) => {
    setPdesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("..submitting the file");
    // window.location.reload();
  };
  var tempdata = {
    pname: pname,
    pdesc: pdesc,
    techStack1: techStack1.length === 0 ? "0" : "1",
    techStack2: techStack2.length === 0 ? "0" : "1",
    techStack3: techStack3.length === 0 ? "0" : "1",
    techStack4: techStack4.length === 0 ? "0" : "1",
    techStack5: techStack5.length === 0 ? "0" : "1",
  };
  data = tempdata;
  console.log(data);

  return (
    <>
      <Uheader />
      <section className="get-in-touch">
        <div className="container py-5 h-100  justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card4 shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
               
              >
                  <br />
                <div className="card-body p-4 p-md-5 justify-content-center align-items-center">
                
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 titles " style={{marginBottom:"-3rem"}}>
                  
                    Add Projects
                  </h3>
                  <br />
                  <br />
                  <form onSubmit={handleSubmit} className="forms">
                    <div className="row form-field">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline ">
                          <input
                            type="text"
                            id="projectName"
                            className="form-control form-control-lg input-text js-input"
                            onChange={handlepName}
                          />
                          <label className="form-label" for="projectName">
                            Project Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="projectDesc"
                            onChange={handlepDesc}
                          />
                          <label for="projectDesc" className="form-label">
                            Project Description
                          </label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name="C/C++"
                          value="C/C++"
                          onChange={(e) => {
                            setTechStack1(e.target.value);
                          }}
                          style={{ margin: "5px" }}
                        />
                        C/C++ <br />
                        <input
                          type="checkbox"
                          name="Java"
                          value="Java"
                          style={{ margin: "5px" }}
                          onChange={(e) => {
                            setTechStack2(e.target.value);
                          }}
                        />{" "}
                        Java <br />
                        <input
                          type="checkbox"
                          name="Python"
                          value="Python"
                          style={{ margin: "5px" }}
                          onChange={(e) => {
                            setTechStack3(e.target.value);
                          }}
                        />{" "}
                        Python <br />
                        <input
                          type="checkbox"
                          name="JavaScript"
                          value="JavaScript"
                          style={{ margin: "5px" }}
                          onChange={(e) => {
                            setTechStack4(e.target.value);
                          }}
                        />{" "}
                        JavaScript <br />
                        <input
                          type="checkbox"
                          name="Flutter"
                          value="Flutter"
                          style={{ margin: "5px" }}
                          onChange={(e) => {
                            setTechStack5(e.target.value);
                          }}
                        />{" "}
                        Flutter <br />
                        <label
                          for="tags"
                          className="form-label"
                          style={{ marginLeft: "10px" }}
                        >
                          Enter Your Favorite TechStack
                        </label>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="mt-4 pt-2" align="center"  >
  
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                        align="center"
                        style={{marginBottom:"1rem"}}
                      />
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListProjects />
      </section>
    </>
  );
};

export default UProjects;
