import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlatformService } from '../../services/platform.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-platform',
  templateUrl: './single-platform.component.html',
  styleUrls: ['./single-platform.component.css']
})
export class SinglePlatformComponent implements OnInit, OnDestroy {

  public id: number;

  public singlePlatform: any;
  public singlePlatformSubscription: Subscription;

  constructor(private platformService: PlatformService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.singlePlatformSubscription = this.platformService.singlePlatformSubject.subscribe(
      (singlePlatform: any) => {
        this.singlePlatform = singlePlatform;
      }
    );
    this.platformService.getSinglePlatform(this.id);
  }

  ngOnDestroy(): void {
    this.singlePlatformSubscription.unsubscribe();
  }

}
