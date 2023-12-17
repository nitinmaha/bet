import React, { useState } from "react";

//scss
import style from "./Header.module.scss";

//image
import logo from "../../assets/png/logo.png";

//components
import Input from "../Input/Input";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState();

  const showSearch = () => {
    setSearchInput(!searchInput);
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const userButton = (
    <div>
      Demo<i class="fas fa-chevron-down ms-1"></i>
    </div>
  );

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link className="d-xl-none" to="/">
          <i className="fas fa-home me-1" />
        </Link>
        <Link to="/">
          <img src={logo} alt="UP247" />
        </Link>
      </div>
      <div className={style.userDetails}>
        <div className={`${style.searchBoxContainer} d-none d-xl-block`}>
          <div className={style.searchBox}>
            <div className={searchInput ? `${style.active}` : null}>
              <Input type="text" placeholder="Search Here" />
            </div>
            <span onClick={showSearch}>
              <i className="fas fa-search-plus"></i>
            </span>
          </div>
        </div>
        <div className={`${style.rules} ms-3`}>
          <strong>Rules</strong>
        </div>
        <div className={`${style.userBalance} ms-1 ms-xl-3`}>
          <div className="">
            <span>Balance:</span>
            <b>1500</b>
          </div>
          <div className="ms-xl-0 ms-1">
            <span>Exp:</span>
            <b className={style.pointer}>0</b>
            <div
              className={`${style.userDropdown} ms-2 ms-xl-3 d-inline-block d-xl-none dropdown-toggle`}
            >
              <DropdownButton align="end" title={userButton} id="demo-id">
                <Dropdown.Item eventKey="1">Account Statement</Dropdown.Item>
                <Dropdown.Item eventKey="2">Current Bet</Dropdown.Item>
                <Dropdown.Item eventKey="3">Casino Results</Dropdown.Item>
                <Dropdown.Item eventKey="4">Set Button Values</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="5" onClick={logOut}>
                  SignOut
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className={`${style.userDropdown} ms-3 d-none d-xl-block`}>
          <DropdownButton align="end" title={userButton} id="demo-id">
            <Dropdown.Item eventKey="1">Account Statement</Dropdown.Item>
            <Dropdown.Item eventKey="2">Current Bet</Dropdown.Item>
            <Dropdown.Item eventKey="3">Casino Results</Dropdown.Item>
            <Dropdown.Item eventKey="4">Set Button Values</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="5" onClick={logOut}>
              SignOut
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className={`${style.searchBoxContainer} d-xl-none`}>
        <div className={style.searchBox}>
          <div className={searchInput ? `${style.active}` : null}>
            <Input type="text" placeholder="Search Here" />
          </div>
          <span onClick={showSearch}>
            <i className="fas fa-search-plus"></i>
          </span>
        </div>
      </div>
      <div className={style.news}>
        <div className="moving-text">
          Experience the Excitement of Live Sports, Live Casinos, Virtual
          Casinos and Fantasy Games On Our Exchange. Play Now To Win Unlimited.
        </div>
      </div>
    </div>
  );
};

export default Header;
