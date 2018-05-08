import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosEComponent } from './metodos-e.component';

describe('MetodosEComponent', () => {
  let component: MetodosEComponent;
  let fixture: ComponentFixture<MetodosEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodosEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
