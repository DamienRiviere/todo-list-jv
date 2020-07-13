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

  constructor(private platformService: PlatformService, private router: Router) { }

  ngOnInit(): void {
    this.platformsSubscription = this.platformService.platformsSubject.subscribe(
      (platforms: any) => {
        this.platforms = platforms.results;
      }
    );
    this.platformService.getPlatforms();
  }

  ngOnDestroy(): void {
    this.platformsSubscription.unsubscribe();
  }

  onSinglePlatform(slug: string): void {
    this.router.navigate(['platforms', slug]);
  }

}
