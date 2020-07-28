import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListService } from '../../services/list.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public lists: any[];
  public listSubscription: Subscription;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.listSubscription = this.listService.listsSubject.subscribe(
      (lists: any) => {
        this.lists = lists;
      }
    );
    this.listService.getUserLists(firebase.auth().currentUser.uid);
  }

  onSingleVideoGame(slug: string) {
    this.router.navigate(['profile', 'lists', slug]);
  }

}
