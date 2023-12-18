import React, { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

//components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

//scss
import style from "./Main.module.scss";
import Footer from "../../components/Footer/Footer";
import LiveEvents from "../../components/LiveEvents/LiveEvents";

//images
import SplashImg from "../../assets/png/wel-1702816082206.png";

export default function Main() {
  const [show, setShow] = useState(true);

  const closeModalHandler = () => {
    localStorage.setItem("seenPopUp", true);
    setShow(false);
  };

  useEffect(() => {
    const returningUser = localStorage.getItem("seenPopUp");
    setShow(!returningUser);
  }, []);

  return (
    <div>
      <Header />
      {show && (
        <Modal size="lg" show={show} onHide={closeModalHandler} scrollable>
          <Modal.Header closeButton>
            <Modal.Title>
              Beware Of Phishing Websites Before Login. Enable Security Auth To
              Secure Your ID.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <img src={SplashImg} alt="Welcome" />
          </Modal.Body>
        </Modal>
      )}
      <div className={`${style.menuWrapper} d-none d-xl-block`}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/lottery"
              >
                Lottery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/cricket"
              >
                Cricket
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/tennis"
              >
                Tennis
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/football"
              >
                Football
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/tabletennis"
              >
                Table Tennis
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/baccart"
              >
                Baccart
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/cards32"
              >
                32 Cards
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/teenpatti"
              >
                Teenpatti
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/poker"
              >
                Poker
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
                to="/lucky7"
              >
                Lucky 7
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.main}>
        <div className={style.sideBar}>
          <Sidebar />
        </div>
        <div className={`${style.liveEvents} liveEvents d-xl-none`}>
          <LiveEvents />
        </div>

        <div className={`${style.customLinks} customLinks d-xl-none`}>
          <ul>
            <li>
              <Link to="#">Lotterys</Link>
            </li>
            <li>
              <Link to="#">Sports</Link>
            </li>
            <li>
              <Link to="#">Our Casino</Link>
            </li>
            <li>
              <Link to="#">Live Casino</Link>
            </li>
            <li>
              <Link to="#">Slots</Link>
            </li>
            <li>
              <Link to="#">Fantasy</Link>
            </li>
          </ul>
        </div>
        <div className={`${style.content} content`}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
