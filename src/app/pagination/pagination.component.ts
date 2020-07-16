import { Component, Input, OnInit } from '@angular/core';
import { VideoGameService } from '../services/video-game.service';
import { DeveloperService } from '../services/developer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() public next: string;
  @Input() public previous: string;
  @Input() public count: number;
  @Input() public paginationName: string;

  constructor(
    private videoGameService: VideoGameService,
    private developerService: DeveloperService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onNextPage(next: string) {
    // @ts-ignore
    switch (this.route.url.value[0].path) {
      case 'video-games':
        this.videoGameService.getNextPage(next);
        break;
      case 'developers':
        // @ts-ignore
        if (this.route.url.value.length > 1) {
          this.videoGameService.getNextPage(next);
        } else {
          this.developerService.getNextPage(next);
        }
        break;
      case 'platforms':
        this.videoGameService.getNextPage(next);
    }
  }


}
