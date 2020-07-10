import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVideoGameComponent } from './search-video-game.component';

describe('SearchVideoGameComponent', () => {
  let component: SearchVideoGameComponent;
  let fixture: ComponentFixture<SearchVideoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVideoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
