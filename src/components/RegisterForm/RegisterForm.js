import React from "react";
import "../SigninForm/SigninForm.css";
class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: "",
      registerPass: "",
      registerName: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };
  onPassChange = (event) => {
    this.setState({ registerPass: event.target.value });
  };
  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };
  onSubmit = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail.toLowerCase(),
        password: this.state.registerPass,
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
          <p className="h4 text-center mb-4">Register</p>
          <label htmlFor="name" className="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormLoginNameEx"
            className="form-control"
            onChange={this.onNameChange}
          />
          <br />
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
              color="indigo"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
