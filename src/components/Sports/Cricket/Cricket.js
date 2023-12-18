import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//scss
import "./Cricket.scss";

//images
import liveTv from "../../../assets/lock.jpg";
import MatchData from "./MatchData";

const Cricket = () => {
  useEffect(() => {
    document.body.classList.add("details-page");
  }, []);

  return (
    <div>
      <div className="center-main-container detail-page">
        <div className="center-container">
          <div className="detail-page-container">
            <div className="game-header">
              <span>South Africa v India</span>
              <span className="float-right">17/12/2023 13:30:00</span>
            </div>
            <div className="d-xl-none">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className=""
            >
              <Tab
                eventKey="home"
                title="
                  Odds"
              >
                <MatchData />
              </Tab>
              <Tab eventKey="profile" title="Matched Bet (0)">
                <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Live Match</Accordion.Header>
                    <Accordion.Body>
                      <div className="iframe-body">
                        <img src={liveTv} alt="Not Available" />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Others</Accordion.Header>
                    <Accordion.Body>
                      <div className="my-bets">
                        <div className="table-responsive w-100">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Matched Bet</th>
                                <th className="text-end">Odds</th>
                                <th className="text-end">Stake</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab
                eventKey="contact"
                title={<i className="fas fa-tv" />}
                disabled
              >
                Tab content for Contact
              </Tab>
            </Tabs>
            </div>
            <div className="d-none d-xl-flex flex-wrap">
              <MatchData />
            </div>
          </div>
        </div>
        <div className="sidebar right-sidebar">
          <a className="bet-nation-game-name" href="/casino/ballbyball">
            <i className="fas fa-info-circle" />
            <span>Ball by Ball</span>
          </a>

          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Live Match</Accordion.Header>
              <Accordion.Body>
                <div className="iframe-body">
                  <img src={liveTv} alt="Not Available" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Others</Accordion.Header>
              <Accordion.Body>
                <div className="my-bets">
                  <div className="table-responsive w-100">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Matched Bet</th>
                          <th className="text-end">Odds</th>
                          <th className="text-end">Stake</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Cricket;
