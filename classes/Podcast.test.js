const Music = require("./Music");
const Podcast = require("./Podcast");
const { describe, test, expect, beforeEach } = require("@jest/globals");

describe("Podcast tests", () => {
  let testPodcast;
  beforeEach(() => {
    testPodcast = new Podcast(
      "The Basement Yard",
      2015,
      "Comedy",
      "Basement Boys",
      361,
      "Joe & Frank",
      "Frank's Big Fight",
      72,
      "N/A"
    );
  });

  test("Can create a new Podcast instance that is child of Music", () => {
    expect(testPodcast).toBeInstanceOf(Podcast);
    expect(testPodcast).toBeInstanceOf(Music);
  });

  test("Podcast has properties of host, episodeName, episodeNumber, and guests", () => {
    expect(testPodcast).toHaveProperty("host", "Joe & Frank");
    expect(testPodcast).toHaveProperty("episodeName", "Frank's Big Fight");
    expect(testPodcast).toHaveProperty("episodeNumber", 72);
    expect(testPodcast).toHaveProperty("guests", "N/A");
  });

  test("Podcast summary method returns the correct summary", () => {
    expect(testPodcast.listen()).toBe(
      "The Basement Yard - Episode: Frank's Big Fight. Hosted by Joe & Frank and featuring guests N/A. Length: 361 seconds."
    );
  });
});
