import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

//components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

//scss
import style from "./Main.module.scss";
import Footer from "../../components/Footer/Footer";
import LiveEvents from "../../components/LiveEvents/LiveEvents";

export default function Main() {
  return (
    <div>
      <Header />
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
        <div className={`${style.liveEvents} d-xl-none`}>
          <LiveEvents />
        </div>

        <div className={`${style.customLinks} d-xl-none`}>
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
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
