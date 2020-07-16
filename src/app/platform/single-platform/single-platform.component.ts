import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlatformService } from '../../services/platform.service';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoGameService} from '../../services/video-game.service';

@Component({
  selector: 'app-single-platform',
  templateUrl: './single-platform.component.html',
  styleUrls: ['./single-platform.component.css']
})
export class SinglePlatformComponent implements OnInit, OnDestroy {

  public id: number;
  public count: number;
  public next: string;
  public paginationName = 'jeux';

  public singlePlatform: any;
  public singlePlatformSubscription: Subscription;

  public videoGames: any[];
  public videoGamesSubscription: Subscription;

  constructor(
    private platformService: PlatformService,
    private route: ActivatedRoute,
    private videoGameService: VideoGameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.singlePlatformSubscription = this.platformService.singlePlatformSubject.subscribe(
      (singlePlatform: any) => {
        this.singlePlatform = singlePlatform;
      }
    );
    this.platformService.getSinglePlatform(this.id);
    this.videoGamesSubscription = this.videoGameService.videoGamesSubject.subscribe(
      (videoGames: any) => {
        this.videoGames = videoGames.results;
        this.count = videoGames.count;
        this.next = videoGames.next;
      }
    );
    this.videoGameService.getVideoGamesByPlatform(this.id);
  }

  ngOnDestroy(): void {
    this.singlePlatformSubscription.unsubscribe();
  }

  onSingleVideoGame(id: number, videoGame: string) {
    this.router.navigate(['platforms', id, videoGame]);
  }

}
