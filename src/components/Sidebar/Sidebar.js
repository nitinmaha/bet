import React from "react";
import { Link } from "react-router-dom";

//components
import Accordion from "react-bootstrap/Accordion";

//scss
import style from "./Sidebar.module.scss";
import Treeview from "./Treeview/Treeview";

const Sidebar = () => {
  return (
    <div className={style.sidebarWrapper}>
      <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Racing Sports</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/#">Horse Racing</Link>
              </li>
              <li>
                <Link to="/#">Greyhound Racing</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Others</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/#"><span className="blink_me">Our Casino</span></Link>
              </li>
              <li>
                <Link to="/#"><span className="blink_me">Our Virtual</span></Link>
              </li>
              <li>
                <Link to="/#">Live Casino</Link>
              </li>
              <li>
                <Link to="/#">Slot Game</Link>
              </li>
              <li>
                <Link to="/#">Fantasy Game</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>All Sports</Accordion.Header>
          <Accordion.Body>
            <Treeview />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidebar;
