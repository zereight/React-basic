import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";




class App extends Component {

  state = { 
    movies:[]
  }


  componentWillMount(){

  }

  componentDidMount(){ 
    fetch(`https://yts.am/api/v2/list_movies.json?sort_by=download_count`)// return promise
    .then( res => res.json() ) //get fetch's returned obj when fetch is finished// obj to json
    .then( res2 => console.log(res2) ) // print json
    .catch(err => console.log(err)) //when error occurred
  }

 _renderMovies = () =>  {
  return this.state.movies.map( movie => {
    return (<Movie title={movie.title} poster={movie.poster} />);
  }) ;
}

  render() {
    return (
      <div className="App">
          <h5>{this.state.greeting}</h5>
          {this.state.movies.length !== 0 ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
