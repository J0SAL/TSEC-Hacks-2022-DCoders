import React from "react";
import "./Connections.css";
import Uheader from "./Uheader";

const Connections = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sahil Chorghe",
      role: "Senior Developer",
      projects: 50,
      followers: 388,
      rating: 8.9,
    },
    {
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=100",
      name: "Sachin Vishwa",
      role: "Flutter Developer",
      projects: 40,
      followers: 560,
      rating: 9.2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Joy Almedia",
      role: "Web Developer",
      projects: 23,
      followers: 345,
      rating: 7.2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Jeet Mistry",
      role: "Blockchain Developer",
      projects: 67,
      followers: 239,
      rating: 7.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Jay Mehta",
      role: "Web Developer",
      projects: 57,
      followers: 250,
      rating: 9,
    },
    {
      image:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Aartee Chimate",
      role: "Data Analyst",
      projects: 60,
      followers: 210,
      rating: 8.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Shraddha Mishra",
      role: "Web Developer",
      projects: 50,
      followers: 240,
      rating: 6.5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Ojas Patil",
      role: "Android Developer",
      projects: 42,
      followers: 230,
      rating: 8.0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Tejas Patil",
      role: "Blockchain Developer",
      projects: 50,
      followers: 110,
      rating: 7.5,
    },
  ];
  return (
    <>
    <Uheader />
      <div class="curved">
        <div class="container mt-5 d-flex justify-content-center makerow">
          {data.map((item) => (
            <div class="p-3">
              <div class="d-flex align-items-center flex-row connectionsdiv">
                <div class="image">
                  {" "}
                  <img src={item.image} class="rounded" width="155" />{" "}
                </div>
                <div class="ml-3 w-200">
                  <h4 class="mb-0 mt-0">{item.name}</h4>{" "}
                  <span>{item.role}</span>
                  <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column">
                      {" "}
                      <span class="articles">Projects</span>
                      {"   "}
                      <span class="number1">{item.projects}</span>{" "}
                    </div>
                    <div class="d-flex flex-column">
                      {" "}
                      <span class="followers">Followers</span>
                      {"   "}
                      <span class="number2">{item.followers}</span>{" "}
                    </div>
                    <div class="d-flex flex-column">
                      {" "}
                      <span class="rating">Rating</span>
                      {"   "}
                      <span class="number3">{item.rating}</span>{" "}
                    </div>
                  </div>
                  <div class="button mt-2 d-flex flex-row align-items-center">
                    {" "}
                    <button class="btn btn-sm btn-outline-primary w-100">
                      Cancel
                    </button>{" "}
                    <button class="btn btn-sm btn-primary w-100 ml-2">
                      Connect
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Connections;
