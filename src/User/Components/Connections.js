import React from "react";
import "./Connections.css";
import Uheader from "./Uheader";
import { data } from "./data";

const Connections = () => {
  return (
    <>
    <Uheader />
      <div class="curved">
        <div class="container mt-5 d-flex justify-content-center makerow">
          {data.map((item) => (
            <div class="p-3 giveborder">
              <div class="d-flex align-items-center flex-row connectionsdiv">
                <div class="image">
                  {" "}
                  <img src={item.image} class="rounded" width="155" />{" "}
                </div>
                <div class="ml-3 rightwidth">
                  <h4 class="mb-0 mt-0">{item.name}</h4>{" "}
                  <span  >{item.role}</span>
                  <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats mbottom">
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
                  <br />
                  <div class="button mt-2 d-flex flex-row align-items-center">
                    {" "}
                    <button class="btn btn-sm btn-outline-primary w-100 givemargin">
                      Cancel
                    </button>{" "}
                    <button class="btn btn-sm btn-primary w-100 ml-2 givemargin">
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
