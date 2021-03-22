import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservFormulaireComponent } from './observ-formulaire.component';

describe('ObservFormulaireComponent', () => {
  let component: ObservFormulaireComponent;
  let fixture: ComponentFixture<ObservFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
