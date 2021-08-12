import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import TableContainer from "./TableContainer"
var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scrol
  }
};
const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (

    <div>

      <Modal className="content" open={true} center>
        <h4 className="border-0 m-0 p-2 modal-title bg-primary text-white">Team Profile Photo Upload</h4>
        <div className="model-bodyTeam">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body text-center p-1" style={{ height: "18rem" }}>
                  <img class="img-fluid image1" align="CENTER" src="https://images.unsplash.com/photo-1578439231583-9eca0a363860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="img" />
                </div>
                <div class="card-footer p-1">
                  <h5 class="border-0 m-0 p-0">Preview Photo</h5></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body text-center" style={{ height: "18rem" }}>
                  <div class="text-danger"></div>
                  <span class="display-5 p-0 my-auto text-muted">  <div className="row">
                    <div className="col-md-6 d-block m-auto">
                      <div>

                        <div className="col-md-2">
                          <div>
                            <span className="cb-hand">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="23"
                                fill="currentColor"
                                class="bi bi-x-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                              </svg>
                            </span>
                          </div>
                          <div>
                            <span className="cb-hand">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="23"
                                fill="currentColor"
                                class="bi bi-save2"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>

                    <div className={"col-md-10 d-block m-auto"}>
                      <div className="row">
                        <div className="col">
                          <img align="CENTER" src="https://images.unsplash.com/photo-1578439231583-9eca0a363860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" className="image5" alt="images" />
                        </div>
                        <div className="col">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="23"
                            fill="currentColor"
                            class="bi bi-x-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </div>
                      </div>

                    </div></span>
                </div>
                <div class="card-footer p-1">
                  <span class="text-danger"><b>NOTE:</b>All profile pictures will go through an approval</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card p-1">
                <div class="card-header p-1 bg-primary">
                  <h6 class="border-0 m-0 p-0 text-white">Words to the Wise</h6>
                </div>
                <div class="card-body p-1 bg-lightblue">
                  <ul class="m-0">
                    <li>Please be mindful of the copyrights of other companies/organization and refrain from repurposing images/logos from their website  without explicit permission from that organization. It is much easier to create a brand new logo or have it done for a small cost. We will reject any logo that seemingly infringes on some other organizations copyright.</li>
                    <li>Any logo that depicts/implies violence, religious affiliation, sexual innuendos, hate will be rejected</li>
                    <li>While taking a team picture, please also be mindful of what else from surroundings gets pulled into the photo. Usually the best photos are the ones taken in the ground/pitch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card p-1">
                <div class="card-header p-1 bg-primary">
                  <h6 class="border-0 m-0 p-0 text-white">Words to the Wise</h6>
                </div>
                <div class="card-body p-1 bg-lightblue">
                  <ul class="m-0">
                    <li>Please be mindful of the copyrights of other companies/organization and refrain from repurposing images/logos from their website  without explicit permission from that organization. It is much easier to create a brand new logo or have it done for a small cost. We will reject any logo that seemingly infringes on some other organizations copyright.</li>
                    <li>Any logo that depicts/implies violence, religious affiliation, sexual innuendos, hate will be rejected</li>
                    <li>While taking a team picture, please also be mindful of what else from surroundings gets pulled into the photo. Usually the best photos are the ones taken in the ground/pitch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card p-1">
                <div class="card-header p-1 bg-primary">
                  <h6 class="border-0 m-0 p-0 text-white">Words to the Wise</h6>
                </div>
                <div class="card-body p-1 bg-lightblue">
                  <ul class="m-0">
                    <li>Please be mindful of the copyrights of other companies/organization and refrain from repurposing images/logos from their website  without explicit permission from that organization. It is much easier to create a brand new logo or have it done for a small cost. We will reject any logo that seemingly infringes on some other organizations copyright.</li>
                    <li>Any logo that depicts/implies violence, religious affiliation, sexual innuendos, hate will be rejected</li>
                    <li>While taking a team picture, please also be mindful of what else from surroundings gets pulled into the photo. Usually the best photos are the ones taken in the ground/pitch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card p-1">
                <div class="card-header p-1 bg-primary">
                  <h6 class="border-0 m-0 p-0 text-white">Words to the Wise</h6>
                </div>
                <div class="card-body p-1 bg-lightblue">
                  <ul class="m-0">
                    <li>Please be mindful of the copyrights of other companies/organization and refrain from repurposing images/logos from their website  without explicit permission from that organization. It is much easier to create a brand new logo or have it done for a small cost. We will reject any logo that seemingly infringes on some other organizations copyright.</li>
                    <li>Any logo that depicts/implies violence, religious affiliation, sexual innuendos, hate will be rejected</li>
                    <li>While taking a team picture, please also be mindful of what else from surroundings gets pulled into the photo. Usually the best photos are the ones taken in the ground/pitch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 text-right">

            <button className="btn btn-primary" >Send Photo</button> &nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" >Cancel</button></div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
