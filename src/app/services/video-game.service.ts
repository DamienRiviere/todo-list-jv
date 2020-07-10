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
          this.videoGames = response;
          this.emitVideoGames();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  getNextPage(url: string): void {
    this.httpClient
      .get<any>(url)
      .subscribe(
        (response) => {
          response.results.forEach((result) => {
            // @ts-ignore
            this.videoGames.results.push(result);
          });
          // @ts-ignore
          this.videoGames.next = response.next;
          this.emitVideoGames();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  getSingleVideoGame(slug: string): void {
    this.httpClient
      .get<any>(`${this.urlApi}/${slug}`)
      .subscribe(
        (response) => {
          this.singleVideoGame = response;
          this.emitSingleVideoGame();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  searchVideoGame(term: string): void {
    term.trim().replace(/ /g, '-').toLowerCase();

    this.httpClient
      .get<any>(`${this.urlApi}?search=${term}`)
      .subscribe(
        (response) => {
          this.videoGames = response;
          // @ts-ignore
          this.videoGames.count = response.count;
          // @ts-ignore
          this.videoGames.next = response.next;
          this.emitVideoGames();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  emitVideoGames(): void {
    this.videoGamesSubject.next(this.videoGames);
  }

  emitSingleVideoGame(): void {
    this.singleVideoGameSubject.next(this.singleVideoGame);
  }
}
