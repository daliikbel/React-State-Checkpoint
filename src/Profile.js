import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((timer) => ({ time: timer.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, profession, bio, imgSrc } = this.props;
    return (
      <>
        <p>Counter: {this.state.time}</p>
        <div className="image">
        <img src={imgSrc} alt={fullName} style={{ width: '300px', height: 'auto' }} />
        </div>
        <h1>{fullName}</h1>
        <h2>{profession}</h2>
        <h3>{bio}</h3>
      </>
    );
  }
}
export default Profile;
