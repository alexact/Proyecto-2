import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtonRapshonComponent } from './newton-rapshon.component';

describe('NewtonRapshonComponent', () => {
  let component: NewtonRapshonComponent;
  let fixture: ComponentFixture<NewtonRapshonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtonRapshonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtonRapshonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
