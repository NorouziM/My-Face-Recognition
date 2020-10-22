import React from "react";
import "../SigninForm/SigninForm.css";
const RegisterForm = ({ onSignInClick }) => {
  return (
    <div className="mt-5 d-flex jutify-content-center">
      <form className="form-signin">
        <p className="h4 text-center mb-4">Register</p>
        <label htmlFor="name" className="grey-text">
          Your name
        </label>
        <input
          type="text"
          id="defaultFormLoginNameEx"
          className="form-control"
        />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input
          type="email"
          id="defaultFormLoginEmailEx"
          className="form-control"
        />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input
          type="password"
          id="defaultFormLoginPasswordEx"
          className="form-control"
        />
        <div className="text-center mt-4">
          <button
            onClick={() => onSignInClick("signIn")}
            className="btn btn-lg mt-5 btn-outline-dark btn-block"
            color="indigo"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
