import React, { useState } from "react";

//scss
import style from "./Login.module.scss";

//image
import logo from "../../../assets/png/logo.png";

//components
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const Login = ({loginHandler}) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPass, setEnterPass] = useState("");

  const emailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };

  const passChangeHandler = (event) => {
    setEnterPass(event.target.value);
  };

  const loginButtonHandler = (event) => {
    event.preventDefault();
    loginHandler(enterEmail, enterPass);
  };

  return (
    <div className={style.loginWrapper}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>

      <form>
        <div className={style.formHeading}>
          Login <i className="fas fa-hand-point-down"></i>
        </div>
        <div className={style.formRow}>
          <div className={style.inputGroup}>
            <Input
              type="text"
              placeholder="Username"
              onChange={emailChangeHandler}
              value={enterEmail}
            />
            <span className={style.inputGroupText}>
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className={style.formRow}>
          <div className={style.inputGroup}>
            <Input
              type="password"
              placeholder="Password"
              onChange={passChangeHandler}
              value={enterPass}
            />
            <span className={style.inputGroupText}>
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>
        <div className={style.btnRow}>
          <Button type="button" color="primary-btn" onClick={loginButtonHandler}>
            Login <i class="fas fa-sign-in-alt float-end mt-1"></i>
          </Button>
        </div>
        <div className={style.btnRow}>
          <Button
            type="button"
            color="primary-btn"
            onClick={loginButtonHandler}
          >
            Login with demo ID <i class="fas fa-sign-in-alt float-end mt-1"></i>
          </Button>
        </div>
        <div className={style.smallText}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#/">Privacy Policy</a> and <a href="#/">Terms of Service</a>{" "}
          apply.
        </div>
      </form>
    </div>
  );
};

export default Login;
