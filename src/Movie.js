import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component {

//     static propTypes = {
//         title : PropTypes.string.isRequired,
//         poster : PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie({title, poster, genres, synopsis, rating}) {
    return (
        <div className = "Movie">
            <div className = "Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className = "Movie_Columns">
                <h1>{title}</h1>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenres genre = {genre} key = {index} />)}
                </div>
                <div className = "Movie_Rating">
                    Rating : <span>{rating}</span>
                </div>
                <div className = "Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'/>
                </div>
            </div>
        </div> 
    )
}

// class MoviePoster extends Component {

//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <img src={this.props.poster}/>
//         )
//     }
// }

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className = "Movie_Poster"/>
    )
}

function MovieGenres({genre}) {
    return (
        <span className = "Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.array.isRequired,
    synopsis : propTypes.string.isRequired,
    rating : propTypes.number.isRequired
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired,
    alt : propTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre : propTypes.string.isRequired
}

export default Movie;