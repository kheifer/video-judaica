export class Movie {
  public availability: string = "Available";
  constructor(public title: string, public runtime: string, public rating: string, public language: string, public genre: string, public format: string, public deposit: string, public imdb: string, public restriction: string){}
}
