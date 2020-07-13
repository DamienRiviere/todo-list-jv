import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoGameService } from '../../services/video-game.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-games-list',
  templateUrl: './video-games-list.component.html',
  styleUrls: ['./video-games-list.component.css']
})
export class VideoGamesListComponent implements OnInit, OnDestroy {

  public videoGames: any[];
  public videoGamesSubscription: Subscription;

  public count: number;
  public next: string;

  constructor(private videoGameService: VideoGameService, private router: Router) { }

  ngOnInit(): void {
    this.videoGamesSubscription = this.videoGameService.videoGamesSubject.subscribe(
      (videoGames: any) => {
        this.videoGames = videoGames.results;
        this.count = videoGames.count;
        this.next = videoGames.next;
      }
    );
    this.videoGameService.getVideoGames();
  }

  ngOnDestroy(): void {
    this.videoGamesSubscription.unsubscribe();
  }

  onSingleVideoGame(slug: string) {
    this.router.navigate(['video-games', slug]);
  }
}
