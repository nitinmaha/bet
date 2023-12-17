import React from "react";

//scss
import style from "./Footer.module.scss";

//images
import signal from "../../assets/png/signal.png";

const Footer = () => {
  return (
    <div>
      <div className={style.supportBar}>
        <h2>24X7 Support</h2>

        <span>
          <img src={signal} alt="signal" />
        </span>
      </div>
      <div className={style.footerBottom}>
        <div className={style.secureLogo}>
          <div>
            <img src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" alt="ssl" />
          </div>
          <div className="ml-2">
            <b>100% SAFE</b>
            <div>Protected connection and encrypted data.</div>
          </div>
        </div>
        <div className={`${style.bottomIcons} d-inline-block`}>
          <a href="#/" rel="noreferrer">
            <img
              src="https://g1ver.sprintstaticdata.com/v12/static/front/img/18plus.png"
              alt="18Plus"
            />
          </a>
          <a
            href="https://www.gamcare.org.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://g1ver.sprintstaticdata.com/v12/static/front/img/gamecare.png"
              alt="gamecare"
            />
          </a>
          <a
            href="https://www.gamblingtherapy.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://g1ver.sprintstaticdata.com/v12/static/front/img/gt.png"
              alt="gt"
            />
          </a>
        </div>
      </div>
      <p class="text-center">© Copyright 2023. All Rights Reserved. Powered by UP247.</p>
    </div>
  );
};

export default Footer;
