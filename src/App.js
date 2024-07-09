

import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Ikbel Dali",
      bio: "A passionate developer",
      imgSrc:
        "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
      profession: "Developer",
      show: false,
    };
  }

  touchClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        { console.log('this.state', this.state)}

        <button onClick={this.touchClick}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && (
          <Profile
            fullName={this.state.fullName}
            profession={this.state.profession}
            bio={this.state.bio}
            imgSrc={this.state.imgSrc}
          />
        )}
      </div>
    );
  }
}

export default App;
