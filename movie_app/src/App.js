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


  //this is occured automatically.
  //When Render :  componentWillMount() => render() => componenetDidMount()
  //When Update : componentWillReceiveProps() => shouldComponentUpdate() == true
  // => componentWillUpdate() => render()  => componentDidUpdate()

  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        {movies.map( movie => {
          return (<Movie title={movie.title} poster={movie.poster} />);
        } )}      
      </div>
    );
  }
}

export default App;
