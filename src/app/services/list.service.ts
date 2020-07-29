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

  saveLists(id: string, list: object) {
    // @ts-ignore
    firebase.database().ref(`/lists/${id}/${list.key}`).set(list.value);
  }

  getUserLists(id: string) {
    firebase.database().ref('/lists/' + id)
      .on('value', (data) => {
        this.lists = data.val() ? data.val() : [];
        this.emitLists();
      });
  }

  addNewGameInGamesDoneList(videoGame: object, id: string) {
    // @ts-ignore
    firebase.database().ref(`/lists/${id}/games-done`).child(videoGame.slug).set(videoGame);
  }

  removeVideoGame(id: string, list: object, videoGame: object)  {
    // @ts-ignore
    delete list.value[videoGame.key];
    this.saveLists(id, list);
  }

  addNewGameInGamesToDoList(videoGame: object, id: string) {
    // @ts-ignore
    firebase.database().ref(`/lists/${id}/games-to-do`).child(videoGame.slug).set(videoGame);
  }

  emitLists() {
    this.listsSubject.next(this.lists);
  }
}
