import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/LogReg/SignIn";
import SignUp from "./Components/LogReg/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import UserHome from "./User/Home/UserHome";
import UProjects from "./User/Components/UProjects";
import FeatureService from "./Components/FeatureService/FeatureService";
import Contribute from "./User/ContributeProject/Contribute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/home/projects" element={<UProjects />} />
          <Route path="/home/contribute" element={<Contribute />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
