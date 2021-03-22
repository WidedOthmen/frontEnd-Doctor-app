import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenFormulaireComponent } from './examen-formulaire.component';

describe('ExamenFormulaireComponent', () => {
  let component: ExamenFormulaireComponent;
  let fixture: ComponentFixture<ExamenFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
