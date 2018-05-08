import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapecioComponent } from './trapecio.component';

describe('TrapecioComponent', () => {
  let component: TrapecioComponent;
  let fixture: ComponentFixture<TrapecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
