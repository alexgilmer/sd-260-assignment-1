import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
    <>
      <Header />
      <div className="titleList">
        <div className="title">
          <h1>Movies</h1>
          <div className="titles-wrapper">
            {/* MOVIES GO HERE */}
            <Movie />
         </div>
        </div>
      </div>
    </>
    );
  }
}
 
export default App;
