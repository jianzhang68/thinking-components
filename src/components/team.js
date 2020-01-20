import React, { Component } from "react";
import cTitle from "./components/cTitle";

class team extends Component {
  render() {
    return (
      <div className="item team">
        <img className="image" src={this.props.image} />
        <cTitle content={this.props.content} />
      </div>
    );
  }
}

export default team;
