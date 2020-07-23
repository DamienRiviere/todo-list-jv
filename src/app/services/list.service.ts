import { Injectable } from '@angular/core';
import { List } from '../models/List';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public lists: List[] = [];
  public listName: string[] = [
    'Jeux à terminer', 'Jeux à faire'
  ];

  constructor() { }

  saveLists(id: string) {
    this.createListsForNewUser(id);
    firebase.database().ref('/lists').set(this.lists);
  }

  createListsForNewUser(id: string) {
    for (let i = 0; i < this.listName.length; i++) {
      const list = new List(
        this.listName[i],
        id
      );
      this.lists.push(list);
    }
  }
}
