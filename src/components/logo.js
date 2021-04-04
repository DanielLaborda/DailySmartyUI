import React, { Component } from 'react';
import logoImage from "../../static/assets/images/ds_circle_logo.png";
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105
    }

    return (
        <div className="logo-main">
          <Link to="/">
            <img style={size} alt="daily smarty ui image logo big" src={logoImage}/>
          </Link>
        </div>
    );
  }
}
