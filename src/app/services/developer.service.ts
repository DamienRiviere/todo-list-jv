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

  public baseUrl = 'https://api.rawg.io/api/developers';

  constructor(private httpClient: HttpClient) { }

  getDevelopers(): void {
    this.httpClient
      .get<any>(this.baseUrl)
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
      .get<any>(`${this.baseUrl}/${slug}`)
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

  getNextPage(url: string): void {
    this.httpClient
      .get<any>(url)
      .subscribe(
        (response) => {
          response.results.forEach((result) => {
            // @ts-ignore
            this.developers.results.push(result);
          });
          // @ts-ignore
          this.developers.next = response.next;
          this.emitDevelopers();
        },
        (error) => {
          console.log(`Erreur : ${error}`);
        }
      );
  }

  searchDeveloper(term: string): void {
    term.trim().replace(/ /g, '-').toLowerCase();

    this.httpClient
      .get<any>(`${this.baseUrl}?search=${term}`)
      .subscribe(
        (response) => {
          this.developers = response;
          // @ts-ignore
          this.developers.count = response.count;
          // @ts-ignore
          this.developers.next = response.next;
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

  emitSingleDeveloper(): void {
    this.singleDeveloperSubject.next(this.singleDeveloper);
  }
}
