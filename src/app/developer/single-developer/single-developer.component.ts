import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeveloperService } from '../../services/developer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGameService } from '../../services/video-game.service';

@Component({
  selector: 'app-single-developer',
  templateUrl: './single-developer.component.html',
  styleUrls: ['./single-developer.component.css']
})
export class SingleDeveloperComponent implements OnInit, OnDestroy {

  public slug: string;

  public singleDeveloper: any;
  public singleDeveloperSubscription: Subscription;

  public videoGames: any[];
  public videoGamesSubscription: Subscription;

  public count: number;
  public next: string;
  public previous: string;
  public paginationName = 'jeux';

  constructor(
    private developerService: DeveloperService,
    private route: ActivatedRoute,
    private videoGameService: VideoGameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.singleDeveloperSubscription = this.developerService.singleDeveloperSubject.subscribe(
      (singleDeveloper: any) => {
        this.singleDeveloper = singleDeveloper;
      }
    );
    this.developerService.getSingleDeveloper(this.slug);
    this.videoGamesSubscription = this.videoGameService.videoGamesSubject.subscribe(
      (videoGames: any) => {
        this.videoGames = videoGames.results;
        this.count = videoGames.count;
        this.next = videoGames.next;
        this.previous = videoGames.previous;
      }
    );
    this.videoGameService.getVideoGamesByDeveloper(this.slug);
  }

  ngOnDestroy(): void {
    this.singleDeveloperSubscription.unsubscribe();
    this.videoGamesSubscription.unsubscribe();
  }

  onSingleVideoGame(slug: string, videoGame: string) {
    this.router.navigate(['developers', slug, videoGame]);
  }

}
