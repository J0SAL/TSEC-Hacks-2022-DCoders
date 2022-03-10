import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangepassword = (e) => {
    setPassword(e.target.value);
  };
  var data = {};
  const API = axios.create({ baseURL: 'https://devmeetserver.herokuapp.com' });
  const handleSubmit =async (e) => {
      e.preventDefault()
      const response = await API.post('/user/login', data);
      console.log(response.data);
      if (response.data.message === "Incorrect Password") {
          alert("You Password is Incorrect Kindly Login with Correct Credentials");
          window.location.replace("http://localhost:3000/signin");
      } else if (response.data.message === "User Not found" || response.data.message === "Login Failed") {
          alert("Your Account Doesn't Seem To Exists, Kindly Register First");
          window.location.replace("http://localhost:3000/signup");
      } else {
        alert("Login Successfully");
        // console.log(response.data);
        localStorage.clear();
        localStorage.setItem("username",response.data.username);
        localStorage.setItem("email",response.data.email);
        localStorage.setItem("contributions",response.data.contirbutions);
        localStorage.setItem("cpp",response.data.skills.cpp);
        localStorage.setItem("flutter",response.data.skills.flutter);
        localStorage.setItem("javascript",response.data.skills.javascript);
        localStorage.setItem("java",response.data.skills.java);
        localStorage.setItem("python",response.data.skills.python);
        localStorage.setItem("userid",response.data._id);
        window.location.replace("http://localhost:3000/home");
      }
  };
  
  var tempdata = {
    "email": email,
    "password": password,
  };
  data = tempdata;
  console.log(data);

  return (
    <>
      <Header />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">LogIn</h3>
                  <form onSubmit={handleSubmit}>
                    <label className="form-label" for="emailAddress">
                      Email Id:
                    </label>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={handleChangeEmail}
                          />
                        </div>
                        </div>
                            <label className="form-label" for="password">
                              Password
                            </label>
                        <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">

                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              onChange={handleChangepassword}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center fs-6">
                      {" "}
                      <a href="/signup">Don't Have an Account?</a> or{" "}
                      <a href="/signup">Sign up</a>{" "}
                    </div>
                    <div className="mt-4 pt-2" align="center">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Login"
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

export default SignIn;
