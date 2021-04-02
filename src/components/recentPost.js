import React, { Component } from 'react';

export default class RecentPost extends Component {
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