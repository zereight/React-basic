import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";




class App extends Component {

  state = { 
    greeting : `Hello`,
    movies : [
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
    ]
  };


  componentWillMount(){

  }

  componentDidMount(){ 
    setTimeout(() => {
      this.setState({
        movies : [
          ...this.state.movies, // ... add on remained movies
          { //new movies
            title: "Bumble Bee",
            poster: "https://cdn-images-1.medium.com/max/2600/1*asCuPasrO5qPB4hAAu2upQ.jpeg"
          }
        ]
      });
    },1000); //after 1 sec
  }

  render() {
    return (
      <div className="App">
          <h5>{this.state.greeting}</h5>
          {this.state.movies.map( movie => {
            return (<Movie title={movie.title} poster={movie.poster} />);
        } )}      
      </div>
    );
  }
}

export default App;
