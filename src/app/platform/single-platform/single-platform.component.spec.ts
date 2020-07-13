import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlatformComponent } from './single-platform.component';

describe('SinglePlatformComponent', () => {
  let component: SinglePlatformComponent;
  let fixture: ComponentFixture<SinglePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
