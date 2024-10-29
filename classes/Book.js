// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(books) {
        const ratings = books.map((book) => {
            return book.rating;
        })
        const targetIndex = ratings.indexOf(Math.max(...ratings));
        return books[targetIndex];
    }

    static calculateAverageRating(books) {
        const bookRatings = books.map((book) => {
            return book.rating;
        })
        const totalRatings = bookRatings.reduce((total, book) => {
            total += book;
            return total;
        }, 0);
        return totalRatings / books.length;
    }
}

// don't change below
module.exports = Book;
