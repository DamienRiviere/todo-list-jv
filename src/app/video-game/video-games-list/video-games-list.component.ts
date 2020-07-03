import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoGameService } from '../../services/video-game.service';
import { Router } from '@angular/router';
import { VideoGame } from '../../models/VideoGame';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-games-list',
  templateUrl: './video-games-list.component.html',
  styleUrls: ['./video-games-list.component.css']
})
export class VideoGamesListComponent implements OnInit, OnDestroy {

  public videoGames: VideoGame[];
  public videoGamesSubscription: Subscription;

  constructor(private videoGameService: VideoGameService, private router: Router) { }

  ngOnInit(): void {
    this.videoGamesSubscription = this.videoGameService.videoGamesSubject.subscribe(
      (videoGames: VideoGame[]) => {
        this.videoGames = videoGames;
      }
    );
    this.videoGameService.getVideoGames();
    this.videoGameService.emitVideoGames();
  }

  ngOnDestroy(): void {
    this.videoGamesSubscription.unsubscribe();
  }

}
