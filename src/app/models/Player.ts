// models/Player.ts

export default class Player {
  id: number;
  imageUrl: string;
  name: string;
  prop: string;
  last5Games: string;
  last15Games: string;
  thisSeason: string;
  team: string;
  bookLines: string;

  constructor(
    id: number,
    imageUrl: string,
    name: string,
    prop: string,
    last5Games: string,
    last15Games: string,
    thisSeason: string,
    team: string,
    bookLines: string,
  ) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.name = name;
    this.prop = prop;
    this.last5Games = last5Games;
    this.last15Games = last15Games;
    this.thisSeason = thisSeason;
    this.team = team;
    this.bookLines = bookLines;
  }
}
