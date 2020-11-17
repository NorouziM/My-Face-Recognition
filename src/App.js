import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import ExtraInfo from "./components/ExtraInfo/ExtraInfo";
import LinkInput from "./components/LinkInput/LinkInput";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import { ParticlesParams } from "./constants";
import Clarifai from "clarifai";
import SigninForm from "./components/SigninForm/SigninForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const app = new Clarifai.App({
  apiKey: "28fea5cd95e24c8a9e12cda6587a686b",
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageLink: "",
      route: "signOut", //signIn, register
      box: {},
      age: "",
      gender: "",
      user: {
        id: 0,
        name: "",
        email: "",
        entries: 0,
      },
    };
  }
  calBoxLocation = (response) => {
    const boudning_box =
      response.outputs[0].data.regions[0].region_info.bounding_box;

    const imageWidth = Number(document.querySelector("#imageBox").width);
    const imageHeight = Number(document.querySelector("#imageBox").height);
    console.log(boudning_box.boudning_box);

    return {
      bottom_row: imageHeight - boudning_box.bottom_row * imageHeight,
      left_col: boudning_box.left_col * imageWidth,
      right_col: imageWidth - boudning_box.right_col * imageWidth,
      top_row: boudning_box.top_row * imageHeight,
    };
  };
  setBoxLocation = (box) => {
    console.log(box);
    this.setState({ box: box });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ imageLink: this.state.input });
    app.models
      .predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then((response) => {
        this.setBoxLocation(this.calBoxLocation(response));
        this.prediction(response);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:3000/img/${this.state.user.id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
    }).then(
      this.setState(
        Object.assign(this.state.user, { entries: this.state.user.entries + 1 })
      )
    );
  };
  prediction = (response) => {
    const predictions = response.outputs[0].data.regions[0].data.concepts; // 0 to 19 is age prediction, 20 is Gender
    const age = predictions[0].name;
    const gender = predictions[20].name;
    this.setState({ age });
    this.setState({ gender });
  };
  onSignInClick = (route) => {
    this.setState({ route: route });
  };
  loaduser = (data) => {
    this.setState({ imageLink: "", gender: "" });
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
      },
    });
  };
  render() {
    return (
      <React.Fragment>
        <Particles className="particles" params={ParticlesParams} />
        <Navigation
          route={this.state.route}
          onSignInClick={this.onSignInClick}
        />
        {this.state.route === "register" ? (
          <RegisterForm
            onSignInClick={this.onSignInClick}
            loaduser={this.loaduser}
          />
        ) : this.state.route === "signOut" ? (
          <SigninForm
            onSignInClick={this.onSignInClick}
            loaduser={this.loaduser}
          />
        ) : (
          <React.Fragment>
            <Rank
              entries={this.state.user.entries}
              name={this.state.user.name}
            />
            <LinkInput
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceDetection
              imageLink={this.state.imageLink}
              box={this.state.box}
            />
            {this.state.gender.length !== 0 ? (
              <ExtraInfo gender={this.state.gender} age={this.state.age} />
            ) : (
              " "
            )}
          </React.Fragment>
        )}
        />
      </React.Fragment>
    );
  }
}
export default App;
