import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";


const movies = [
  {
    title: "Get Out",
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
  },
  {
    title: "Money",
    poster: "hhttp://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81651/81651_1000.jpg"
  },
  {
    title: "Avengets",
    poster: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520596571-avengers-art.jpg"
  },
  {
    title: "Venom",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80589/80589_1000.jpg" 
  }
];

class App extends Component {

  state = { //component state is Dynamic Variable for components, It expresses Component's  state
    greeting : `Hello`
  };


  componentWillMount(){

  }

  componentDidMount(){ // working after rendering
    setTimeout( () => {
      this.setState(      // you must change state's value using setState(), because it can call component's Life cycle function.
        {
          greeting: `Hello twice!`
        }
      )
    }, 1000 );
  }

  render() {
    return (
      <div className="App">
          <h5>{this.state.greeting}</h5>
          {movies.map( movie => {
          return (<Movie title={movie.title} poster={movie.poster} />);
        } )}      
      </div>
    );
  }
}

export default App;
