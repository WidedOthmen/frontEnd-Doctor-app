import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserPageComponent } from './obser-page.component';

describe('ObserPageComponent', () => {
  let component: ObserPageComponent;
  let fixture: ComponentFixture<ObserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
