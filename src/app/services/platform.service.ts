import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private platforms = [];
  public platformsSubject = new Subject<any[]>();

  private singlePlatform = {};
  public singlePlatformSubject = new Subject<any>();

  public urlApi = 'https://api.rawg.io/api/platforms';

  constructor(private httpClient: HttpClient) { }

  getPlatforms(): void {
    this.httpClient
      .get<any>(this.urlApi)
      .subscribe(
        (response) => {
          this.platforms = response;
          this.emitPlatforms();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  getSinglePlatform(slug: string): void {
    this.httpClient
      .get<any>(`${this.urlApi}/${slug}`)
      .subscribe(
        (response) => {
          this.singlePlatform = response;
          this.emitSinglePlatform();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      )
  }

  emitPlatforms(): void {
    this.platformsSubject.next(this.platforms);
  }

  emitSinglePlatform(): void {
    this.singlePlatformSubject.next(this.singlePlatform);
  }
}
