import React, {Component} from "react";
import "./movie.css";



class Moive extends Component {
    render(){
        return (
            <div>
                <h1>Hello guys!</h1>
                <h2>{this.props.title}</h2>
                <MoviePoster poster={this.props.poster}/>
            </div>
        );
    }
}  

class MoviePoster extends Component{
    render(){
        //console.log(this.props.title);
        return(
            <img alt="movie images" src={this.props.poster} />
        );
    }
}

export default Moive;