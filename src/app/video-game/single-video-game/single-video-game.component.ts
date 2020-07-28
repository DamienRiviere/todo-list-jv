import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoGameService } from '../../services/video-game.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-single-video-game',
  templateUrl: './single-video-game.component.html',
  styleUrls: ['./single-video-game.component.css']
})
export class SingleVideoGameComponent implements OnInit, OnDestroy {

  public slug: string;
  public isAuth: boolean;
  public userId: string;

  public singleVideoGame: any;
  public singleVideoGameSubscription: Subscription;

  constructor(
    private videoGameService: VideoGameService,
    private route: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.getSlug();
    this.singleVideoGameSubscription = this.videoGameService.singleVideoGameSubject.subscribe(
      (singleVideoGame: any) => {
        this.singleVideoGame = singleVideoGame;
      }
    );
    this.videoGameService.getSingleVideoGame(this.slug);

    this.getUser();
  }

  ngOnDestroy(): void {
    this.singleVideoGameSubscription.unsubscribe();
  }

  getSlug(): void {
    if (typeof this.route.snapshot.params.videogame !== 'undefined') {
      this.slug = this.route.snapshot.params.videogame;
    } else {
      this.slug = this.route.snapshot.params.slug;
    }
  }

  getUser() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          this.userId = firebase.auth().currentUser.uid;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSaveGameToDoList(videoGame: object) {
    this.listService.addNewGameInGamesToDoList(videoGame, this.userId);
  }

  onSaveGameDoneList(videoGame: object) {
    this.listService.addNewGameInGamesDoneList(videoGame, this.userId);
  }
}
