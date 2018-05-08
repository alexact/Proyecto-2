import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntercioComponent } from './suntercio.component';

describe('SuntercioComponent', () => {
  let component: SuntercioComponent;
  let fixture: ComponentFixture<SuntercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuntercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuntercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
