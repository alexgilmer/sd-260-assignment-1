/*
<div class="movie">
  <img
    src="https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
    alt="Movie poster"
  />
  <div class="overlay">
    <div class="title">Fight Club</div>
    <div class="rating">8.4/10</div>
    <div class="plot">
      A ticking-time-bomb insomniac and a slippery soap salesman
      channel primal male aggression into a shocking new form of
      therapy. Their concept catches on, with underground "fight
      clubs" forming in every town, until an eccentric gets in the
      way and ignites an out-of-control spiral toward oblivion.
    </div>
    <div data-toggled="true" class="listToggle">
      <div>
        <i class="far fa-heart"></i><i class="fas fa-heart"></i>
      </div>
    </div>
  </div>
</div>
*/

import React from 'react';

const Movie = ({ movie, heart, favouritesCB }) => {
  let poster = 'image-not-available.jpg';
  if (movie.poster_path !== null) {
    poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  return (
    <div className="movie">
      <img src={poster} alt="Movie poster" />
      <div className="overlay">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}</div>
        <div className="plot">{movie.overview}</div>
        <div data-toggled={heart} className="listToggle">
          <div onClick={() => favouritesCB(movie.id)}>
            <i className="far fa-heart"></i><i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Movie;
