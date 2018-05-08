import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangulosComponent } from './rectangulos.component';

describe('RectangulosComponent', () => {
  let component: RectangulosComponent;
  let fixture: ComponentFixture<RectangulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
