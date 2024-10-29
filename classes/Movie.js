// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`
    }

    static longestMovie(movies) {
        const movieLengths = movies.map((movie) => {
            return movie.duration;
        })
        const targetIndex = movieLengths.indexOf(Math.max(...movieLengths));
        return movies[targetIndex];
    }

    static calculateAverageRating(movies) {
        const movieRatings = movies.map((movie) => {
            return movie.rating;
        })
        const totalRatings = movieRatings.reduce((total, movie) => {
            total += movie;
            return total;
        }, 0);
        return totalRatings / movies.length;
    }
}

// don't change below
module.exports = Movie;