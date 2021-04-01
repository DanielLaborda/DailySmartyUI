import React, { Component } from 'react';
import logoImage from "../../static/assets/images/ds_circle_logo.png";

export default class Logo extends Component {
  render() {
    return (
        <div className="logo-main">
          <img alt="daily smarty ui image logo big" src={logoImage}/>
        </div>
    );
  }
}
