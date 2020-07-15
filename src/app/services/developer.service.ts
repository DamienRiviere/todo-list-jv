import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private developers = [];
  public developersSubject = new Subject<any[]>();

  private singleDeveloper = {};
  public singleDeveloperSubject = new Subject<any>();

  public urlApi = 'https://api.rawg.io/api/developers';

  constructor(private httpClient: HttpClient) { }

  getDevelopers(): void {
    this.httpClient
      .get<any>(this.urlApi)
      .subscribe(
        (response) => {
          this.developers = response;
          this.emitDevelopers();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  getSingleDeveloper(slug: string): void {
    this.httpClient
      .get<any>(`${this.urlApi}/${slug}`)
      .subscribe(
        (response) => {
          this.singleDeveloper = response;
          this.emitSingleDeveloper();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  emitDevelopers(): void {
    this.developersSubject.next(this.developers);
  }

  emitSingleDeveloper(): void {
    this.singleDeveloperSubject.next(this.singleDeveloper);
  }
}
