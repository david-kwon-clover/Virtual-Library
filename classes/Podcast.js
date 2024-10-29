const Music = require("./Music");

class Podcast extends Music {
  constructor(
    title,
    year,
    genre,
    artist,
    length,
    host,
    episodeName,
    episodeNumber,
    guests
  ) {
    super(title, year, genre, artist, length);
    this.host = host;
    this.episodeName = episodeName;
    this.episodeNumber = episodeNumber;
    this.guests = guests;
  }

  listen() {
    return `${this.title} - Episode: ${this.episodeName}. Hosted by ${this.host} and featuring guests ${this.guests}. Length: ${this.length} seconds.`;
  }
}

module.exports = Podcast;
