import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoGameService } from '../../services/video-game.service';

@Component({
  selector: 'app-search-video-game',
  templateUrl: './search-video-game.component.html',
  styleUrls: ['./search-video-game.component.css']
})
export class SearchVideoGameComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private videoGameService: VideoGameService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.searchForm.value;
    const name = formValue.name;

    this.videoGameService.searchVideoGame(name);
  }

}
