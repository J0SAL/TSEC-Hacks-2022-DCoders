import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/LogReg/SignIn";
import SignUp from "./Components/LogReg/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import UserHome from "./User/Home/UserHome";
import UProjects from "./User/Components/UProjects";
import Connections from "./User/Components/Connections";
import FeatureService from "./Components/FeatureService/FeatureService";
import Contribute from "./User/ContributeProject/Contribute";
import UserProfile from "./User/Components/UserProfile";
import MyContribution from "./User/ContributeProject/MyContribution";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/projects" element={<UProjects />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/mycontribution" element={<MyContribution />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
