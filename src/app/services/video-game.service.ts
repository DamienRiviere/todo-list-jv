import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  private videoGames = [];
  public videoGamesSubject = new Subject<any[]>();

  private singleVideoGame = {};
  public singleVideoGameSubject = new Subject<any>();

  public urlApi = 'https://api.rawg.io/api/games';

  constructor(private httpClient: HttpClient) { }

  getVideoGames(): void {
    this.httpClient
      .get<any>(this.urlApi)
      .subscribe(
        (response) => {
          this.videoGames = response.results;
          this.emitVideoGames();
        },
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
  }

  getSingleVideoGame(slug: string): void {
    this.httpClient
      .get<any>(this.urlApi + '/' + slug)
      .subscribe(
        (response) => {
          this.singleVideoGame = response;
          this.emitSingleVideoGame();
        },
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
  }

  emitVideoGames() {
    this.videoGamesSubject.next(this.videoGames);
  }

  emitSingleVideoGame() {
    this.singleVideoGameSubject.next(this.singleVideoGame);
  }
}
