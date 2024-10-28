// import the Media class:
const Media = require("./Media");

// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(tracks) {
        const trackLengths = tracks.map((track) => {
            return track.length;
        })
        const targetIndex = trackLengths.indexOf(Math.min(...trackLengths));
        return tracks[targetIndex];
    }
}

// don't change below
module.exports = Music;
