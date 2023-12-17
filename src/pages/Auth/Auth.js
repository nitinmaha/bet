import React from "react";
import Login from "./Login/Login";

//scss
import style from "./Auth.module.scss";

//images
import signal from "../../assets/png/signal.png";

const Auth = ({ loginHandler }) => {
  return (
    <div className={style.authWrapper}>
      <Login loginHandler={loginHandler} />
      <div className={style.supportBar}>
        <h2>24X7 Support</h2>

        <span>
          <img src={signal} alt="signal" />
        </span>
      </div>
    </div>
  );
};

export default Auth;
