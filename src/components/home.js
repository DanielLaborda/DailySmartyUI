import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPost from './recentPost';

import { connect } from 'react-redux'
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit = function(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push("/results");
    });
  }

  render() {
    return (
      <div className='home'>
        <Logo />
        <SearchBar onSubmit={(query)=>this.handleSearchBarSubmit(query)}/>
        <RecentPost />
      </div>
    );
  }
}

export default connect(null, actions)(Home);