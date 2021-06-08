import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

const baseUrl = 'https://api.themoviedb.org/3/search/movie?';
const apiKey = '5114f9c20b4f4536879395b4e0499ce9';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const str = event.target[0].value.trim();
    if (!str) return;

    this.getData(str)
    .then(data => console.log(data));
  }

  getData = async (qString) => {
    const targetUrl = `${baseUrl}api_key=${apiKey}&query=${qString}`
    const response = await fetch(targetUrl);
    const data = await response.json();

    return data;
  }

  render() { 
    return (
    <>
      <Header handleSubmitCB={this.handleSubmit}/>
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
