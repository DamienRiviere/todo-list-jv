import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeveloperService } from '../../services/developer.service';

@Component({
  selector: 'app-search-developer',
  templateUrl: './search-developer.component.html',
  styleUrls: ['./search-developer.component.css']
})
export class SearchDeveloperComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.searchForm.value;
    const term = formValue.name;

    this.developerService.searchDeveloper(term);
  }
}
