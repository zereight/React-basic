import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";




class App extends Component {

  state = { 
    
  }


  componentWillMount(){

  }

  componentDidMount(){ 
    this._getMoives()
  }

 _renderMovies = () =>  {
  return this.state.movies.map( movie => {
    console.log(movie);
    return (<Movie key={movie.id} title={movie.title_english} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis} />);
  }) ;
}

 _getMoives = async () => {
  const movies = await this._callApi();
  //console.log(movies);
  this.setState(
    {
      movies
    }
  )
}

_callApi = async () => {
  let movieItems = await fetch(`https://yts.am/api/v2/list_movies.json?sort_by=download_count`)// return promise
  movieItems = await movieItems.json();
  movieItems = await movieItems.data.movies;
  return movieItems;
}

  render() {
    return (
      <div className="App">

          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
