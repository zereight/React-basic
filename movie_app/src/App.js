import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";
const movieTitles = [
  "Get Out",
  "Money",
  "Avengets",
  "Venom"
];

const movieImages = [
  "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81651/81651_1000.jpg",
  "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520596571-avengers-art.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80589/80589_1000.jpg"  
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />        
      </div>
    );
  }
}

export default App;
