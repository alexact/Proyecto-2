import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglaFalsaComponent } from './regla-falsa.component';

describe('ReglaFalsaComponent', () => {
  let component: ReglaFalsaComponent;
  let fixture: ComponentFixture<ReglaFalsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglaFalsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglaFalsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
