import {Component, OnDestroy, OnInit} from '@angular/core';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit, OnDestroy {

  public developers: any[];
  public developersSubscription: Subscription;

  public count: number;
  public next: number;
  public paginationName = 'développeurs';

  constructor(private developerService: DeveloperService, private router: Router) { }

  ngOnInit(): void {
    this.developersSubscription = this.developerService.developersSubject.subscribe(
      (developers: any) => {
        this.developers = developers.results;
        this.count = developers.count;
        this.next = developers.next;
      }
    );
    this.developerService.getDevelopers();
  }

  ngOnDestroy(): void {
    this.developersSubscription.unsubscribe();
  }

  onSingleDeveloper(slug: string): void {
    this.router.navigate(['developers', slug]);
  }

}
