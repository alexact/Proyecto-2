import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StresoctavosComponent } from './stresoctavos.component';

describe('StresoctavosComponent', () => {
  let component: StresoctavosComponent;
  let fixture: ComponentFixture<StresoctavosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StresoctavosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StresoctavosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
