import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoGameService } from '../../services/video-game.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-video-game',
  templateUrl: './single-video-game.component.html',
  styleUrls: ['./single-video-game.component.css']
})
export class SingleVideoGameComponent implements OnInit, OnDestroy {

  public slug: string;

  public singleVideoGame: any;
  public singleVideoGameSubscription: Subscription;

  constructor(private videoGameService: VideoGameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.singleVideoGameSubscription = this.videoGameService.singleVideoGameSubject.subscribe(
      (singleVideoGame: any) => {
        this.singleVideoGame = singleVideoGame;
      }
    );
    this.videoGameService.getSingleVideoGame(this.slug);
  }

  ngOnDestroy(): void {
    this.singleVideoGameSubscription.unsubscribe();
  }

}
