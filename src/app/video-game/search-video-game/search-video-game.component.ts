import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoGameService } from '../../services/video-game.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-video-game',
  templateUrl: './search-video-game.component.html',
  styleUrls: ['./search-video-game.component.css']
})
export class SearchVideoGameComponent implements OnInit {

  public searchForm: FormGroup;
  public params: [] = [];

  constructor(private formBuilder: FormBuilder, private videoGameService: VideoGameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.getUrl();
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.searchForm.value;
    const term = formValue.name;

    this.videoGameService.searchVideoGame(term, this.params);
  }

  getUrl(): void {
    // @ts-ignore
    for (let i = 0; i < this.route.url.value.length; i++) {
      // @ts-ignore
      this.params.push(this.route.url.value[i].path);
    }
  }

}
