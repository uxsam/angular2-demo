import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing.MainComponent } from './landing.main.component';

describe('Landing.MainComponent', () => {
  let component: Landing.MainComponent;
  let fixture: ComponentFixture<Landing.MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing.MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing.MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
