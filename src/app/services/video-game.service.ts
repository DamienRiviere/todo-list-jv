import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoGame } from '../models/VideoGame';
import { Genre } from '../models/Genre';
import { Subject } from 'rxjs';
import {Platform} from '../models/Platform';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  private videoGames: VideoGame[] = [];
  private videoGame: VideoGame;
  public videoGamesSubject = new Subject<VideoGame[]>();

  constructor(private httpClient: HttpClient) { }

  emitVideoGames() {
    this.videoGamesSubject.next(this.videoGames);
  }

  getVideoGames() {
    this.httpClient
      .get<any>('https://api.rawg.io/api/games?page=1')
      .subscribe(
        (response) => {
          this.setVideoGames(response.results);
          this.emitVideoGames();
        },
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
  }

  setVideoGames(videoGames: any) {
    videoGames.forEach((videoGame) => {
      this.setSingleVideoGame(videoGame);
    });
    console.log(this.videoGames);
  }

  setSingleVideoGame(videoGame): void {
    const genres = this.setGenres(videoGame.genres);
    const platforms = this.setPlatforms(videoGame.platforms);
    const images = this.setImages(videoGame.short_screenshots);

    this.videoGame = new VideoGame(
      videoGame.name,
      videoGame.slug,
      videoGame.released,
      videoGame.background_image,
      images,
      videoGame.rating,
      videoGame.metacritic,
      platforms,
      genres
    );

    this.videoGames.push(this.videoGame);
  }

  setGenres(genres: any[]): any[] {
    const genresForOneGame = [];

    genres.forEach((genre) => {
      const singleGenre = new Genre(
        genre.name,
        genre.slug
      );

      genresForOneGame.push(singleGenre);
    });

    return genresForOneGame;
  }

  setPlatforms(platforms: any[]): any[] {
    const platformsForOneGame = [];

    platforms.forEach((platform) => {
      const singlePlatform = new Platform(
        platform.platform.name,
        platform.platform.slug
      );
      platformsForOneGame.push(singlePlatform);
    });

    return platformsForOneGame;
  }

  setImages(images: any[]): any[] {
    const imagesForOneGame = [];

    images.forEach((image) => {
      imagesForOneGame.push(image.image);
    });

    return imagesForOneGame;
  }
}
