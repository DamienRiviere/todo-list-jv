import { Genre } from './Genre';

export class VideoGame {

  constructor(
    public name: string,
    public slug: string,
    public released: Date,
    public backgroundImage: string,
    public images: string[],
    public rating: number,
    public metacritic: number,
    public platform: string[],
    public genres: Genre[]
  ) {
    this.name = name;
    this.slug = slug;
    this.released = released;
    this.backgroundImage = backgroundImage;
    this.images = images;
    this.rating = rating;
    this.metacritic = metacritic;
    this.platform = platform;
    this.genres = genres;
  }
}
