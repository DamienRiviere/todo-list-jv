import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platforms-list',
  templateUrl: './platforms-list.component.html',
  styleUrls: ['./platforms-list.component.css']
})
export class PlatformsListComponent implements OnInit, OnDestroy {

  public platforms: any[];
  public platformsSubscription: Subscription;

  public count: number;
  public next: string;

  constructor(private platformService: PlatformService, private router: Router) { }

  ngOnInit(): void {
    this.platformsSubscription = this.platformService.platformsSubject.subscribe(
      (platforms: any) => {
        this.platforms = platforms.results;
        this.count = platforms.count;
        this.next = platforms.next;
      }
    );
    this.platformService.getPlatforms();
  }

  ngOnDestroy(): void {
    this.platformsSubscription.unsubscribe();
  }

  onSinglePlatform(id: number): void {
    this.router.navigate(['platforms', id]);
  }

}
