import React, {Component} from "react";
import "./movie.css";

class Moive extends Component {
    render(){
        return (
            <div>
                <h1>Hello guys!</h1>
                <MoviePoster/>
            </div>
        );
    }
}  

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/04/02/105828186-1554212544565avengers-endgame-poster-og-social-crop.530x298.jpg?v=1554212633" />
        );
    }
}

export default Moive;