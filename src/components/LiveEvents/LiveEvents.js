import React from "react";

//scss
import style from "./LiveEvents.module.scss";
import { Link } from "react-router-dom";

const LiveEvents = () => {
  const events = [
    "Celta Vigo v Granada",
    "Augsburg v Dortmund",
    "Newcastle v Fulham",
    "Bournemouth v Luton",
    "Athletic Bilbao v Atletico Madrid",
  ];
  return (
    <div className={style.liveEventsList}>
      {events.map((event) => {
        return (
          <div className={style.list}>
            <Link className="blink_me">
              <span className="me-1">
                <i className="far fa-futbol"></i>
              </span>
              <div>{event}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LiveEvents;
