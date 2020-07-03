import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVideoGameComponent } from './single-video-game.component';

describe('SingleVideoGameComponent', () => {
  let component: SingleVideoGameComponent;
  let fixture: ComponentFixture<SingleVideoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVideoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
