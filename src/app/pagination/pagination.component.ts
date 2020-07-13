import {Component, Input, OnInit} from '@angular/core';
import {VideoGameService} from '../services/video-game.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() public next: string;
  @Input() public count: number;
  @Input() public paginationName: string;

  constructor(private videoGameService: VideoGameService) { }

  ngOnInit(): void {
  }

  onNextPage(next: string) {
    this.videoGameService.getNextPage(next);
  }

  getCurrentPage() {
    const currentPage = this.next.split('?page=');
    const regex = /\d+/g;

    return Number(currentPage[1].match(regex)[0]);
  }

  getPages() {
    let pages = Math.ceil(this.count / 20);

    if (pages <= 0) {
      return pages += 1;
    }

    return pages;
  }

}
