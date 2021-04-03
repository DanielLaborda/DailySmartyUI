import React, { Component } from 'react';

import { connect }  from 'react-redux';

class ResultsPost extends Component {

  render() {
    return (
      <ul className="result-posts">
          <div className="result-posts-wrapper">
              <ul className="results-post-posts">
                  RESULTS GO HERE
              </ul>
          </div>

      </ul>
    );
  }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ResultsPost);