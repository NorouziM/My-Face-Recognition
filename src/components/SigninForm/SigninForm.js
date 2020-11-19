import React, { Component } from "react";
import "./SigninForm.css";
class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPass: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPassChange = (event) => {
    this.setState({ signInPass: event.target.value });
  };
  onSubmit = () => {
    fetch("https://rocky-island-99446.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail.toLowerCase(),
        password: this.state.signInPass,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loaduser(user);
          this.props.onSignInClick("signIn");
        } else console.log("Login Failed");
      });
  };
  render() {
    return (
      <div className="mt-5 d-flex jutify-content-center">
        <form className="form-signin">
          <p className="h4 text-center mb-4">Sign in</p>
          <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
            onChange={this.onEmailChange}
          />
          <br />
          <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Your password
          </label>
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
            onChange={this.onPassChange}
          />
          <div className="text-center mt-4">
            <button
              onClick={this.onSubmit}
              className="btn btn-lg mt-5 btn-outline-dark btn-block"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninForm;
