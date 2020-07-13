import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private developers = [];
  public developersSubject = new Subject<any[]>();

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

  emitDevelopers(): void {
    this.developersSubject.next(this.developers);
  }
}
