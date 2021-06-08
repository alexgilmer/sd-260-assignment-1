import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

const baseUrl = 'https://api.themoviedb.org/3/search/movie?';
const apiKey = '5114f9c20b4f4536879395b4e0499ce9';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favourites: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const qString = event.target[0].value.trim();
    if (!qString) return;

    this.getAllData(qString);
    event.target[0].value = '';
  }

  getAllData = (qString) => {
    this.getMovieList(qString)
    .then(data => {
      if (!data.results) {
        throw new Error('No data :(');
      }

      this.setState({movies: data.results});
    })
    .catch(err => {
      console.log(err);
    })
  }

  getMovieList = async (qString) => {
    const targetUrl = `${baseUrl}api_key=${apiKey}&query=${qString}`
    const response = await fetch(targetUrl);
    const data = await response.json();

    return data;
  }

  handleFavourites = (id) => {
    const tempArr = [...this.state.favourites];
    const index = this.state.favourites.findIndex((elem) => {
      return elem === id;
    });

    if (index === -1) {
      tempArr.push(id);
    } else {
      tempArr.splice(index, 1);
    }

    this.setState({favourites: tempArr});
  }

  render() { 
    return (
    <>
      <Header handleSubmitCB={this.handleSubmit}/>
      <div className="titleList">
        <div className="title">
          <h1>Movies</h1>
          <div className="titles-wrapper">
            {this.state.movies.map((movie) => {
              return (
              <Movie
                movie={movie}
                key={movie.id}
                heart={this.state.favourites.includes(movie.id)}
                favouritesCB={this.handleFavourites}
              />);
            })}
         </div>
        </div>
      </div>
    </>
    );
  }
}
 
export default App;
