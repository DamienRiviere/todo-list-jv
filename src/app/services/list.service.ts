import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public lists: any[] = [];
  public listsSubject = new Subject<any[]>();

  constructor() { }

  getUserLists(id: string) {
    firebase.database().ref('/lists/' + id)
      .on('value', (data) => {
        this.lists = data.val() ? data.val() : [];
        this.emitLists();
      });
  }

  addNewGameInGamesToDoList(videoGame: object, id: string) {
    // @ts-ignore
    firebase.database().ref(`/lists/${id}/games-to-do`).child(videoGame.slug).set(videoGame);
  }

  addNewGameInGamesDoneList(videoGame: object, id: string) {
    // @ts-ignore
    firebase.database().ref(`/lists/${id}/games-done`).child(videoGame.slug).set(videoGame);
  }

  emitLists() {
    this.listsSubject.next(this.lists);
  }
}
