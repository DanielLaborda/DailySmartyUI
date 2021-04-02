import React, { Component } from 'react';
import Logo from './logo';
import RecentPost from './recentPost';
import SearchBar from './searchBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />
        <SearchBar />
        <RecentPost />
      </div>
    );
  }
}
