import React from "react";
import "./mydes.css";
const ListProjects = () => {
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
          <div class="col-lg-9">
            <div class="card3 card-margin">
              <div class="card-header no-border">
                <h3 class="card-title">Waste Management System</h3>
                
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
                        By team Meta
                      </span>
                      <span class="widget-49-meeting-time">
                        contributors : 5
                      </span>

                    </div>
                  </div>
                  <hr/>
                  <ul class="widget-49-meeting-points">
                    <li class="widget-49-meeting-item">
                      <span>A Web Application App aimed towards reducing city waste in a smart way. Developed as a HACKATHON submission for Octa-Hacks-4.0</span>
                      <span>City Waste Management is an Web Application through an individual can directly make a request to clear garbages in his/any region. An Individual has to register into the application and just upload the data i.e. locality and image of uncleaned area. This request will directly sent to respective authority assigned to that area so that he'll be able to take some actions on the same. The continuos progress of the request will be continuosly updated into users portal.e</span>
                    </li>
                    <br/>
                  </ul>
                  <div class="widget-49-meeting-action">
                    <a class="btn btn-sm btn-flash-border-primary">
                      completed :<a href=" https://github.com/J0SAL" target="_blank">link</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="card3 card-margin">
              <div class="card-header no-border">
                <h3 class="card-title">ASL to English</h3>
                
              </div>
              <div class="card-body pt-0">
                <div class="widget-49">
                  <div class="widget-49-title-wrapper">
                    <div class="widget-49-date-primary">
                      <span class="widget-49-date-day">15</span>
                      <span class="widget-49-date-month">Mar</span>
                    </div>
                    <div class="widget-49-meeting-info">
                      <span class="widget-49-pro-title">
                        By JOSAL
                      </span>
                      <span class="widget-49-meeting-time">
                        contributors : 1
                      </span>

                    </div>
                  </div>
                  <hr/>
                  <ul class="widget-49-meeting-points">
                    <li class="widget-49-meeting-item">
                      <span>Reads your hand signs and translates them to English words using Tensorflow object detection API
The model is built using transfer learning from pretrained model ssd_mobilenet model
The dataset is made manually by running the Image collection python file that collects images from your webcam for all the mentioned below signs in the American Sign Language</span>
                    </li>
                    <br/>
                  </ul>
                  <div class="widget-49-meeting-action">
                    <a class="btn btn-sm btn-flash-border-primary">
                     ongoing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="card3 card-margin">
              <div class="card-header no-border">
                <h3 class="card-title">Cropy</h3>
                
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
                        By team JOJEET
                      </span>
                      <span class="widget-49-meeting-time">
                        contributors : 5
                      </span>

                    </div>
                  </div>
                  <hr/>
                  <ul class="widget-49-meeting-points">
                    <li class="widget-49-meeting-item">
                      <span>A ML website that helps boost productivity by recommending best crop to grow and best fertilizers to use.</span>
                      <span>The aim of this project is to help farmers increase their profit by suggesting best crops and fertilizers.</span>
                    </li>
                    <br/>
         
                  </ul>
                  <div class="widget-49-meeting-action">
                    <a class="btn btn-sm btn-flash-border-primary">
                      completed :<a href=" https://github.com/J0SAL" target="_blank">link</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="card3 card-margin">
              <div class="card-header no-border">
                <h3 class="card-title">ML-Heart-disease-detection
</h3>
                
              </div>
              <div class="card-body pt-0">
                <div class="widget-49">
                  <div class="widget-49-title-wrapper">
                    <div class="widget-49-date-primary">
                      <span class="widget-49-date-day">10</span>
                      <span class="widget-49-date-month">Apr</span>
                    </div>
                    <div class="widget-49-meeting-info">
                      <span class="widget-49-pro-title">
                        By team JOHIL
                      </span>
                      <span class="widget-49-meeting-time">
                        contributors : 3
                      </span>

                    </div>
                  </div>
                  <hr/>
                  <ul class="widget-49-meeting-points">
                    <li class="widget-49-meeting-item">
                      <span>A simple ML based website which detects the probability of user having heart disease.</span>
                      <span>Heart disease is the leading cause of death in the United States, causing about 1 in 4 deaths.
I have created a web app which simplifies the process of heart disease detection. The patients records are passed to the program. These details are then passed to classification model which predicts whether a patient has heart disease or not</span>
                    </li>
                    <br/>
      
                  </ul>
                  <div class="widget-49-meeting-action">
                    <a class="btn btn-sm btn-flash-border-primary">
                      ongoing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default ListProjects;
