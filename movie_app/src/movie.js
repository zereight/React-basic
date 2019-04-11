import React, {Component} from "react";
import "./movie.css";



class Moive extends Component {
    render(){
        return (
            <div className="Movie">
                <div className="Movie_Columns">
                    <MoviePoster poster={this.props.poster}/>
                </div>

                <div className="Movie_Columns">
                    <h2>{this.props.title}</h2>
                    <div className="Movie_Genres">
                        {this.props.genres.map( (genre,idx) => 
                            <span key={idx}>{genre} </span>
                         )}
                    </div>
                    <div className="Movie_synopsis">
                        {this.props.synopsis}
                    </div>
                </div>
                
                
            </div>
        );
    }
}  

class MoviePoster extends Component{
    render(){
        //console.log(this.props.title);
        return(
            <img alt={this.props.title}  className="Movie_Poster" src={this.props.poster} />
        );
    }
}




export default Moive;