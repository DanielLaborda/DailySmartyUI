import React, { Component } from 'react';
import Logo from './logo';
import RecentPost from './recentPost';
import SearchBar from './searchBar';

export default class Home extends Component {

  handleFormSubmit = function(query) {
    console.log("Try to handle submit for query", query);
    //navegate to a new route
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar onSubmit={(query)=>this.handleFormSubmit(query)}/>
        <RecentPost />
      </div>
    );
  }
}
