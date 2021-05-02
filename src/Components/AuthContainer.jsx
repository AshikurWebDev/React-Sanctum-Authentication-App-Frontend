import React, { useContext } from "react";
import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../Constants/AuthStatus";
import AuthNotAuthLoggedin from "./AuthNotLoggedin";
import AuthSignup from "./AuthSignup";
import AuthLogin from "./AuthLogin";
import AuthLogOut from "./AuthLogOut";
import { AppContext } from "../contexts/AppContext";

const AuthContainer = () => {
  const appContext = useContext(AppContext);
  const { authStatus } = appContext;
  const showNotLoggedIn = authStatus === NOT_LOGGED_IN ? "" : "hidden";
  const showLoginForm = authStatus === LOG_IN_FORM ? "" : "hidden";
  const showSignupForm = authStatus === SIGN_UP_FORM ? "" : "hidden";
  const showLoggedIn = authStatus === LOGGED_IN ? "" : "hidden";

  return (
    <div className="w-full">
      <div className={showNotLoggedIn + " justify-end py-4"}>
        <AuthNotAuthLoggedin />
      </div>
      <div className={showLoginForm + " justify-end py-4"}>
        <AuthLogin option="login" />
      </div>
      <div className={showSignupForm + " justify-end py-4"}>
        <AuthSignup option="signup" />
      </div>
      <div className={showLoggedIn + " justify-end py-4"}>
        <AuthLogOut />
      </div>
    </div>
  );
};

export default AuthContainer;
