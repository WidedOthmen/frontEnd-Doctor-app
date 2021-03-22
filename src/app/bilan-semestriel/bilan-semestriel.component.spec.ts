import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanSemestrielComponent } from './bilan-semestriel.component';

describe('BilanSemestrielComponent', () => {
  let component: BilanSemestrielComponent;
  let fixture: ComponentFixture<BilanSemestrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanSemestrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanSemestrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
