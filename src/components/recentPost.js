import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';


class RecentPost extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
        <div className="recent-posts">
            <div className="recent-post-wrapper">
                <div className="recentposts-heading">Recent Posts</div>
                <ul className="recent-post-posts">
                    <li>Recent post 0</li>
                    <li>Recent post 1</li>
                    <li>Recent post 2</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default connect(null, actions)(RecentPost);