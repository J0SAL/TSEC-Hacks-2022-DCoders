import React from "react";
import "./LogReg.css";
import "./tagsinput.css";
import "./bootstrap.css";
import Header from "../Header/Header";
import axios from 'axios';

import { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [techStack1, setTechStack1] = useState("");
  const [techStack2, setTechStack2] = useState("");
  const [techStack3, setTechStack3] = useState("");
  const [techStack4, setTechStack4] = useState("");
  const [techStack5, setTechStack5] = useState("");
  const [url, setUrl] = useState("");
  var data = {};
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeCpassword = (e) => {
    setCpassword(e.target.value);
  };
  const handleChangeURL = (e) => {
    setUrl(e.target.value);
  };
  const API = axios.create({ baseURL: 'https://devmeetserver.herokuapp.com' });
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (data.password === data.cpassword) {
      const response = await API.post('/user/register', data);
      if(response.data.message === "Registration Failed"){
      }
      alert(response.data.message);
      window.location.replace("http://localhost:3000/home");
  } else {
      alert("Password Should be Same in Both the Field : Password, Confirm Password")
  }
  // console.log("Data Sent Successfully");

  // window.location.reload();
  };
    var tempdata = {
      "name": name,
      "email": email,
      "password": password,
      "cpassword": cpassword,
      "cpp": techStack1.length == 0 ? "0" : "1",
      "java": techStack2.length == 0 ? "0" : "1",
      "python": techStack3.length == 0 ? "0" : "1",
      "javascript": techStack4.length == 0 ? "0" : "1",
      "flutter": techStack5.length == 0 ? "0" : "1"
    };
    data = tempdata;
    console.log(data);

 

  return (
    <>
      <Header />
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            onChange={handleChangeName}
                          />
                          <label className="form-label" for="fullname">
                            Full Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            onChange={handleChangeEmail}
                          />
                          <label for="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            onChange={handleChangePassword}
                          />
                          <label className="form-label" for="password">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="cpassword"
                            className="form-control form-control-lg"
                            onChange={handleChangeCpassword}
                          />
                          <label className="form-label" for="cpassword">
                            Confirm Password
                          </label>
                        </div>
                      </div>
                    </div>

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

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="url"
                            className="form-control form-control-lg"
                            id="giturl"
                            onChange={handleChangeURL}
                          />
                          <label for="giturl" className="form-label">
                            Github Profile URL
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center fs-6">
                      {" "}
                      <a href="/signin">Already Have an Account</a> ?{" "}
                      <a href="/signin">Login</a>{" "}
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                        align="center" 
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
